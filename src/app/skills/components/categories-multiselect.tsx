'use client'

import { Select, SelectOptionT } from '@/lib/components/select'
import { CATEGORIES } from '../types'
import { CATEGORIES_OPTIONS } from '../consts'
import { useState } from 'react'

interface CategoriesMultiselectProps {
  selectedCategories?: CATEGORIES[]
  onChange?: (categories: CATEGORIES[]) => void
  className?: string
}

export function CategoriesMultiselect({
  selectedCategories = [],
  onChange,
  className = ''
}: CategoriesMultiselectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const selectedOptions = CATEGORIES_OPTIONS.filter(option => 
    selectedCategories.includes(option.value)
  )

  const handleChange = (selectedOptions: SelectOptionT<CATEGORIES>[]) => {
    const selectedCategories = selectedOptions.map((option) => option.value)
    onChange?.(selectedCategories)
  }

  return (
    <Select
      options={CATEGORIES_OPTIONS}
      selectedOptions={selectedOptions}
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      multiselect
      name="categories"
      placeholder="Select categories"
      onChange={handleChange}
      className={className}
    />
  )
}