import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Oguz Guneren - Data Scientist & AI Engineer',
  description: 'Personal website of Oguz Guneren, showcasing projects and experience in Data Science and AI Engineering',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="sticky top-0 z-50 bg-[#013220] backdrop-blur-sm border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="text-lg font-semibold text-[#FFFDD0]">
                  Oğuz Güneren
                </Link>
              </div>
              <div className="flex items-center space-x-8">
                <Link
                  href="/"
                  className="text-[#FFFDD0] hover:text-white transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/experience"
                  className="text-[#FFFDD0] hover:text-white transition-colors"
                >
                  Experience
                </Link>
                <Link
                  href="/projects"
                  className="text-[#FFFDD0] hover:text-white transition-colors"
                >
                  Projects
                </Link>
                <Link
                  href="/certifications"
                  className="text-[#FFFDD0] hover:text-white transition-colors"
                >
                  Certifications
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {children}
        </main>
        <footer className="border-t border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <p className="text-black">&copy; {new Date().getFullYear()} Oğuz Güneren. All rights reserved.</p>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  )
}
