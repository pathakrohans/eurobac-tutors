import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  const hoverClass = hover ? 'hover:border-primary-400 transition-all duration-300' : ''
  return (
    <div className={`bg-white border p-6 ${hoverClass} ${className}`}>
      {children}
    </div>
  )
}

