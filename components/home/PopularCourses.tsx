﻿'use client'

import { useEffect, useState } from 'react'
import { Star, Clock, Users, ShoppingCart, Check, Heart, ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const courses = [
  {
    id: 1,
    title: 'Complete Web Development Bootcamp 2024',
    instructor: 'Dr. Angela Yu',
    rating: 4.8,
    students: 150000,
    duration: '40 hours',
    price: 2999,
    originalPrice: 9999,
    image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&h=500&fit=crop',
    category: 'Programming',
    badge: 'Best Seller',
    level: 'Beginner',
  },
  {
    id: 2,
    title: 'Data Science & Machine Learning Mastery',
    instructor: 'Andrew Ng',
    rating: 4.9,
    students: 120000,
    duration: '50 hours',
    price: 3999,
    originalPrice: 14999,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    category: 'Data Science',
    badge: 'Trending',
    level: 'Intermediate',
  },
  {
    id: 3,
    title: 'Digital Marketing & Branding',
    instructor: 'Neil Patel',
    rating: 4.7,
    students: 85000,
    duration: '30 hours',
    price: 1999,
    originalPrice: 7999,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    category: 'Marketing',
    badge: 'Popular',
    level: 'All Levels',
  },
  {
    id: 4,
    title: 'UI/UX Design Masterclass',
    instructor: 'Julie Zhou',
    rating: 4.9,
    students: 95000,
    duration: '35 hours',
    price: 2499,
    originalPrice: 8999,
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=500&fit=crop',
    category: 'Design',
    badge: 'New',
    level: 'Beginner',
  },
]

export const PopularCourses = () => {
  const [cart, setCart] = useState<number[]>([])
  const [wishlist, setWishlist] = useState<number[]>([])
  const [isCartReady, setIsCartReady] = useState(false)

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

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="container-custom">
        {/* Clean & Centered Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 dark:bg-primary-500/10 border border-primary-100 dark:border-primary-500/20 text-primary-600 dark:text-primary-400 text-xs font-bold uppercase tracking-wide mb-4 shadow-sm"
          >
            <Sparkles className="w-4 h-4" /> Top Rated
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight"
          >
            Explore Our Popular Courses
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-2xl"
          >
            Expand your knowledge with our most sought-after programs, meticulously crafted by industry experts.
          </motion.p>
        </div>

        {/* Premium Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {courses.map((course, index) => {
            const isInCart = cart.includes(course.id)
            const isWishlisted = wishlist.includes(course.id)
            const discount = Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)

            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                key={course.id}
                className="group flex flex-col bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200/60 dark:border-slate-800 p-2.5 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] dark:hover:shadow-primary-500/10 hover:-translate-y-2"
              >
                {/* Clean Image Container */}
                <div className="relative w-full h-48 sm:h-52 rounded-[1.5rem] overflow-hidden bg-slate-100 dark:bg-slate-800 mb-5">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1.5 rounded-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-widest shadow-sm">
                      {course.category}
                    </span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      toggleWishlist(course.id)
                    }}
                    className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md transition-all duration-300 hover:scale-110 shadow-sm group/heart"
                    title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                  >
                    <Heart className={`h-4 w-4 transition-colors ${isWishlisted ? 'fill-rose-500 text-rose-500' : 'text-slate-400 group-hover/heart:text-rose-500'}`} />
                  </button>
                </div>

                {/* Content Section */}
                <div className="flex flex-1 flex-col px-4 pb-4">
                  <div className="mb-3 flex items-center gap-4 text-[11px] font-bold text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1.5"><Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" /> {course.rating}</span>
                    <span className="flex items-center gap-1.5"><Users className="h-3.5 w-3.5 text-slate-400" /> {course.students.toLocaleString()}</span>
                    <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-slate-400" /> {course.duration}</span>
                  </div>

                  <Link href={`/courses/${course.id}`} className="group/title mb-3 block">
                    <h3 className="line-clamp-2 text-lg font-bold leading-tight text-slate-900 dark:text-white transition-colors group-hover/title:text-primary-600 dark:group-hover/title:text-primary-400">
                      {course.title}
                    </h3>
                  </Link>

                  <div className="mb-6 mt-auto flex items-center gap-2.5">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-700 dark:text-slate-300">
                      {course.instructor.charAt(0)}
                    </div>
                    <p className="text-[13px] font-semibold text-slate-500 dark:text-slate-400">{course.instructor}</p>
                  </div>

                  {/* Footer: Price & Minimal Actions */}
                  <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800/60 pt-4">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-black text-slate-900 dark:text-white">₹{course.price.toLocaleString()}</span>
                        <span className="rounded bg-emerald-50 dark:bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">{discount}% OFF</span>
                      </div>
                      <span className="mt-0.5 text-xs font-semibold text-slate-400 line-through">₹{course.originalPrice.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex items-center gap-2.5">
                      <button onClick={(e) => { e.preventDefault(); toggleCart(course.id) }} className={`flex h-10 w-10 items-center justify-center rounded-full transition-all ${ isInCart ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 'bg-slate-50 dark:bg-slate-800 text-slate-400 hover:bg-primary-50 dark:hover:bg-primary-500/10 hover:text-primary-600 dark:hover:text-primary-400' }`}>
                        {isInCart ? <Check className="h-4 w-4" /> : <ShoppingCart className="h-4 w-4" />}
                      </button>
                      <Link href={`/courses/${course.id}`} className="group/btn flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 transition-all hover:bg-primary-600 dark:hover:bg-primary-500 hover:shadow-lg hover:shadow-primary-500/20">
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
