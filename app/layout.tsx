import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers/providers'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ weight: ['300', '400', '500', '600', '700', '800'], subsets: ['latin'], variable: '--font-poppins' })

export const metadata: Metadata = {
  title: 'Learna Academy - Transform Your Learning Journey',
  description: 'India\'s leading EdTech platform with AI-powered learning, live classes, and personalized guidance.',
  keywords: 'online learning, edtech, courses, certification, upskilling',
  authors: [{ name: 'Learna Academy' }],
  openGraph: {
    title: 'Learna Academy - Transform Your Learning Journey',
    description: 'Join 1M+ learners and transform your career with industry-recognized courses',
    images: ['https://learna.com/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300`}>
        <Providers>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}