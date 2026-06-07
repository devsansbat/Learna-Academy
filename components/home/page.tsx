'use client'

import { Star, Users, BookOpen } from 'lucide-react'
import { motion } from 'framer-motion'

const allEducators = [
  {
    name: 'Priya Singh',
    role: 'Data Science Expert',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop',
    rating: 4.9,
    students: '120k+',
    courses: 8,
    experience: '8+ Yrs Exp.',
    qualifications: ['Ph.D in AI', 'IIT Delhi'],
  },
  {
    name: 'Rahul Kumar',
    role: 'Web Dev Instructor',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop',
    rating: 4.8,
    students: '85k+',
    courses: 12,
    experience: '5+ Yrs Exp.',
    qualifications: ['B.Tech', 'Ex-Google'],
  },
  {
    name: 'Aanya Patel',
    role: 'UI/UX Design Lead',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop',
    rating: 4.9,
    students: '95k+',
    courses: 5,
    experience: '10+ Yrs Exp.',
    qualifications: ['M.Des', 'NID Alumni'],
  },
  {
    name: 'Sameer Joshi',
    role: 'Digital Marketer',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop',
    rating: 4.7,
    students: '60k+',
    courses: 10,
    experience: '6+ Yrs Exp.',
    qualifications: ['MBA', 'IIM-A'],
  },
  {
    name: 'Kavya Sharma',
    role: 'Cloud Architect',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    rating: 4.8,
    students: '50k+',
    courses: 6,
    experience: '7+ Yrs Exp.',
    qualifications: ['M.Tech', 'AWS Certified'],
  },
  {
    name: 'Arjun Das',
    role: 'Mobile App Developer',
    image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=200&h=200&fit=crop',
    rating: 4.6,
    students: '40k+',
    courses: 9,
    experience: '4+ Yrs Exp.',
    qualifications: ['B.E', 'Ex-Microsoft'],
  },
  {
    name: 'Neha Gupta',
    role: 'Machine Learning',
    image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=200&h=200&fit=crop',
    rating: 4.9,
    students: '110k+',
    courses: 7,
    experience: '9+ Yrs Exp.',
    qualifications: ['Ph.D', 'Stanford'],
  },
  {
    name: 'Vikram Singh',
    role: 'Cyber Security Expert',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
    rating: 4.7,
    students: '75k+',
    courses: 11,
    experience: '12+ Yrs Exp.',
    qualifications: ['M.Sc Security', 'CEH'],
  }
]

export default function EducatorsPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-16">
      {/* Header Section */}
      <section className="container-custom mb-12 text-center md:mb-16 md:text-left">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-extrabold text-slate-900 md:text-5xl"
        >
          Meet Our Expert Educators
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-4 max-w-2xl text-base font-medium text-slate-500 md:mx-0 md:text-lg"
        >
          Learn from industry leaders, experienced professionals, and top academics from around the globe who are dedicated to your success.
        </motion.p>
      </section>

      {/* Grid Section */}
      <section className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allEducators.map((edu, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              key={edu.name}
              className="group flex flex-col items-center rounded-2xl border border-slate-200/60 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/40"
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

              <div className="mt-5 flex w-full items-center justify-between border-t border-slate-100 px-3 pt-4">
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-400">
                    <Users className="h-3.5 w-3.5" /> Students
                  </div>
                  <p className="mt-0.5 text-[13px] font-bold text-slate-700">{edu.students}</p>
                </div>
                <div className="h-6 w-px bg-slate-100"></div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-400">
                    <BookOpen className="h-3.5 w-3.5" /> Courses
                  </div>
                  <p className="mt-0.5 text-[13px] font-bold text-slate-700">{edu.courses}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}