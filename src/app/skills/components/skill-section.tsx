import { Card, CardContent } from '@/lib/components/card'
import { SkillCard } from './skill-card'
import { SkillT } from '../types'

interface SkillSectionProps {
  title: string
  skills: SkillT[]
  className?: string
}

export function SkillSection({ title, skills, className }: SkillSectionProps) {
  if (skills.length === 0) {
    return null
  }

  const categories = new Set(skills.map(skill => skill.category))

  return (
    <section className={`py-16 ${className}`}>
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
        {title}
      </h2>
      <div className="space-y-12">
        {Array.from(categories).map(category => (
          <Card key={category} className="overflow-hidden bg-gray-50 border border-gray-200">
            <CardContent>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {skills
                  .filter(skill => skill.category === category)
                  .map(skill => (
                    <SkillCard key={skill.name} skill={skill} />
                  ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

