import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import MobileNav from './components/MobileNav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Oguz Guneren - Data Scientist & AI Engineer',
  description: 'Personal website of Oguz Guneren, showcasing projects and experience in Data Science and AI Engineering',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={inter.className}>
        <nav className="sticky top-0 z-50 bg-[#013220] backdrop-blur-sm border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link href="/" className="text-base sm:text-lg font-semibold text-[#FFFDD0]">
                  Oğuz Güneren
                </Link>
              </div>
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                <Link
                  href="/"
                  className="text-sm lg:text-base text-[#FFFDD0] hover:text-white transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/experience"
                  className="text-sm lg:text-base text-[#FFFDD0] hover:text-white transition-colors"
                >
                  Experience
                </Link>
                <Link
                  href="/projects"
                  className="text-sm lg:text-base text-[#FFFDD0] hover:text-white transition-colors"
                >
                  Projects
                </Link>
                <Link
                  href="/certifications"
                  className="text-sm lg:text-base text-[#FFFDD0] hover:text-white transition-colors"
                >
                  Certifications
                </Link>
              </div>
              {/* Mobile Navigation */}
              <MobileNav />
            </div>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
          {children}
        </main>
        <footer className="border-t border-neutral-200 mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            <p className="text-sm sm:text-base text-black text-center">&copy; {new Date().getFullYear()} Oğuz Güneren. All rights reserved.</p>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  )
}
