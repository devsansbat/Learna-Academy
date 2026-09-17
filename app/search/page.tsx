'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { ArrowLeft, Search, Sparkles } from 'lucide-react'

const results = [
  { title: 'React JS Mastery', type: 'Course', href: '/courses/react', description: 'Build modern UI with React, hooks, performance, and production patterns.' },
  { title: 'Full Stack Node.js', type: 'Course', href: '/courses/node', description: 'Learn backend architecture, APIs, and deployment workflows.' },
  { title: 'Machine Learning A-Z', type: 'Course', href: '/courses/ml', description: 'Master algorithms, modeling, and deployment with a guided roadmap.' },
  { title: 'UI/UX Masterclass', type: 'Course', href: '/courses/ui-ux', description: 'Create intuitive interfaces from wireframes to polished design systems.' },
]

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || 'learning'

  const filtered = results.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.description.toLowerCase().includes(query.toLowerCase()) ||
    item.type.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center gap-3">
          <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
            <ArrowLeft className="h-4 w-4" />
            Back home
          </Link>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-8">
          <div className="mb-8 flex items-center gap-3 rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/60">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-100 text-primary-600 dark:bg-primary-500/10 dark:text-primary-400">
              <Search className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Search results</p>
              <h1 className="text-2xl font-black text-slate-900 dark:text-white">“{query}”</h1>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-12 text-center dark:border-slate-700 dark:bg-slate-800/60">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-500/10 dark:text-primary-400">
                <Sparkles className="h-7 w-7" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">No exact matches found</h2>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Try a broader keyword like “React”, “Python”, or “Design”.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filtered.map((item) => (
                <Link key={item.title} href={item.href} className="block rounded-3xl border border-slate-200 bg-slate-50 p-5 transition hover:border-primary-200 hover:bg-primary-50/40 dark:border-slate-700 dark:bg-slate-800/50 dark:hover:border-primary-500/30 dark:hover:bg-primary-500/5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400">{item.type}</p>
                      <h2 className="text-xl font-bold text-slate-900 dark:text-white">{item.title}</h2>
                    </div>
                    <span className="rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-600 shadow-sm dark:bg-slate-900 dark:text-slate-300">Open</span>
                  </div>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
