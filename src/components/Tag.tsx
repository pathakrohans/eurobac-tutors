interface TagProps {
  children: React.ReactNode
  variant?: 'default' | 'primary' | 'secondary'
  size?: 'sm' | 'md'
}

export default function Tag({ children, variant = 'default', size = 'sm' }: TagProps) {
  const variants = {
    default: 'bg-gray-100 text-gray-900 border border-gray-200',
    primary: 'bg-black text-white',
    secondary: 'bg-gray-200 text-gray-900 border border-gray-300',
  }
  
  const sizes = {
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
  }

  return (
    <span className={`inline-flex items-center font-medium ${variants[variant]} ${sizes[size]}`}>
      {children}
    </span>
  )
}

