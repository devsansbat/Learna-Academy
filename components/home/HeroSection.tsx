﻿'use client'

import { Play, TrendingUp, Award, Users, ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export const HeroSection = () => {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Tech-inspired background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary-500 opacity-20 blur-[100px]"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left"
          >
            <motion.div variants={fadeUpVariant} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 dark:bg-primary-500/10 border border-primary-100 dark:border-primary-500/20 text-primary-600 dark:text-primary-400 text-xs font-bold uppercase tracking-wide mb-6 mx-auto lg:mx-0 w-fit shadow-sm">
              <Sparkles className="w-4 h-4" /> Revolutionizing Education
            </motion.div>

            <motion.h1 variants={fadeUpVariant} className="text-4xl sm:text-6xl lg:text-[4.2rem] font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-6">
              Transform Your <br className="hidden lg:block" />
              Future With{' '}
              <span className="relative inline-block mt-2 lg:mt-0">
                <span className="absolute -inset-2 bg-gradient-to-r from-primary-500 to-indigo-500 blur-2xl opacity-20 dark:opacity-40 rounded-full"></span>
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-indigo-600 dark:from-primary-400 dark:to-indigo-400">
                  AI-Powered
                </span>
              </span>{' '}
              Learning
            </motion.h1>

            <motion.p variants={fadeUpVariant} className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Join India&apos;s fastest-growing EdTech platform. Learn from top educators, get personalized guidance, and achieve your dreams with our AI-powered learning ecosystem.
            </motion.p>

            <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <Link href="/courses" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary-500 px-8 py-4 text-[15px] font-bold text-white transition-all hover:bg-primary-600 shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 hover:-translate-y-0.5 group">
                Start Learning Now
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 px-8 py-3.5 text-[15px] font-bold text-slate-700 dark:text-slate-300 transition-all hover:border-primary-500 dark:hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 hover:-translate-y-0.5 shadow-sm">
                <Play className="w-4 h-4" />
                Watch Demo
              </button>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-8 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center">
                  <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <span className="text-[13px] font-bold text-slate-700 dark:text-slate-300">Certified Courses</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center">
                  <Users className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                </div>
                <span className="text-[13px] font-bold text-slate-700 dark:text-slate-300">Expert Educators</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Advanced Bento Grid Visuals */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative w-full max-w-lg mx-auto lg:max-w-none mt-4 lg:mt-0"
          >
            {/* Decorative Glow Behind Grid */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-primary-500/20 to-indigo-500/20 blur-[60px] -z-10 rounded-full"></div>

            <div className="grid grid-cols-2 gap-4">
              {/* Bento Box 1: Active Learners */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="col-span-1 bg-white dark:bg-slate-900 rounded-3xl sm:rounded-[2rem] p-4 sm:p-6 shadow-xl border border-slate-100 dark:border-slate-800 flex flex-col justify-between aspect-square transition-all"
              >
                <div className="flex -space-x-3 mb-4">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 object-cover shadow-sm" alt="Student" />
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 object-cover shadow-sm" alt="Student" />
                  <div className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 flex items-center justify-center text-xs font-black shrink-0 z-10 shadow-sm">
                    +
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">1M+</h3>
                  <p className="text-[9px] sm:text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">Active Learners</p>
                </div>
              </motion.div>

              {/* Bento Box 2: Success Rate */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="col-span-1 bg-gradient-to-br from-primary-500 to-indigo-600 rounded-3xl sm:rounded-[2rem] p-4 sm:p-6 shadow-xl border border-indigo-400/30 flex flex-col justify-between aspect-square text-white transition-all relative overflow-hidden"
              >
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm shadow-sm">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">98%</h3>
                  <p className="text-[9px] sm:text-[10px] font-bold text-indigo-100 uppercase tracking-wider mt-1">Success Rate</p>
                </div>
              </motion.div>

              {/* Bento Box 3: Video Demo */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="col-span-2 bg-white dark:bg-slate-900 rounded-[2rem] p-2 shadow-xl border border-slate-100 dark:border-slate-800 relative group overflow-hidden transition-all"
              >
                <div className="relative w-full h-44 sm:h-52 rounded-[1.5rem] overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Interactive Learning" />
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/30 transition-colors"></div>
                  
                  {/* Play Button Overlay */}
                  <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform shadow-xl">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <Play className="w-5 h-5 text-primary-600 fill-primary-600 ml-1" />
                    </div>
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
