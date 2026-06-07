'use client'

import { Mail, Send } from 'lucide-react'
import { motion } from 'framer-motion'

export const Newsletter = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 px-6 py-16 shadow-2xl sm:px-12 sm:py-20"
        >
          {/* Abstract Background Glowing Shapes */}
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary-500/20 blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none"></div>
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-3xl pointer-events-none"></div>

          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <div className="mb-5 flex items-center justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 shadow-sm backdrop-blur-sm border border-white/10">
                <Mail className="h-6 w-6 text-primary-400" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Stay ahead of the curve.
            </h2>
            <p className="text-sm md:text-base text-slate-300 mb-10 max-w-xl mx-auto">
              Join 50,000+ learners who receive our weekly newsletter. Get exclusive course discounts, study tips, and early access to new programs.
            </p>

            {/* Newsletter Form */}
            <form className="mx-auto flex w-full max-w-md flex-col gap-3 sm:flex-row sm:items-center sm:rounded-full sm:bg-white/10 sm:p-1.5 sm:backdrop-blur-md sm:border sm:border-white/10" onSubmit={(e) => e.preventDefault()}>
              <div className="relative flex-1">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 sm:hidden">
                  <Mail className="h-4 w-4 text-slate-400" />
                </div>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  className="w-full rounded-full border border-white/10 bg-white/10 py-3.5 pl-10 pr-4 text-sm text-white placeholder-slate-400 outline-none transition-all focus:border-primary-500 focus:bg-white/20 sm:border-none sm:bg-transparent sm:py-2.5 sm:pl-5 sm:focus:bg-transparent"
                />
              </div>
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-primary-500 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-primary-400 sm:w-auto sm:py-2.5"
              >
                Subscribe
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>

            <p className="mt-5 text-[11px] text-slate-400">
              By subscribing, you agree to our Privacy Policy and consent to receive updates.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
