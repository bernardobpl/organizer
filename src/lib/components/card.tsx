import React, { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white overflow-hidden shadow-md rounded-lg transition-all duration-300 ease-in-out hover:shadow-lg ${className}`}>
      {children}
    </div>
  )
}

export function CardHeader({ children, className = '' }: CardProps) {
  return (
    <div className={`px-4 py-5 sm:px-6 ${className}`}>
      {children}
    </div>
  )
}

export function CardContent({ children, className = '' }: CardProps) {
  return (
    <div className={`px-4 py-5 sm:p-6 ${className}`}>
      {children}
    </div>
  )
}

export function CardFooter({ children, className = '' }: CardProps) {
  return (
    <div className={`px-4 py-4 sm:px-6 ${className}`}>
      {children}
    </div>
  )
}

