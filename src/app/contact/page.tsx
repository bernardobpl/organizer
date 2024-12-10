import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import { EMAIL, GITHUB_PROFILE_URL, LINKEDIN_PROFILE_URL, PHONE } from './consts'

export default function ContactPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl space-y-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Contact Me
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Feel free to reach out through any of these channels. I'm always open to discussing new opportunities, projects, or just having a friendly chat.
            </p>
          </div>

          <div className="divide-y divide-gray-100">
            <div className="flex flex-col gap-8 py-8 first:pt-0 last:pb-0">
              <div className="flex flex-col gap-6">
                {/* Email */}
                <a 
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-4 rounded-lg border p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-sm text-gray-500">{EMAIL}</p>
                  </div>
                </a>

                {/* Phone */}
                <a 
                  href={`tel:${PHONE}`}
                  className="flex items-center gap-4 rounded-lg border p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-sm text-gray-500">{PHONE}</p>
                  </div>
                </a>

                {/* Social Links */}
                <div className="flex gap-4">
                  {/* LinkedIn */}
                  <a 
                    href={LINKEDIN_PROFILE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center gap-4 rounded-lg border p-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="rounded-lg bg-primary/10 p-2">
                      <Linkedin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">LinkedIn</h3>
                      <p className="text-sm text-gray-500">Professional Profile</p>
                    </div>
                  </a>

                  {/* GitHub */}
                  <a 
                    href={GITHUB_PROFILE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center gap-4 rounded-lg border p-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="rounded-lg bg-primary/10 p-2">
                      <Github className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">GitHub</h3>
                      <p className="text-sm text-gray-500">Code Repository</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}