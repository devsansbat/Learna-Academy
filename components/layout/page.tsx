'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, MessageCircle, X, Send } from 'lucide-react'

export default function StoryPage() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-16 flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl relative z-10">
        <span className="rounded-full bg-orange-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-orange-600 mb-6 inline-block">The Journey</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Our Story</h1>
        <p className="text-sm sm:text-base text-slate-500 mb-8 leading-relaxed">
          From a small idea to a global learning ecosystem, read the story behind Learna Academy and the team making it happen.
        </p>
        <Link href="/" className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-[13px] font-bold text-white transition-all hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/25">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
      </motion.div>

      {/* Floating Chat Button & Window */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
               initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: 'bottom right' }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="mb-5 w-[calc(100vw-3rem)] sm:w-[360px] max-w-[360px] rounded-[2rem] bg-white/95 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-slate-200/60 overflow-hidden"
            >
              <div className="p-4 sm:p-5 flex justify-between items-center border-b border-slate-100 bg-slate-50/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-indigo-600 flex items-center justify-center text-white shadow-md">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-[15px] leading-tight text-slate-900">Learna Team</h3>
                    <p className="text-[11px] text-slate-500 font-medium mt-0.5">We reply instantly</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsChatOpen(false)}
                  className="p-2 hover:bg-slate-200 text-slate-400 hover:text-slate-700 rounded-full transition-colors active:scale-95"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              
              <div className="h-[280px] p-5 flex flex-col gap-4 overflow-y-auto">
                <div className="bg-slate-100 p-4 rounded-[1.25rem] rounded-tl-sm shadow-sm text-[13.5px] leading-relaxed text-slate-800 font-medium max-w-[85%] text-left">
                  👋 Hi there! Curious about our story or have a question? Let us know!
                </div>
              </div>
              
              <div className="p-4 bg-transparent shrink-0 border-t border-slate-100">
                <div className="flex items-center bg-white border border-slate-200 rounded-full pl-4 pr-1.5 py-1.5 shadow-sm focus-within:ring-4 focus-within:ring-primary-500/10 focus-within:border-primary-500 transition-all">
                  <input 
                    type="text" 
                    placeholder="Message us..." 
                    className="flex-1 bg-transparent border-none p-0 text-[13px] font-medium focus:outline-none focus:ring-0 placeholder:text-slate-400"
                  />
                  <button className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-primary-600 transition-colors shrink-0 shadow-sm ml-2">
                    <Send className="w-3.5 h-3.5 ml-[-1px]" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="w-14 h-14 sm:w-16 sm:h-16 bg-slate-900 rounded-full flex items-center justify-center text-white shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)] transition-all relative z-50 border border-slate-700"
        >
          <AnimatePresence mode="wait">
            {isChatOpen ? (
              <motion.div key="close" initial={{ opacity: 0, rotate: -90, scale: 0.5 }} animate={{ opacity: 1, rotate: 0, scale: 1 }} exit={{ opacity: 0, rotate: 90, scale: 0.5 }} transition={{ duration: 0.2 }}>
                <X className="w-6 h-6 sm:w-7 sm:h-7" />
              </motion.div>
            ) : (
              <motion.div key="chat" initial={{ opacity: 0, rotate: 90, scale: 0.5 }} animate={{ opacity: 1, rotate: 0, scale: 1 }} exit={{ opacity: 0, rotate: -90, scale: 0.5 }} transition={{ duration: 0.2 }}>
                <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
                <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-rose-500 border-2 border-white rounded-full"></span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </main>
  )
}