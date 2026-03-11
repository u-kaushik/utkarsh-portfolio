import { useEffect, useRef } from 'react'

export default function Starfield() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let stars = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const init = () => {
      resize()
      stars = Array.from({ length: 180 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.3,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.002 + 0.001,
        drift: (Math.random() - 0.5) * 0.08,
        // Warm tint: mix of white, pale orange, pale red
        hue: Math.random() > 0.7 ? 15 + Math.random() * 20 : 0,
        sat: Math.random() > 0.7 ? 40 + Math.random() * 30 : 0,
      }))
    }

    const draw = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

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

        // Slow drift
        star.y += star.drift
        if (star.y < -5) star.y = canvas.height + 5
        if (star.y > canvas.height + 5) star.y = -5
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
