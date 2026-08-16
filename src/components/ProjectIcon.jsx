import { Laptop, Smartphone } from 'lucide-react'

const icons = {
  globotrotter: '/icons/globotrotter.png',
  'clear-halal': '/icons/clear-halal.png',
  fullwise: '/icons/fullwise.png',
  'app-factory': '/icons/app-factory.svg',
  'rca-flow': '/icons/rca-flow.svg',
  'mission-control': '/icons/mission-control.svg',
  propfolio: '/icons/propfolio.svg',
}

const slugAliases = {
  'globotrotter': 'globotrotter',
  'clear halal': 'clear-halal',
  'full wise': 'fullwise',
  'fullwise': 'fullwise',
  'the app factory': 'app-factory',
  'app factory': 'app-factory',
  'rca flow': 'rca-flow',
  'mission control': 'mission-control',
  'propfolio': 'propfolio',
}

export function projectSlug(value = '') {
  return slugAliases[value.toLowerCase()] || value
}

export default function ProjectIcon({ project, size = 'md', className = '' }) {
  const slug = projectSlug(typeof project === 'string' ? project : project?.slug)
  const src = icons[slug] || '/favicon.svg'
  const title = typeof project === 'string' ? project : project?.title
  return <img className={`project-icon project-icon-${size} ${className}`} src={src} alt="" aria-hidden="true" title={title ? `${title} icon` : undefined}/>
}

export function PlatformIcon({ project, size = 14 }) {
  const slug = projectSlug(typeof project === 'string' ? project : project?.slug)
  const isIOS = ['globotrotter', 'clear-halal', 'fullwise'].includes(slug)
  const Icon = isIOS ? Smartphone : Laptop
  return <Icon size={size} aria-hidden="true"/>
}
