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
              initial={{ opacity: 0, y: 20, scale: 0.9, transformOrigin: 'bottom right' }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="mb-4 w-[calc(100vw-3rem)] sm:w-[320px] max-w-[320px] rounded-2xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-primary-500 to-indigo-600 p-4 text-white flex justify-between items-center">
                <div className="text-left">
                  <h3 className="font-bold text-[15px] leading-tight">Learna Assistant</h3>
                  <p className="text-xs text-primary-100 font-medium mt-0.5">Typically replies instantly</p>
                </div>
                <button 
                  onClick={() => setIsChatOpen(false)}
                  className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              
              <div className="h-[280px] bg-slate-50/50 p-4 flex flex-col gap-3 overflow-y-auto">
                <div className="bg-white p-3.5 rounded-2xl rounded-tl-sm shadow-sm border border-slate-100 text-[13px] leading-relaxed text-slate-700 w-[85%] text-left">
                  👋 Hi there! How can I help you with your learning journey today?
                </div>
              </div>
              
              <div className="p-3 bg-white border-t border-slate-100 flex items-center gap-2">
                <input 
                  type="text" 
                  placeholder="Type your message..." 
                  className="flex-1 bg-slate-50 border border-slate-200 rounded-full px-4 py-2.5 text-[13px] focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                />
                <button className="w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center hover:bg-primary-600 transition-colors flex-shrink-0 shadow-sm hover:shadow-md hover:shadow-primary-500/20">
                  <Send className="w-4 h-4 ml-[-2px]" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="w-14 h-14 bg-gradient-to-tr from-primary-500 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 transition-shadow relative"
        >
          <AnimatePresence mode="wait">
            {isChatOpen ? (
              <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }} transition={{ duration: 0.15 }}>
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div key="chat" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }} transition={{ duration: 0.15 }}>
                <MessageCircle className="w-6 h-6" />
                <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-rose-500 border-2 border-white rounded-full"></span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </main>
  )
}