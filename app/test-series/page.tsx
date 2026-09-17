import { ArrowRight, CheckCircle2, Clock3, Trophy } from 'lucide-react'

const tests = [
  { title: 'Full Syllabus Mock Test', mode: 'Online', duration: '90 mins', score: 'AI analysis' },
  { title: 'Weekly JEE Revision Test', mode: 'Timed', duration: '60 mins', score: 'Rank estimate' },
  { title: 'NEET Biology Sprint', mode: 'Practice', duration: '45 mins', score: 'Targeted insights' },
]

export default function TestSeriesPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-primary-600 dark:text-primary-400">Test series</p>
          <h1 className="text-4xl font-black text-slate-900 dark:text-white">Track your performance with every test.</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-300">Practice under exam-like conditions, review analytics, and improve your rank with measurable progress.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tests.map((test) => (
            <div key={test.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-100 text-primary-600 dark:bg-primary-500/10 dark:text-primary-400">
                <Trophy className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">{test.title}</h2>
              <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> {test.mode}</div>
                <div className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-sky-500" /> {test.duration}</div>
                <div className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-violet-500" /> {test.score}</div>
              </div>
              <button className="mt-6 w-full rounded-full bg-slate-900 px-4 py-3 text-sm font-bold text-white transition hover:bg-primary-600 dark:bg-white dark:text-slate-900 dark:hover:bg-primary-500 dark:hover:text-white">
                Start test
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
