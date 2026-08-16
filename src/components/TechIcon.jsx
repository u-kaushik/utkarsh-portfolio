import { SiFirebase, SiJavascript, SiReact, SiSwift, SiTypescript } from 'react-icons/si'
import { Cloud, Database, Smartphone } from 'lucide-react'

const tech = {
  Swift: { Icon: SiSwift, color: '#f05138' },
  SwiftUI: { Icon: SiSwift, color: '#f05138' },
  React: { Icon: SiReact, color: '#149eca' },
  TypeScript: { Icon: SiTypescript, color: '#3178c6' },
  JavaScript: { Icon: SiJavascript, color: '#b99a00' },
  Firebase: { Icon: SiFirebase, color: '#dd7f00' },
  Firestore: { Icon: Database, color: '#dd7f00' },
  iOS: { Icon: Smartphone, color: '#71635b' },
  GCP: { Icon: Cloud, color: '#4285f4' },
}

export function TechIcon({ name, size = 15 }) {
  const entry = tech[name]
  if (!entry) return null
  const Icon = entry.Icon
  return <Icon size={size} style={{ color: entry.color }} aria-hidden="true"/>
}

export function TechLabel({ name, className = '' }) {
  return <span className={`tech-label ${className}`}><TechIcon name={name}/>{name}</span>
}

export function hasTechIcon(name) { return Boolean(tech[name]) }
