'use client'

import { Apple, Play } from 'lucide-react'
import { motion } from 'framer-motion'

export const AppDownload = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 px-8 py-14 shadow-2xl sm:px-12 md:py-20 lg:flex lg:items-center lg:justify-between lg:px-20"
        >
          {/* Background Glow Effects */}
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary-500/20 blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-xl text-center lg:text-left">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:leading-[1.1]">
              Learn anytime, anywhere.
            </h2>
            <p className="mt-4 text-base text-slate-300 md:text-lg">
              Take your courses on the go. Download lessons for offline use, practice quizzes, and stay connected with live class alerts on the Learna App.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <button className="group flex items-center justify-center gap-3 rounded-2xl bg-white px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-slate-50 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                <Apple className="h-7 w-7 fill-slate-900 text-slate-900" />
                <div className="text-left">
                  <div className="text-[9px] font-bold uppercase tracking-wider text-slate-500">Download on the</div>
                  <div className="text-[15px] font-bold leading-tight text-slate-900">App Store</div>
                </div>
              </button>
              <button className="group flex items-center justify-center gap-3 rounded-2xl border border-slate-700 bg-slate-800/50 px-6 py-3 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-slate-600 hover:bg-slate-800 hover:shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                <Play className="h-6 w-6 fill-white text-white" />
                <div className="text-left">
                  <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400">GET IT ON</div>
                  <div className="text-[15px] font-bold leading-tight text-white">Google Play</div>
                </div>
              </button>
            </div>
          </div>

          {/* Pure CSS Phone Mockup */}
          <div className="relative z-10 hidden lg:block lg:shrink-0">
            <div className="relative mx-auto flex h-[420px] w-[220px] -rotate-6 flex-col overflow-hidden rounded-[2.5rem] border-[6px] border-slate-800 bg-slate-950 shadow-2xl transition-transform duration-700 hover:rotate-0 hover:scale-105">
              {/* Notch */}
              <div className="absolute left-1/2 top-0 z-20 h-5 w-24 -translate-x-1/2 rounded-b-xl bg-slate-800"></div>
              
              {/* Screen Content UI */}
              <div className="relative mt-8 flex flex-1 flex-col gap-4 p-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-gradient-to-tr from-primary-500 to-indigo-500 shadow-lg"></div>
                  <div className="flex flex-col gap-1.5">
                    <div className="h-2.5 w-20 rounded-full bg-slate-800"></div>
                    <div className="h-2 w-12 rounded-full bg-slate-800/60"></div>
                  </div>
                </div>
                
                <div className="relative h-32 w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
                   <div className="absolute inset-0 flex items-center justify-center">
                     <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500/20">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-500">
                           <div className="ml-0.5 h-0 w-0 border-b-[4px] border-l-[6px] border-t-[4px] border-b-transparent border-l-white border-t-transparent"></div>
                        </div>
                     </div>
                   </div>
                </div>
                
                <div className="h-14 w-full rounded-xl border border-slate-800 bg-slate-900"></div>
                <div className="h-14 w-full rounded-xl border border-slate-800 bg-slate-900"></div>
              </div>
              
              {/* Bottom Bar */}
              <div className="mb-2 h-1 w-20 self-center rounded-full bg-slate-700"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
