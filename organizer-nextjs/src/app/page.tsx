import { Hero } from './components/hero'
import Link from 'next/link'

export default async function Home() {
  return (
    <>
      <Hero />
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">About</h2>
          <div className="portfolio-section bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a <span className="font-semibold">full-stack developer</span> with over <span className="font-semibold">4 years of experience</span>. During those years, I've worked with many different 
              {' '}<Link href="/skills" className="text-blue-500 underline">technologies and frameworks</Link>
            </p>

            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              I started my journey in <span className="font-semibold">Control and Automation Engineering</span> in 2015, where I discovered my passion for software development. Initially, I started studying JavaScript by myself. In 2019, I went on an exchange to Portugal and took as many development classes as I could. There, I learned the foundational knowledge of web development.
            </p>

            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Upon returning to Brazil in 2020, I continued studying ReactJs independently. This paved the way for my internship and career start as a web developer. Through all these projects, my strength lies in the frontend, particularly with <span className="font-semibold">ReactJs</span>. I am dynamic and possess strong communication skills.
            </p>

            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              I enjoy suggesting improvements and refactoring tasks, as I believe in keeping things clean, simple, and up to date. I take pride in teaching friends, teammates, and have worked as a volunteer teacher in Brazil, helping others achieve their goals.
            </p>

            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Today, I hold a <span className="font-semibold">Bachelor's degree in Control and Automation Engineering</span>, and am well-established in my professional life. I continue to study independently to keep my skills current.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

