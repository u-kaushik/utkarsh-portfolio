import { useEffect, useRef } from 'react'

export default function Starfield() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let stars = []
    let featureStars = []
    let shootingStars = []
    let lastShootTime = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const init = () => {
      resize()

      // Regular background stars
      stars = Array.from({ length: 160 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.3,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.002 + 0.001,
        drift: (Math.random() - 0.5) * 0.08,
        hue: Math.random() > 0.7 ? 15 + Math.random() * 20 : 0,
        sat: Math.random() > 0.7 ? 40 + Math.random() * 30 : 0,
      }))

      // Feature stars — larger, brighter, dramatic pulse
      featureStars = Array.from({ length: 8 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        baseR: 1.5 + Math.random() * 1.5,
        phase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.0008 + Math.random() * 0.001,
        hue: Math.random() > 0.5 ? 10 + Math.random() * 25 : 0,
        sat: Math.random() > 0.5 ? 50 + Math.random() * 30 : 0,
      }))
    }

    const spawnShootingStar = () => {
      const side = Math.random()
      let x, y, angle
      if (side < 0.7) {
        // From top area
        x = Math.random() * canvas.width * 0.8
        y = Math.random() * canvas.height * 0.3
        angle = Math.PI * 0.15 + Math.random() * 0.2
      } else {
        // From left area
        x = Math.random() * canvas.width * 0.3
        y = Math.random() * canvas.height * 0.5
        angle = Math.PI * 0.05 + Math.random() * 0.15
      }

      const speed = 8 + Math.random() * 6
      shootingStars.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        decay: 0.012 + Math.random() * 0.008,
        length: 60 + Math.random() * 40,
        width: 1 + Math.random() * 1.5,
        warm: Math.random() > 0.5,
      })
    }

    const draw = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Regular stars
      stars.forEach((star) => {
        const twinkle = 0.3 + Math.sin(time * star.speed + star.phase) * 0.35 + 0.35
        const color =
          star.sat > 0
            ? `hsla(${star.hue}, ${star.sat}%, 85%, ${twinkle})`
            : `rgba(255, 255, 255, ${twinkle})`

        ctx.fillStyle = color
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2)
        ctx.fill()

        star.y += star.drift
        if (star.y < -5) star.y = canvas.height + 5
        if (star.y > canvas.height + 5) star.y = -5
      })

      // Feature stars — dramatic pulse with glow
      featureStars.forEach((star) => {
        const pulse = Math.sin(time * star.pulseSpeed + star.phase)
        const intensity = 0.4 + pulse * 0.3 + 0.3
        const r = star.baseR + pulse * 1.2

        // Outer glow
        const glow = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, r * 4)
        const glowColor = star.sat > 0
          ? `hsla(${star.hue}, ${star.sat}%, 80%, ${intensity * 0.15})`
          : `rgba(255, 255, 255, ${intensity * 0.15})`
        glow.addColorStop(0, glowColor)
        glow.addColorStop(1, 'transparent')
        ctx.fillStyle = glow
        ctx.beginPath()
        ctx.arc(star.x, star.y, r * 4, 0, Math.PI * 2)
        ctx.fill()

        // Core
        const coreColor = star.sat > 0
          ? `hsla(${star.hue}, ${star.sat}%, 90%, ${intensity})`
          : `rgba(255, 255, 255, ${intensity})`
        ctx.fillStyle = coreColor
        ctx.beginPath()
        ctx.arc(star.x, star.y, Math.max(0.5, r), 0, Math.PI * 2)
        ctx.fill()

        // Cross-hair sparkle on brightest moments
        if (intensity > 0.65) {
          const sparkleLen = r * 3 * (intensity - 0.4)
          ctx.strokeStyle = star.sat > 0
            ? `hsla(${star.hue}, ${star.sat}%, 85%, ${(intensity - 0.5) * 0.4})`
            : `rgba(255, 255, 255, ${(intensity - 0.5) * 0.4})`
          ctx.lineWidth = 0.5
          ctx.beginPath()
          ctx.moveTo(star.x - sparkleLen, star.y)
          ctx.lineTo(star.x + sparkleLen, star.y)
          ctx.moveTo(star.x, star.y - sparkleLen)
          ctx.lineTo(star.x, star.y + sparkleLen)
          ctx.stroke()
        }
      })

      // Shooting stars
      // Spawn one roughly every 10-18 seconds
      if (time - lastShootTime > 10000 + Math.random() * 8000) {
        spawnShootingStar()
        lastShootTime = time
      }

      shootingStars = shootingStars.filter((s) => s.life > 0)
      shootingStars.forEach((s) => {
        const tailX = s.x - s.vx * (s.length / 10) * s.life
        const tailY = s.y - s.vy * (s.length / 10) * s.life

        const grad = ctx.createLinearGradient(tailX, tailY, s.x, s.y)
        grad.addColorStop(0, 'rgba(255, 255, 255, 0)')
        if (s.warm) {
          grad.addColorStop(0.7, `rgba(230, 59, 46, ${s.life * 0.4})`)
          grad.addColorStop(1, `rgba(255, 200, 150, ${s.life * 0.9})`)
        } else {
          grad.addColorStop(0.7, `rgba(200, 210, 255, ${s.life * 0.4})`)
          grad.addColorStop(1, `rgba(255, 255, 255, ${s.life * 0.9})`)
        }

        ctx.strokeStyle = grad
        ctx.lineWidth = s.width * s.life
        ctx.lineCap = 'round'
        ctx.beginPath()
        ctx.moveTo(tailX, tailY)
        ctx.lineTo(s.x, s.y)
        ctx.stroke()

        // Bright head
        ctx.fillStyle = s.warm
          ? `rgba(255, 220, 180, ${s.life})`
          : `rgba(255, 255, 255, ${s.life})`
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.width * s.life * 1.5, 0, Math.PI * 2)
        ctx.fill()

        s.x += s.vx
        s.y += s.vy
        s.life -= s.decay
      })

      animId = requestAnimationFrame(draw)
    }

    init()
    draw(0)
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  )
}
