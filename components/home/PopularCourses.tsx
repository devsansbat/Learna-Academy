﻿'use client'

import { useEffect, useState } from 'react'
import { Star, Clock, Users, ShoppingCart, Play, Check, Heart } from 'lucide-react'
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
    <section className="py-16 bg-slate-50">
      <div className="container-custom">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold">Popular Courses</h2>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mt-2">
              Discover the most enrolled courses and start your learning journey with curated bite-sized classes.
            </p>
          </div>
          {/* header summary removed per UX request */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
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
                className="group flex flex-col rounded-2xl border border-slate-200/70 bg-white p-1.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/40"
              >
                {/* Framed Image Container */}
                <div className="relative h-40 w-full overflow-hidden rounded-xl bg-slate-100">
                  <img src={course.image} alt={course.title} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  
                  {/* Clean, subtle overlays */}
                  <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-transparent opacity-80" />
                  <div className="absolute inset-0 bg-slate-900/0 transition-colors duration-300 group-hover:bg-slate-900/20" />
                  
                  {/* Minimalist Top Badges */}
                  <div className="absolute left-3 top-3 flex flex-col items-start gap-2">
                    <span className="rounded-full border border-white/20 bg-white/20 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white shadow-sm backdrop-blur-md">
                      {course.category}
                    </span>
                  </div>

                  {/* Elegant Wishlist Heart */}
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      toggleWishlist(course.id)
                    }}
                    className="absolute right-3 top-3 z-10 flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-white/20 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white group/heart"
                    title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                  >
                    <Heart className={`h-3.5 w-3.5 transition-colors ${isWishlisted ? 'fill-rose-500 text-rose-500' : 'text-white group-hover/heart:text-rose-500'}`} />
                  </button>

                  {/* Center Hover Action (Preview) */}
                  <Link href={`/courses/${course.id}`} className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <div className="flex transform items-center gap-1.5 rounded-full border border-white/40 bg-white/25 px-4 py-2 text-white shadow-xl backdrop-blur-md transition-transform duration-300 hover:scale-105 hover:bg-white/30">
                      <Play className="h-3.5 w-3.5 fill-white" />
                      <span className="text-[11px] font-bold tracking-wide">Preview</span>
                    </div>
                  </Link>
                </div>

                {/* Content Section - Highly structured and clean */}
                <div className="flex flex-1 flex-col px-2.5 py-3">
                  {/* Meta info (Level, Duration, Rating) */}
                  <div className="mb-2 flex items-center justify-between text-[10px] font-medium text-slate-500">
                    <div className="flex gap-3">
                      <span className="flex items-center gap-1"><Users className="h-3 w-3 text-indigo-400" /> {course.students.toLocaleString()}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3 text-sky-400" /> {course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                      <span className="font-semibold text-slate-700">{course.rating}</span>
                    </div>
                  </div>

                  {/* Course Title */}
                  <Link href={`/courses/${course.id}`} className="group/title mb-2">
                    <h3 className="line-clamp-2 text-sm font-bold leading-snug text-slate-800 transition-colors group-hover/title:text-indigo-600">
                      {course.title}
                    </h3>
                  </Link>

                  {/* Instructor Info */}
                  <div className="mb-3 mt-auto flex items-center gap-2">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-[9px] font-bold text-slate-600">
                      {course.instructor.charAt(0)}
                    </div>
                    <p className="text-[11px] text-slate-500">by <span className="font-medium text-slate-700">{course.instructor}</span></p>
                    
                    {course.badge && (
                      <span className="ml-auto rounded bg-indigo-50 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-indigo-600">
                        {course.badge}
                      </span>
                    )}
                  </div>

                  {/* Footer: Price & Actions */}
                  <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1.5">
                        <span className="leading-none text-[15px] font-bold text-slate-900">₹{course.price.toLocaleString()}</span>
                        <span className="rounded bg-rose-50 px-1 py-0.5 text-[8px] font-bold text-rose-600">{discount}% OFF</span>
                      </div>
                      <span className="mt-1 text-[10px] font-medium text-slate-400 line-through">₹{course.originalPrice.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <button onClick={(e) => { e.preventDefault(); toggleCart(course.id) }} className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${ isInCart ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-900' }`}>
                        {isInCart ? <Check className="h-3.5 w-3.5" /> : <ShoppingCart className="h-3.5 w-3.5" />}
                      </button>
                      <Link href={`/courses/${course.id}`} className="rounded-full bg-slate-900 px-3.5 py-1.5 text-[11px] font-semibold text-white transition-all hover:bg-indigo-600 hover:shadow-md hover:shadow-indigo-500/20">
                        Enroll
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
