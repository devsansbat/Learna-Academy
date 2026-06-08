import { ArrowLeft, CheckCircle, Clock, PlayCircle, Star, Users } from 'lucide-react'
import Link from 'next/link'

export default function CourseDetailsPage({ params }: { params: { slug: string } }) {
  // Note: Yahan aap slug (params.slug) ke through database se data fetch kar sakte hain.
  // Example: if (params.slug === 'react-mastery') { show react data }
  
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-28 pb-20">
      <div className="container-custom mx-auto px-4">
        
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-primary-600 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Column: Course Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-500/10 text-primary-700 dark:text-primary-400 font-bold text-xs rounded-full uppercase tracking-wider mb-4">Web Development</div>
              <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight capitalize">
                {params.slug.replace(/-/g, ' ')}
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
                Learn how to build modern, interactive, and scalable web applications using the latest technologies. Perfect for beginners and intermediate developers looking to upgrade their skills.
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  <span className="text-slate-900 dark:text-white font-bold">4.8</span> (2.4k reviews)
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  12,500+ Students
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  12 Weeks Duration
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 border border-slate-200/60 dark:border-slate-800 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">What you'll learn</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Build modern applications from scratch',
                  'Understand advanced core concepts',
                  'State management & architecture',
                  'Routing and API integrations',
                  'Styling with modern CSS frameworks',
                  'Deployment and hosting best practices'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Video & Pricing Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white dark:bg-slate-900 rounded-[2rem] p-6 border border-slate-200/60 dark:border-slate-800 shadow-xl">
              <div className="relative w-full h-48 bg-slate-900 rounded-xl overflow-hidden mb-6 group cursor-pointer">
                <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=400&auto=format&fit=crop" alt="Course Preview" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                    <PlayCircle className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="text-4xl font-black text-slate-900 dark:text-white mb-2">$49.00</div>
              <p className="text-sm text-slate-500 mb-6">Full lifetime access to all course materials</p>

              <button className="w-full bg-primary-500 hover:bg-primary-600 text-white rounded-xl py-4 font-bold text-[15px] transition-all shadow-lg shadow-primary-500/30 mb-4 active:scale-95">
                Enroll Now
              </button>
              <button className="w-full bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 dark:border-slate-700 text-slate-900 dark:text-white border border-slate-200 rounded-xl py-4 font-bold text-[15px] transition-all active:scale-95">
                Try for Free
              </button>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}