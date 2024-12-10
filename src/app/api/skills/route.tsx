import { SkillT } from "@/app/skills/types"
import { ALL_SKILLS } from "../../skills/consts";

const hasCategory = (categories: string[], skill: SkillT) => Boolean(
  !categories.length || 
  categories.includes(skill.category)
)

const hasQuery = (query: string, skill: SkillT) => Boolean(
  !query || 
  skill.name.toLowerCase().includes(query.toLowerCase()) || 
  skill.category.toLowerCase().includes(query.toLowerCase())
)

export async function GET(req: Request) {
  const url = new URL(req.url)
  const searchParams = Object.fromEntries(new URLSearchParams(url.search).entries());
  const query = searchParams.q
  const categories = searchParams.categories?.split(',') || []

  const filteredSkills: SkillT[] = []

  for(const skill of ALL_SKILLS) {
    if(hasCategory(categories, skill) && hasQuery(query, skill)) {
      filteredSkills.push(skill)
    }
  }

  return new Response(JSON.stringify(filteredSkills))
}