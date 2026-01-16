import { ReactNode } from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  hover?: boolean
}

export default function Card({ children, className = '', hover = false, ...props }: CardProps) {
  const hoverClass = hover ? 'hover:border-primary-400 transition-all duration-300' : ''
  return (
    <div className={`bg-white border p-6 ${hoverClass} ${className}`} {...props}>
      {children}
    </div>
  )
}
