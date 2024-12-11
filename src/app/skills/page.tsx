import { PageProps } from '../../../.next/types/app/skills/page'
import { Filters } from './components/filters'
import { SkillSection } from './components/skill-section'
import { getSkills } from './helpers'

export default async function SkillsPage({ searchParams }: PageProps) {
  const {softSkills, hardSkills} = getSkills(await searchParams)

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Skills & Expertise
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore my diverse skill set spanning both technical and interpersonal domains. Use the filters below to discover specific skills or browse through different categories.
          </p>
        </div>
        <Filters />
        <SkillSection title="Soft Skills" skills={softSkills} className="mt-4" />
        <SkillSection title="Technical Skills" skills={hardSkills} className="bg-white" />
      </div>
    </div>
  )
}
