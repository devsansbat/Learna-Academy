'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    { question: 'How do I enroll in a course?', answer: 'Choose your course, add it to your cart, and complete checkout. Your dashboard will update immediately.' },
    { question: 'Can I access live classes later?', answer: 'Yes — recorded sessions are available for all live classes on your account page.' },
    { question: 'Do I get a certificate?', answer: 'Yes, you receive a personalized completion certificate for every course you finish.' },
    { question: 'Is there any mentor support available?', answer: 'Absolutely! Our premium and live courses come with 1-on-1 mentor support to resolve your doubts instantly.' },
    { question: 'What is your refund policy?', answer: 'We offer a 7-day no-questions-asked money-back guarantee for all our courses if you are not satisfied with the content.' },
  ]

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="container-custom max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
          <p className="mt-4 text-slate-500 text-sm md:text-base">
            Everything you need to know about Learna Academy and how it works.
          </p>
        </div>
        
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              key={faq.question} 
              className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${isOpen ? 'border-primary-200 bg-primary-50/30 shadow-sm' : 'border-slate-200/60 bg-white hover:border-slate-300 hover:bg-slate-50/50'}`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left outline-none"
              >
                <h3 className={`text-[15px] font-bold transition-colors ${isOpen ? 'text-primary-700' : 'text-slate-800'}`}>
                  {faq.question}
                </h3>
                <div className={`ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${isOpen ? 'bg-primary-100 text-primary-600' : 'bg-slate-100 text-slate-400'}`}>
                  {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </div>
              </button>
              
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    key="answer-content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-5 pt-1 text-[14px] leading-relaxed text-slate-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
