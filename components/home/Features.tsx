'use client'

import { Sparkles, Video, MessageCircle, Award } from 'lucide-react'
import { motion } from 'framer-motion'

export const Features = () => {
  const features = [
    {
      title: 'AI-Powered Learning',
      description: 'Personalized study plans adapting to your pace and performance automatically.',
      icon: Sparkles,
      color: 'text-indigo-600',
      bg: 'bg-indigo-50',
      border: 'hover:border-indigo-200 hover:shadow-indigo-500/10'
    },
    {
      title: 'Live Weekly Classes',
      description: 'Interact with expert educators in real-time and clear your doubts instantly.',
      icon: Video,
      color: 'text-rose-600',
      bg: 'bg-rose-50',
      border: 'hover:border-rose-200 hover:shadow-rose-500/10'
    },
    {
      title: '1-on-1 Mentorship',
      description: 'Get dedicated support from industry professionals whenever you are stuck.',
      icon: MessageCircle,
      color: 'text-sky-600',
      bg: 'bg-sky-50',
      border: 'hover:border-sky-200 hover:shadow-sky-500/10'
    },
    {
      title: 'Verified Certifications',
      description: 'Earn career-ready certificates that top companies recognize and value.',
      icon: Award,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      border: 'hover:border-emerald-200 hover:shadow-emerald-500/10'
    },
  ]

  return (
    <section className="py-20 bg-slate-50/50">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-widest text-primary-600 uppercase"
          >
            Why Choose Us
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-3 text-3xl md:text-4xl font-extrabold text-slate-900"
          >
            The Learna Academy Advantage
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-slate-500 text-sm md:text-base"
          >
            We blend technology, expert guidance, and community to provide an unparalleled learning experience.
          </motion.p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`group rounded-[24px] border border-slate-200/60 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${feature.border}`}
            >
              <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${feature.bg} transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}>
                <Icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              <h3 className="mb-2 text-[17px] font-bold text-slate-900">{feature.title}</h3>
              <p className="text-[13px] leading-relaxed text-slate-500">{feature.description}</p>
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  )
}
