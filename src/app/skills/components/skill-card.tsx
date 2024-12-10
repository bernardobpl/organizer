import React from 'react'
import { SkillT } from '../types'
import { Card, CardContent } from '@/lib/components/card'

export const SkillCard: React.FC<{ skill: SkillT }> = ({ skill }) => {
  return (
    <Card className="transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 bg-white border border-gray-200">
      <CardContent>
        <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
        <p className="text-sm text-gray-600">{skill.category}</p>
      </CardContent>
    </Card>
  )
}


