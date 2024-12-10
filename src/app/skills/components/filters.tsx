'use client'

import { Form } from "@/lib/components/form";
import { SearchInput } from "@/lib/components/search-input";
import { useRouter, useSearchParams } from "next/navigation";
import { CATEGORIES } from "../types";
import { CategoriesMultiselect } from "./categories-multiselect";
import { FormEvent, useState } from "react";
import { RotateCcw } from "lucide-react";

export function Filters() {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  const q = searchParams.get('q') || ''
  const categoriesParam = searchParams.get('categories')
  const initialCategories = categoriesParam ? categoriesParam.split(',') as CATEGORIES[] : []

  const [selectedCategories, setSelectedCategories] = useState<CATEGORIES[]>(initialCategories)
  const [query, setQuery] = useState(q)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const params = new URLSearchParams()
    if (query) params.set('q', query)
    if (selectedCategories.length > 0) params.set('categories', selectedCategories.join(','))
    
    const search = params.toString()
    const url = `/skills${search ? `?${search}` : ''}`
    
    router.push(url)
  }

  const handleReset = () => {
    setQuery('')
    setSelectedCategories([])
    router.push('/skills')
  }

  const hasFilters = query || selectedCategories.length > 0

  return (
    <Form onSubmit={handleSubmit} className="flex gap-4 items-end">
      <SearchInput
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onClear={() => setQuery('')}
        placeholder="Search skills..."
        name="q"
        className="w-72"
      />
      <CategoriesMultiselect 
        selectedCategories={selectedCategories}
        onChange={setSelectedCategories}
        className="w-72"
      />
      <div className="flex gap-2 min-w-fit">
        <button 
          type="submit"
          className="h-10 px-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 min-w-fit"
        >
          Apply Filters
        </button>
        <button
          type="button"
          onClick={handleReset}
          disabled={!hasFilters}
          className="h-10 px-3 rounded-lg flex items-center gap-2 text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed hover:enabled:text-gray-900 transition-colors"
        >
          <RotateCcw className="h-4 w-4" />
          Reset
        </button>
      </div>
    </Form>
  )
}