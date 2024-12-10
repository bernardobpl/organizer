'use client'

import { ChevronDown, X } from 'lucide-react'
import * as React from 'react'
import { useEffect, useRef } from 'react'
import { Tooltip } from './tooltip'

export interface SelectOptionT<T = string> {
  label: string
  value: T
}

interface SelectProps<T = string> {
  options: SelectOptionT<T>[]
  selectedOptions: SelectOptionT<T>[]
  multiselect?: boolean
  className?: string
  placeholder: string
  onChange: (selectedOptions: SelectOptionT<T>[]) => void
  name: string
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
}

export function Select<T = string>({
  options,
  selectedOptions,
  multiselect = false,
  className = '',
  placeholder = 'Select option',
  onChange,
  name,
  isOpen = false,
  onOpenChange
}: SelectProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        onOpenChange?.(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [onOpenChange])

  const handleOptionClick = (option: SelectOptionT<T>) => {
    let newSelectedOptions: SelectOptionT<T>[]

    if (multiselect) {
      const isSelected = selectedOptions.some((selected) => selected.value === option.value)
      if (isSelected) {
        newSelectedOptions = selectedOptions.filter((selected) => selected.value !== option.value)
      } else {
        newSelectedOptions = [...selectedOptions, option]
      }
    } else {
      newSelectedOptions = [option]
      onOpenChange?.(false)
    }

    onChange?.(newSelectedOptions)
  }

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation()
    onChange?.([])
  }

  const displayValue = selectedOptions.length > 0
    ? `${selectedOptions.length} selected`
    : placeholder

  const tooltipContent = selectedOptions.length > 0
    ? selectedOptions.map(option => option.label).join(', ')
    : null

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      <input 
        type="hidden" 
        name={name} 
        value={selectedOptions.map(option => option.value).join(',')}
      />
      {tooltipContent ? (
        <Tooltip content={tooltipContent}>
          <div
            className="flex items-center justify-between w-full px-3 py-2 text-left bg-white border rounded-lg shadow-sm cursor-pointer border-input hover:bg-accent hover:text-accent-foreground"
            onClick={() => onOpenChange?.(!isOpen)}
          >
            <span className="block truncate">{displayValue}</span>
            <div className="flex items-center gap-2">
              {selectedOptions.length > 0 && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="text-gray-400 hover:text-gray-600 focus:outline-none"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
              <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
            </div>
          </div>
        </Tooltip>
      ) : (
        <div
          className="flex items-center justify-between w-full px-3 py-2 text-left bg-white border rounded-lg shadow-sm cursor-pointer border-input hover:bg-accent hover:text-accent-foreground"
          onClick={() => onOpenChange?.(!isOpen)}
        >
          <span className="block truncate">{displayValue}</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
        </div>
      )}

      {isOpen && (
        <div className="absolute z-10 w-full py-1 mt-1 overflow-auto bg-white rounded-md shadow-lg max-h-60">
          {options.map((option) => {
            const isSelected = selectedOptions.some((selected) => selected.value === option.value)

            return (
              <div
                key={typeof option.value === 'string' ? option.value : JSON.stringify(option.value)}
                className={`px-3 py-2 cursor-pointer flex items-center space-x-2 hover:bg-accent hover:text-accent-foreground
                  ${isSelected ? 'bg-primary/10' : ''}`}
                onClick={() => handleOptionClick(option)}
              >
                <input type="checkbox" checked={isSelected} onChange={() => handleOptionClick(option)} />
                <span className="block font-normal truncate">{option.label}</span>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
