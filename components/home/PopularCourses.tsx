﻿﻿﻿'use client'

import { useEffect, useState, useRef } from 'react'
import { ShoppingCart, Check, Heart, ArrowRight, BookOpen, Sparkles, Calendar, Target, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const courses = [
  {
    id: 1,
    title: "Arjuna NEET 2.0 2027",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop",
    target: "11th NEET Aspirants",
    startDate: "1 Jun, 2026",
    endDate: "30 Jun, 2028",
    language: "Hinglish",
    price: 4999,
    originalPrice: 5500,
    badge: "Premium",
    category: "Online",
    link: "#"
  },
  {
    id: 2,
    title: "Arjuna NEET 2027 + Lakshya NEET 2028",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=400&fit=crop",
    target: "NEET Aspirants",
    startDate: "13 Apr, 2026",
    endDate: "30 Jun, 2028",
    language: "Hinglish",
    price: 8800,
    originalPrice: 12400,
    badge: "Premium",
    category: "Online",
    link: "#"
  },
  {
    id: 3,
    title: "Vidyapeeth 11 NEET (Target 2028)",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop",
    target: "NEET Target 2028",
    startDate: "1 Apr, 2026",
    endDate: "30 Mar, 2028",
    language: "Hinglish",
    price: 5000,
    originalPrice: null,
    badge: "NEW",
    category: "Offline",
    link: "#"
  },
  {
    id: 4,
    title: "Lakshya JEE 2.0 2025",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=400&fit=crop",
    target: "12th JEE Aspirants",
    startDate: "10 May, 2024",
    endDate: "30 Mar, 2025",
    language: "Hinglish",
    price: 4200,
    originalPrice: 5000,
    badge: "Premium",
    category: "Online",
    link: "#"
  },
  {
    id: 5,
    title: "Vidyapeeth 12 JEE (Target 2025)",
    image: "https://images.unsplash.com/photo-1588591795084-1770cb3be374?w=800&h=400&fit=crop",
    target: "JEE Target 2025",
    startDate: "15 Apr, 2024",
    endDate: "10 Mar, 2025",
    language: "Hinglish",
    price: 8000,
    originalPrice: null,
    badge: "NEW",
    category: "Offline",
    link: "#"
  },
  {
    id: 6,
    title: "Udaan Class 10th 2025",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=400&fit=crop",
    target: "Class 10 Students",
    startDate: "5 Apr, 2024",
    endDate: "20 Mar, 2025",
    language: "Hinglish",
    price: 2500,
    originalPrice: 3000,
    badge: "Best Seller",
    category: "Online",
    link: "#"
  }
]

export const PopularCourses = () => {
  const [cart, setCart] = useState<number[]>([])
  const [wishlist, setWishlist] = useState<number[]>([])
  const [isCartReady, setIsCartReady] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [hasDragged, setHasDragged] = useState(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const stored = window.localStorage.getItem('learna-cart')
    if (stored) {
      try {
        setCart(JSON.parse(stored))
      } catch {
        setCart([])
      }
    }

    const storedWishlist = window.localStorage.getItem('learna-wishlist')
    if (storedWishlist) {
      try {
        setWishlist(JSON.parse(storedWishlist))
      } catch {
        setWishlist([])
      }
    }

    setIsCartReady(true)
  }, [])

  useEffect(() => {
    if (!isCartReady || typeof window === 'undefined') return

    window.localStorage.setItem('learna-cart', JSON.stringify(cart))
    window.dispatchEvent(new Event('learna-cart-update'))

    window.localStorage.setItem('learna-wishlist', JSON.stringify(wishlist))
    window.dispatchEvent(new Event('learna-wishlist-update'))
  }, [cart, wishlist, isCartReady])

  const toggleCart = (courseId: number) => {
    setCart((current) =>
      current.includes(courseId) ? current.filter((id) => id !== courseId) : [...current, courseId]
    )
  }

  const toggleWishlist = (courseId: number) => {
    setWishlist((current) =>
      current.includes(courseId) ? current.filter((id) => id !== courseId) : [...current, courseId]
    )
  }

  // Drag Functions
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setHasDragged(false)
    if (scrollRef.current) {
      startX.current = e.pageX - scrollRef.current.offsetLeft
      scrollLeft.current = scrollRef.current.scrollLeft
    }
  }

  const handleMouseLeave = () => setIsDragging(false)
  const handleMouseUp = () => setIsDragging(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    setHasDragged(true)
    if (scrollRef.current) {
      const x = e.pageX - scrollRef.current.offsetLeft
      const walk = (x - startX.current) * 1.5
      scrollRef.current.scrollLeft = scrollLeft.current - walk
    }
  }

  return (
    <section className="relative py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-[120px]"></div>

      <div className="container-custom relative z-10">
        {/* Modern Left-Aligned Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 dark:bg-primary-500/10 border border-primary-100 dark:border-primary-500/20 text-primary-600 dark:text-primary-400 text-xs font-bold uppercase tracking-wide mb-4 shadow-sm"
            >
              <BookOpen className="w-5 h-5" /> Most Popular
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight"
            >
              Featured Programs to <span className="text-primary-600 dark:text-primary-400">Elevate</span> Your Career
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-slate-600 dark:text-slate-400 text-base"
            >
              Master top skills with our highly rated courses, designed by industry experts for real-world impact.
            </motion.p>
          </div>
        </div>

        {/* Horizontal Scroll Layout */}
        <div 
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`flex gap-6 overflow-x-auto pb-10 pt-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] ${isDragging ? 'cursor-grabbing snap-none' : 'cursor-grab snap-x snap-mandatory'}`}
        >
          {courses.map((course, index) => {
            const isInCart = cart.includes(course.id)
            const isWishlisted = wishlist.includes(course.id)

            return (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={course.id}
                onClickCapture={(e) => {
                  if (hasDragged) {
                    e.stopPropagation()
                    e.preventDefault()
                  }
                }}
                className="snap-start shrink-0 w-[85vw] max-w-[320px] sm:w-[300px] lg:w-[320px] select-none group flex flex-col bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden transition-all duration-300 hover:border-primary-200 dark:hover:border-primary-800 hover:shadow-2xl hover:shadow-primary-500/10 dark:hover:shadow-primary-900/10 hover:-translate-y-1.5"
              >
                {/* Standardized Aspect Ratio Image */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay Badges */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <span className="bg-primary-500 text-white px-2.5 py-1 rounded text-[11px] font-bold tracking-wide shadow-sm">
                      {course.badge}
                    </span>
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        toggleWishlist(course.id)
                      }}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md transition-all hover:scale-110 shadow-sm border border-slate-100 dark:border-slate-800"
                    >
                      <Heart className={`h-4 w-4 transition-colors ${isWishlisted ? 'fill-rose-500 text-rose-500' : 'text-slate-600 dark:text-slate-400 hover:text-rose-500'}`} />
                    </button>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[11px] font-semibold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-500/10 px-2 py-0.5 rounded">
                      {course.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-[13px] font-semibold text-slate-700 dark:text-slate-300">
                      <MessageCircle className="w-3.5 h-3.5 text-slate-400 mb-0.5" /> {course.language}
                    </div>
                  </div>

                  <div className="mb-3 block">
                    <h3 className="line-clamp-2 text-base sm:text-[17px] font-bold leading-snug text-slate-900 dark:text-white transition-colors group-hover:text-primary-600 dark:group-hover:text-primary-400">
                      {course.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
                    <Target className="w-4 h-4 text-rose-500" /> {course.target}
                  </p>

                  <div className="flex items-center justify-between w-full bg-slate-50 dark:bg-slate-800/50 p-3 sm:p-3.5 rounded-xl border border-slate-100 dark:border-slate-800/80 mb-5 sm:mb-6 mt-auto">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Starts</span>
                      <span className="flex items-center gap-1.5 text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 font-semibold"><Calendar className="w-3.5 h-3.5 text-primary-500" /> {course.startDate}</span>
                    </div>
                    <div className="w-px h-8 bg-slate-200 dark:bg-slate-700"></div>
                    <div className="flex flex-col gap-1 items-end">
                      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Ends</span>
                      <span className="flex items-center gap-1.5 text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 font-semibold"><Calendar className="w-3.5 h-3.5 text-sky-500" /> {course.endDate}</span>
                    </div>
                  </div>

                  {/* Multi-Function Action Area */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-lg sm:text-[20px] font-black text-slate-900 dark:text-white leading-none">₹{course.price.toLocaleString('en-IN')}</span>
                      {course.originalPrice && <span className="ml-2 text-[13px] font-medium text-slate-400 line-through">₹{course.originalPrice.toLocaleString('en-IN')}</span>}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 w-full">
                    <a 
                      href={course.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-[13px] font-bold border border-primary-200 dark:border-primary-500/30 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-500/10 transition-colors"
                    >
                      <Sparkles className="w-3.5 h-3.5" /> Explore
                    </a>
                    <button onClick={(e) => { e.preventDefault(); toggleCart(course.id) }} className={`flex-1 flex items-center justify-center gap-1.5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-[13px] font-bold transition-all shadow-sm active:scale-95 ${ isInCart ? 'bg-emerald-500 text-white shadow-emerald-500/20' : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-primary-600 dark:hover:bg-primary-500 hover:text-white shadow-slate-900/20' }`}>
                      {isInCart ? <><Check className="w-3.5 h-3.5" /> Added</> : <><ShoppingCart className="w-3.5 h-3.5" /> Add to Cart</>}
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Universal View All Button */}
        <div className="mt-10 flex justify-center w-full relative z-20">
          <Link href="/courses" className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary-500/25 active:scale-95 overflow-hidden">
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black dark:to-white"></span>
            <span className="relative flex items-center gap-2">
              View All Courses <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
