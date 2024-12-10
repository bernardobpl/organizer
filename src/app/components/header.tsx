'use client'

import Link from 'next/link'
import { Menu } from 'lucide-react'
// import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs"

export function Header() {
  // const { isSignedIn, user } = useUser()

  return (
    <header className="bg-gray-50 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex py-2">
            <Link href="/" className="flex flex-shrink-0 items-center justify-center border-2 hover:border-indigo-600 rounded-full px-4 py-2 transition duration-150 ease-in-out">
              <span className="text-xl font-bold text-indigo-600">Bernardo Lopes</span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link href="/" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              Home
            </Link>
            <Link href="/skills" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              Skills
            </Link>
            <Link href="/contact" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              Contact
            </Link>
            <Link href="/cv" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              CV
            </Link>
          </div>
          {/* <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {isSignedIn ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-700">Welcome, {user.firstName}</span>
                <SignOutButton>
                  <button className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                    Sign out
                  </button>
                </SignOutButton>
              </div>
            ) : (
              <SignInButton mode="modal">
                <button className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Sign in
                </button>
              </SignInButton>
            )}
          </div> */}
          <div className="sm:hidden flex items-center">
            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <Menu className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
