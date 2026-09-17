import Link from 'next/link'
import { ArrowRight, BrainCircuit, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react'

const topics = [
  'React state management',
  'JEE / NEET preparation strategy',
  'Career roadmap after graduation',
  'Assignment and project help',
]

export default function DoubtSolvingPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-primary-600 dark:text-primary-400">Doubt solving</p>
          <h1 className="text-4xl font-black text-slate-900 dark:text-white">Get your questions answered fast.</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-300">Connect with mentors, ask academically relevant questions, and keep your learning momentum strong.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-100 text-primary-600 dark:bg-primary-500/10 dark:text-primary-400">
              <MessageSquare className="h-6 w-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Live mentor support</h2>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">Talk to experts on concept clarity, projects, and exam prep in real time.</p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
              <BrainCircuit className="h-6 w-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Personalized guidance</h2>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">Get step-by-step explanations and tailored study strategies mapped to your goals.</p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Verified solutions</h2>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">Get reliable answers from qualified mentors with structured explanations.</p>
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">Ask a mentor</p>
              <h2 className="mt-2 text-2xl font-black text-slate-900 dark:text-white">What would you like help with today?</h2>
            </div>
            <Link href="/login" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-500 px-5 py-3 text-sm font-bold text-white shadow-md shadow-primary-500/20 transition hover:bg-primary-600">
              Start solving <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {topics.map((topic) => (
              <button key={topic} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-primary-200 hover:text-primary-600 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-200 dark:hover:border-primary-500/30 dark:hover:text-primary-400">
                {topic}
              </button>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-dashed border-primary-200 bg-primary-50/60 p-5 dark:border-primary-500/30 dark:bg-primary-500/10">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary-600 shadow-sm dark:bg-slate-900 dark:text-primary-400">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">Fast support promise</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Most doubts are answered within 30 minutes by a subject expert or our learning support team.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
