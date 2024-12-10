import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  liveUrl: string
  githubUrl: string
}

export function ProjectCard({ title, description, imageUrl, liveUrl, githubUrl }: ProjectCardProps) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="relative h-48">
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
        <div className="mt-4 flex space-x-3">
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <ExternalLink className="mr-2 h-4 w-4" />
            Live Demo
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

