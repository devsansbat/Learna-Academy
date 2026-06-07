'use client'

import { Star, Users, BookOpen, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export const TopEducators = () => {
  const educators = [
    {
      name: 'Priya Singh',
      role: 'Data Science Expert',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=400&fit=crop',
      rating: 4.9,
      students: '120k+',
      courses: 8,
      experience: '8+ Yrs Exp.',
      qualifications: ['Ph.D in AI', 'IIT Delhi'],
    },
    {
      name: 'Rahul Kumar',
      role: 'Web Dev Instructor',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=400&fit=crop',
      rating: 4.8,
      students: '85k+',
      courses: 12,
      experience: '5+ Yrs Exp.',
      qualifications: ['B.Tech', 'Ex-Google'],
    },
    {
      name: 'Aanya Patel',
      role: 'UI/UX Design Lead',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=400&fit=crop',
      rating: 4.9,
      students: '95k+',
      courses: 5,
      experience: '10+ Yrs Exp.',
      qualifications: ['M.Des', 'NID Alumni'],
    },
    {
      name: 'Sameer Joshi',
      role: 'Digital Marketer',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&h=400&fit=crop',
      rating: 4.7,
      students: '60k+',
      courses: 10,
      experience: '6+ Yrs Exp.',
      qualifications: ['MBA', 'IIM-A'],
    },
  ]

  return (
    <section className="py-16 bg-slate-50/70">
      <div className="container-custom">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-slate-900">Learn from the Best</h2>
            <p className="mt-2 text-sm text-gray-600 md:text-base">
              Our top-rated educators bring real-world experience and industry expertise to help you achieve your goals.
            </p>
          </div>
          <Link href="/educators" className="group inline-flex shrink-0 items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700 shadow-sm transition-all hover:border-primary-200 hover:bg-primary-50 hover:text-primary-700">
            View all educators <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex w-full gap-5 overflow-x-auto pb-8 pt-2 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {educators.map((edu, index) => (
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              key={edu.name}
              className="group flex w-[85vw] sm:w-[280px] shrink-0 snap-center flex-col items-center rounded-[20px] border border-slate-200/50 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-indigo-500/10"
            >
              <div className="relative mb-4 h-24 w-24 shrink-0">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-500 to-indigo-500 blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-30"></div>
                <img src={edu.image} alt={edu.name} className="relative h-full w-full rounded-full border-4 border-white object-cover shadow-[0_4px_15px_rgb(0,0,0,0.05)] transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute -bottom-1 -right-1 flex h-6 items-center gap-1 rounded-full border-2 border-white bg-amber-100 px-1.5 shadow-sm">
                  <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                  <span className="text-[11px] font-bold text-amber-700">{edu.rating}</span>
                </div>
              </div>
              
              <h3 className="text-[17px] font-bold text-slate-800 transition-colors group-hover:text-primary-600">{edu.name}</h3>
              <p className="mt-0.5 text-[13px] font-medium text-slate-500">{edu.role}</p>

              {/* Labels Section */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5">
                <span className="rounded bg-emerald-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                  {edu.experience}
                </span>
                {edu.qualifications.map((qual) => (
                  <span key={qual} className="rounded border border-slate-100 bg-slate-50 px-2 py-1 text-[10px] font-bold text-slate-500">
                    {qual}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="mt-5 flex w-full items-center justify-between border-t border-slate-100 px-3 pt-4 text-left">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-50 transition-colors group-hover:bg-indigo-100">
                      <Users className="h-3.5 w-3.5 text-indigo-500" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Students</span>
                      <span className="text-[12px] font-black text-slate-700">{edu.students}</span>
                    </div>
                  </div>
                  
                  <div className="h-8 w-px bg-slate-100"></div>
                  
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-50 transition-colors group-hover:bg-sky-100">
                      <BookOpen className="h-3.5 w-3.5 text-sky-500" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Courses</span>
                      <span className="text-[12px] font-black text-slate-700">{edu.courses}</span>
                    </div>
                  </div>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
