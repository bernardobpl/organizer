import { ALL_SKILLS } from "./consts"
import { SkillT } from "./types"

export const hasCategory = (categories: string[], skill: SkillT) => Boolean(
  !categories.length || 
  categories.includes(skill.category)
)

export const hasQuery = (query: string, skill: SkillT) => Boolean(
  !query || 
  skill.name.toLowerCase().includes(query.toLowerCase()) || 
  skill.category.toLowerCase().includes(query.toLowerCase())
)

export function getSkills(searchParams: Record<string, string>) {
  const query = searchParams.q
  const categories = searchParams.categories?.split(',') || []

  const filteredSkills: SkillT[] = []

  for(const skill of ALL_SKILLS) {
    if(hasCategory(categories, skill) && hasQuery(query, skill)) {
      filteredSkills.push(skill)
    }
  }

  const softSkills = filteredSkills.filter(skill => skill.category === 'Soft Skills')
  const hardSkills = filteredSkills.filter(skill => skill.category !== 'Soft Skills')

  return { softSkills, hardSkills }
}