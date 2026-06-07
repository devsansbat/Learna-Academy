'use client'

import { Star, Quote } from 'lucide-react'
import { motion } from 'framer-motion'

export const Testimonials = () => {
  const feedback = [
    { 
      name: 'Aisha Sharma', 
      role: 'Product Designer @ Meta',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      quote: "Learna Academy helped me land my dream job. The UI/UX design masterclass was incredibly detailed, practical, and exactly what I needed to build a strong portfolio." 
    },
    { 
      name: 'Rohit Verma', 
      role: 'Frontend Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      quote: "The live classes and support team are excellent. I went from having zero coding knowledge to building full-stack web applications in just 6 months!" 
    },
    { 
      name: 'Mira Patel', 
      role: 'Data Analyst',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      quote: "I learned data skills fast and the platform is very easy to use. The AI-powered learning paths kept me on track every day. Highly recommended!" 
    },
  ]

  return (
    <section className="relative overflow-hidden py-20 bg-white">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-50/50 rounded-full blur-3xl -z-10 pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Student Success Stories</h2>
          <p className="text-slate-500 text-base">
            Don&apos;t just take our word for it. Hear from thousands of learners who have transformed their careers with Learna Academy.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {feedback.map((item, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              key={item.name} 
              className="group relative flex flex-col justify-between rounded-[24px] border border-slate-100 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)]"
            >
              <Quote className="absolute top-6 right-6 h-16 w-16 text-slate-50 opacity-50 transition-opacity duration-300 group-hover:opacity-100 -z-10" />
              
              <div>
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-[15px] leading-relaxed text-slate-700 font-medium mb-8">&quot;{item.quote}&quot;</p>
              </div>
              
              <div className="flex items-center gap-4 mt-auto">
                <img src={item.image} alt={item.name} className="h-12 w-12 rounded-full object-cover shadow-sm ring-2 ring-white" />
                <div>
                  <h4 className="text-[15px] font-bold text-slate-900">{item.name}</h4>
                  <p className="text-xs font-medium text-slate-500">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
