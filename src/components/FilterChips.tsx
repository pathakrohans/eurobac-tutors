'use client'

interface FilterChipsProps {
  options: string[]
  selected: string[]
  onChange: (selected: string[]) => void
  label?: string
}

export default function FilterChips({ options, selected, onChange, label }: FilterChipsProps) {
  const toggleOption = (option: string) => {
    if (selected.includes(option)) {
      onChange(selected.filter((o) => o !== option))
    } else {
      onChange([...selected, option])
    }
  }

  const clearAll = () => {
    onChange([])
  }

  return (
    <div>
      {label && (
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-medium text-gray-700">{label}</p>
          {selected.length > 0 && (
            <button
              onClick={clearAll}
              className="text-xs text-black hover:text-gray-600 font-medium border-b border-black hover:border-gray-600 transition-colors"
            >
              Clear all
            </button>
          )}
        </div>
      )}
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isSelected = selected.includes(option)
          return (
            <button
              key={option}
              onClick={() => toggleOption(option)}
              className={`px-4 py-2 text-sm font-medium transition-all border ${
                isSelected
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-black hover:text-black'
              }`}
            >
              {option}
            </button>
          )
        })}
      </div>
    </div>
  )
}

