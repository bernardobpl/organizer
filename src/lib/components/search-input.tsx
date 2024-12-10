import { Search, X } from 'lucide-react'

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
  ref?: React.Ref<HTMLInputElement>
  name: string
  wrapperClassName?: string
  onClear?: () => void
}

export function SearchInput({ wrapperClassName="", className = '', value, onClear, ...props }: SearchInputProps) {
  return (
    <div className={`relative w-full ${wrapperClassName}`}>
      <input
        type="text"
        className={`w-full pl-10 pr-8 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${className}`}
        value={value}
        {...props}
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
      {value && (
        <button
          type="button"
          onClick={onClear}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
        >
          <X className="h-5 w-5" />
        </button>
      )}
    </div>
  )
}
