import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const revealGroups = [
  '.project-grid',
  '.dual-lens',
  '.case-gallery',
  '.quick-read',
  '.case-split',
  '.judgement-section',
  '.assurance-section',
  '.move-grid',
  '.outcome-block',
  '.next-study',
  '.glossary-hero > div',
  '.glossary-grid',
]

export default function ScrollReveal() {
  const location = useLocation()

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const groups = [...document.querySelectorAll(revealGroups.join(','))]

    groups.forEach(group => {
      group.dataset.reveal = 'group'
      const children = group.matches('.project-grid,.dual-lens,.move-grid,.glossary-grid')
        ? [...group.children]
        : []
      children.forEach((child, index) => {
        child.dataset.revealItem = ''
        child.style.setProperty('--reveal-delay', `${Math.min(index, 5) * 70}ms`)
      })
    })

    if (reduceMotion) {
      groups.forEach(group => group.classList.add('is-visible'))
      return undefined
    }

    document.documentElement.classList.add('motion-ready')
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.08, rootMargin: '0px 0px -7% 0px' })

    groups.forEach(group => observer.observe(group))
    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('motion-ready')
    }
  }, [location.pathname])

  return null
}
