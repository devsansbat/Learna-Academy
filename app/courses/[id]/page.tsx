import Link from 'next/link'
import { ArrowLeft, BookOpen, CalendarDays, GraduationCap, ShieldCheck, Star } from 'lucide-react'

const courseCatalog: Record<string, {
  title: string
  category: string
  level: string
  duration: string
  mentor: string
  rating: number
  price: number
  originalPrice?: number
  description: string
  outcomes: string[]
}> = {
  react: {
    title: 'React JS Mastery',
    category: 'Web Development',
    level: 'Intermediate',
    duration: '8 weeks',
    mentor: 'Rahul Kumar',
    rating: 4.9,
    price: 4499,
    originalPrice: 5999,
    description: 'Master React hooks, state modeling, routing, and scalable UI architecture with project-based learning.',
    outcomes: ['Build reusable components', 'Handle complex state flow', 'Ship production-ready frontends']
  },
  node: {
    title: 'Full Stack Node.js',
    category: 'Backend Development',
    level: 'Advanced',
    duration: '10 weeks',
    mentor: 'Priya Singh',
    rating: 4.8,
    price: 5999,
    originalPrice: 7999,
    description: 'Create REST APIs, authentication flows, and full-stack apps using Node.js and modern tooling.',
    outcomes: ['Design robust APIs', 'Work with databases and auth', 'Deploy complete products']
  },
  python: {
    title: 'Python for Data',
    category: 'Data Science',
    level: 'Beginner',
    duration: '6 weeks',
    mentor: 'Kavya Sharma',
    rating: 4.9,
    price: 3999,
    description: 'Learn Python fundamentals and data analysis tools for real-world business problem solving.',
    outcomes: ['Analyze datasets', 'Use pandas and NumPy', 'Create data-driven insights']
  },
  ml: {
    title: 'Machine Learning A-Z',
    category: 'AI & ML',
    level: 'Intermediate',
    duration: '12 weeks',
    mentor: 'Neha Gupta',
    rating: 4.9,
    price: 6999,
    originalPrice: 8999,
    description: 'Understand supervised and unsupervised ML, model evaluation, and deployment pathways.',
    outcomes: ['Train ML models', 'Evaluate performance', 'Build end-to-end pipelines']
  },
  'ui-ux': {
    title: 'UI/UX Masterclass',
    category: 'Design',
    level: 'Beginner',
    duration: '5 weeks',
    mentor: 'Aanya Patel',
    rating: 4.8,
    price: 3499,
    description: 'Learn design systems, user flows, prototyping, and research-driven interface thinking.',
    outcomes: ['Design user journeys', 'Build clickable prototypes', 'Ship polished experiences']
  },
  frontend: {
    title: 'Frontend Bootcamp',
    category: 'Web Development',
    level: 'Beginner',
    duration: '6 weeks',
    mentor: 'Rahul Kumar',
    rating: 4.7,
    price: 2799,
    description: 'From responsive layouts to functional interactivity, create engaging front-end experiences.',
    outcomes: ['Build responsive pages', 'Master HTML/CSS/JS', 'Understand modern workflows']
  },
}

export function generateStaticParams() {
  return [
    { id: 'react' },
    { id: 'node' },
    { id: 'python' },
    { id: 'ml' },
    { id: 'ui-ux' },
    { id: 'frontend' },
  ]
}

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const slug = params.id.toLowerCase()
  const course = courseCatalog[slug] ?? {
    title: 'Course not found',
    category: 'Unavailable',
    level: 'N/A',
    duration: 'N/A',
    mentor: 'TBD',
    rating: 0,
    price: 0,
    description: 'This course is not currently available in the catalog.',
    outcomes: ['Explore other programs', 'Contact support for guidance']
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <Link href="/courses" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
            <ArrowLeft className="h-4 w-4" />
            Back to courses
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-8">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-primary-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-primary-700 dark:bg-primary-500/10 dark:text-primary-300">{course.category}</span>
              <span className="rounded-full border border-slate-200 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 dark:border-slate-700 dark:text-slate-300">{course.level}</span>
            </div>

            <h1 className="text-4xl font-black text-slate-900 dark:text-white">{course.title}</h1>
            <p className="mt-4 text-base text-slate-600 dark:text-slate-300">{course.description}</p>

            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-2"><GraduationCap className="h-4 w-4 text-primary-500" /> {course.mentor}</div>
              <div className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-primary-500" /> {course.duration}</div>
              <div className="flex items-center gap-2"><Star className="h-4 w-4 fill-amber-400 text-amber-400" /> {course.rating} rating</div>
            </div>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800/60">
              <h2 className="mb-4 text-lg font-bold text-slate-900 dark:text-white">What you'll learn</h2>
              <div className="grid gap-3 md:grid-cols-2">
                {course.outcomes.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-white p-3 text-sm font-medium text-slate-700 shadow-sm dark:bg-slate-900 dark:text-slate-200">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <aside className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="rounded-3xl bg-slate-50 p-5 dark:bg-slate-800/60">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Course price</p>
              <div className="mt-3 flex items-end gap-3">
                <span className="text-4xl font-black text-slate-900 dark:text-white">₹{course.price.toLocaleString('en-IN')}</span>
                {course.originalPrice ? <span className="mb-1 text-sm text-slate-400 line-through">₹{course.originalPrice.toLocaleString('en-IN')}</span> : null}
              </div>
            </div>

            <div className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-primary-500" /> Includes live sessions & recordings</div>
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary-500" /> Certificate on completion</div>
            </div>

            <button className="mt-6 w-full rounded-full bg-gradient-to-r from-primary-500 to-indigo-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary-500/20 transition hover:shadow-primary-500/30">
              Enroll now
            </button>
            <Link href="/checkout" className="mt-3 block w-full rounded-full border border-slate-200 bg-white px-5 py-3.5 text-center text-sm font-bold text-slate-700 transition hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
              Go to checkout
            </Link>
          </aside>
        </div>
      </div>
    </main>
  )
}
