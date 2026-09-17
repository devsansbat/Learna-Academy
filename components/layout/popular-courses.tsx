'use client'

import React, { useState, useMemo } from 'react'
import Image from 'next/image'
import { Users, Calendar, Tag, Infinity as InfinityIcon, MessageCircle, Wifi, MapPin, ArrowRight, Code, BrainCircuit, School, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// --- Data Models ---
interface Course {
  id: string
  type: 'online' | 'offline'
  title: string
  banner: string
  target: string
  startDate: string
  endDate: string
  price: number
  originalPrice?: number
  discount?: number
  isNew?: boolean
  category: 'NEET' | 'JEE' | 'Foundation'
  link: string
}

const courses: Course[] = [
  {
    id: "1",
    type: "online",
    title: "Arjuna NEET 2.0 2027",
    banner: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop",
    target: "For 11th NEET Aspirants",
    startDate: "1 Jun, 2026",
    endDate: "30 Jun, 2028",
    price: 4999,
    originalPrice: 5500,
    discount: 9,
    category: 'NEET',
    link: "#"
  },
  {
    id: "2",
    type: "online",
    title: "Arjuna NEET 2027 + Lakshya NEET 2028",
    banner: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=400&fit=crop",
    target: "For NEET Aspirants",
    startDate: "13 Apr, 2026",
    endDate: "30 Jun, 2028",
    price: 8800,
    originalPrice: 12400,
    discount: 29,
    category: 'NEET',
    link: "#"
  },
  {
    id: "3",
    type: "offline",
    title: "Vidyapeeth 11 NEET (Target 2028)",
    banner: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop",
    target: "NEET Target 2028",
    startDate: "1 Apr, 2026",
    endDate: "30 Mar, 2028",
    price: 5000,
    isNew: true,
    category: 'NEET',
    link: "#"
  },
  {
    id: "4",
    type: "online",
    title: "Lakshya JEE 2.0 2025",
    banner: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=400&fit=crop",
    target: "12th JEE Aspirants",
    startDate: "10 May, 2024",
    endDate: "30 Mar, 2025",
    price: 4200,
    originalPrice: 5000,
    discount: 16,
    category: 'JEE',
    link: "#"
  },
  {
    id: "5",
    type: "offline",
    title: "Vidyapeeth 12 JEE (Target 2025)",
    banner: "https://images.unsplash.com/photo-1588591795084-1770cb3be374?w=800&h=400&fit=crop",
    target: "JEE Target 2025",
    startDate: "15 Apr, 2024",
    endDate: "10 Mar, 2025",
    price: 8000,
    isNew: false,
    category: 'JEE',
    link: "#"
  }
]

// --- BatchCard Component ---
const BatchCard = ({ course }: { course: Course }) => {
  const categoryTheme = useMemo(() => {
    switch (course.category) {
      case 'JEE':
        return { icon: Code, color: 'text-indigo-600', bg: 'bg-indigo-50', border: 'hover:border-indigo-200 hover:shadow-indigo-500/10' };
      case 'NEET':
        return { icon: BrainCircuit, color: 'text-rose-600', bg: 'bg-rose-50', border: 'hover:border-rose-200 hover:shadow-rose-500/10' };
      default:
        return { icon: School, color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'hover:border-emerald-200 hover:shadow-emerald-500/10' };
    }
  }, [course.category]);

  const Icon = categoryTheme.icon;

  return (
    <a href={course.link} className={`group block rounded-[24px] border border-slate-200/60 bg-white dark:bg-slate-900 p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:shadow-none ${categoryTheme.border} h-full`}>
      <div className="flex flex-col h-full">
        <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${categoryTheme.bg} transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6`}>
          <Icon className={`h-7 w-7 ${categoryTheme.color}`} />
        </div>
        <div className="flex-grow">
          <h3 className="mb-2 text-[17px] font-bold text-slate-900 dark:text-white">{course.title}</h3>
          <p className="text-[13px] leading-relaxed text-slate-500 dark:text-slate-400">{course.target}</p>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-black text-slate-900 dark:text-white">₹{course.price.toLocaleString('en-IN')}</span>
            {course.originalPrice && <s className="text-xs font-medium text-slate-400">₹{course.originalPrice.toLocaleString('en-IN')}</s>}
          </div>
          <div className="flex items-center gap-1 text-sm font-bold text-primary-600 dark:text-primary-400">
            Explore <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </a>
  )
}

// --- Main Carousel Component ---
export const PopularCourses = () => {
  const [activeType, setActiveType] = useState<string>('All');

  // Automatically extract unique batch types (Online, Offline, etc.)
  const availableTypes = ['All', ...Array.from(new Set(courses.map(c => c.category)))];
  
  // Filter courses based on selected type
  const filteredCourses = activeType === 'All' ? courses : courses.filter(c => c.category === activeType);

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 font-sans">
      {/* 1. Container */}
      <div className="container-custom">
        
        {/* Header & Controls */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">Most Popular Programs</h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 text-sm md:text-base">
            Featured programs designed to elevate your career. Choose a path and start learning with the best.
          </p>
        </div>

        {/* Dynamic Type Filters */}
        <div className="flex gap-2 sm:gap-3 mb-6 overflow-x-auto pb-2 w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          {availableTypes.map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`shrink-0 px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-[13px] sm:text-sm font-bold capitalize transition-all border ${
                activeType === type
                  ? 'bg-primary-500 text-white border-primary-500 shadow-md shadow-primary-500/20'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-primary-500 hover:text-primary-600 dark:hover:border-primary-500'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Grid Wrapper */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pt-4 pb-12 w-full">
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.25 }}
                key={`${activeType}-${course.id}`}
                className="w-full"
              >
                <BatchCard course={course} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
      </div>
    </section>
  )
}