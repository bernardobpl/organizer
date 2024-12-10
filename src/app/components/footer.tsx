import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import { GITHUB_PROFILE_URL, LINKEDIN_PROFILE_URL, EMAIL, PHONE } from '@/app/contact/consts'

export function Footer() {
  return (
    <footer className="bg-gray-50 sticky bottom-0 z-50">
      <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a href={GITHUB_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">GitHub</span>
            <Github className="h-6 w-6" aria-hidden="true" />
          </a>
          <a href={LINKEDIN_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-6 w-6" aria-hidden="true" />
          </a>
        </div>
        <div className="flex mt-8 md:mt-0 md:order-1 space-x-6">
          <div className="mx-auto flex items-center space-x-3">
            <Mail className="h-6 w-6 text-gray-400" aria-hidden="true" />
            <span className="text-sm text-gray-500 m">{EMAIL}</span>
          </div>
          <div className="mx-auto flex items-center space-x-3">
            <Phone className="h-6 w-6 text-gray-400" aria-hidden="true" />
            <span className="text-sm text-gray-500 m">{PHONE}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
