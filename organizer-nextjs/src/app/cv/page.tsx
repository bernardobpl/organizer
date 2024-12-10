import { Download } from 'lucide-react'

export default function CVPage() {
  return (
    <div className="flex flex-grow flex-col items-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between w-full max-w-5xl mb-8">
        <h1 className="block text-3xl font-bold text-gray-900">Curriculum Vitae</h1>
        <a
          href="/cv/ResumeBernardoLopes.pdf"
          download
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <Download className="h-4 w-4 mr-2" />
          Download CV
        </a>
      </div>
      <div className="flex flex-grow w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden">
        <object
          data="/cv/ResumeBernardoLopes.pdf"
          type="application/pdf"
          className="w-full flex-grow"
        >
          <p>
            It appears your browser doesn't support embedded PDFs.
            You can <a href="/cv/ResumeBernardoLopes.pdf" className="text-indigo-600 hover:text-indigo-500">download the PDF</a> instead.
          </p>
        </object>
      </div>
    </div>
  )
}
