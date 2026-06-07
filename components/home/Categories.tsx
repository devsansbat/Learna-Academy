'use client'

import { Cpu, Palette, Briefcase, Megaphone, BarChart3, HeartPulse, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

export const Categories = () => {
  const categories = [
    { title: 'Programming', icon: Cpu, accent: 'from-sky-500 to-indigo-500' },
    { title: 'Design', icon: Palette, accent: 'from-fuchsia-500 to-pink-500' },
    { title: 'Business', icon: Briefcase, accent: 'from-amber-500 to-orange-500' },
    { title: 'Marketing', icon: Megaphone, accent: 'from-emerald-500 to-teal-500' },
    { title: 'Data Science', icon: BarChart3, accent: 'from-violet-500 to-fuchsia-500' },
    { title: 'Health', icon: HeartPulse, accent: 'from-rose-500 to-red-500' },
  ]

  return (
    <section className="py-16 bg-slate-50">
      <div className="container-custom">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-slate-900">Browse By Category</h2>
            <p className="mt-2 text-sm text-gray-600 md:text-base">
              Discover courses tailored to your goals. Choose a category to explore top-rated programs, expert instructors, and hands-on learning paths.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                key={category.title}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/40"
              >
                {/* Hover Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="relative mb-4 flex items-start justify-between">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-[14px] bg-gradient-to-br ${category.accent} shadow-md transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-100 bg-slate-50 text-slate-400 transition-all duration-300 group-hover:scale-110 group-hover:border-primary-200 group-hover:bg-primary-50 group-hover:text-primary-600">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
                
                <div className="relative">
                  <h3 className="mb-1.5 text-[15px] font-bold text-slate-800 transition-colors group-hover:text-primary-600">{category.title}</h3>
                  <p className="text-[11px] leading-relaxed text-slate-500 line-clamp-2">
                    Learn the most in-demand skills with practical lessons, expert mentors, and career-ready projects.
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
