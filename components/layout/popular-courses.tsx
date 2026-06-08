'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Users, Calendar, Tag, Infinity as InfinityIcon, MessageCircle } from 'lucide-react'

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
    link: "#"
  }
]

// --- BatchCard Component ---
const BatchCard = ({ course }: { course: Course }) => {
  const borderGradientColor = course.type === 'online' ? 'border-primary-500' : 'border-rose-500'
  const tagColor = course.type === 'online' ? 'bg-primary-500' : 'bg-rose-500'

  return (
    <div className={`relative w-full bg-white dark:bg-slate-900 rounded-2xl shadow-sm hover:shadow-xl dark:shadow-none dark:border dark:border-slate-800 border-t-[4px] p-5 flex flex-col transition-all hover:-translate-y-1 duration-300 ${borderGradientColor} h-full`}>
      
      {/* 2. Online/Offline Tag */}
      <div className={`absolute left-0 top-0 px-4 py-1.5 text-[11px] font-black text-white uppercase tracking-wider rounded-br-xl rounded-tl-xl shadow-sm z-10 ${tagColor}`}>
        {course.type === 'online' ? 'Online' : 'Offline'}
      </div>

      {/* 3. WhatsApp Share Button */}
      <a 
        href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`Check out this batch: ${course.link}`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-4 top-4 z-10 w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-sm"
        aria-label="Share on WhatsApp"
      >
        <MessageCircle className="w-4 h-4" />
      </a>

      {/* 4. Banner Image */}
      <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 mt-6 mb-4">
        <Image 
          src={course.banner} 
          alt={course.title}
          fill
          unoptimized
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* 5. Title Section */}
      <div className="flex items-start justify-between mb-4 gap-3">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white line-clamp-2 leading-tight flex-1">
          {course.isNew && (
            <span className="inline-block bg-amber-400 text-amber-950 text-[10px] px-2 py-0.5 rounded mr-2 font-black uppercase align-middle mb-0.5 shadow-sm">
              NEW
            </span>
          )}
          {course.title}
        </h3>
        <span className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg px-2.5 py-1 text-[11px] font-bold shrink-0 mt-0.5 border border-slate-200 dark:border-slate-700">
          Hinglish
        </span>
      </div>

      {/* 6. Target Audience */}
      <div className="flex items-center gap-2 mb-4 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
        <Users className="w-4 h-4 text-primary-500" />
        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{course.target}</span>
      </div>

      {/* 7. Dates Section */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        <div className="flex items-center gap-2.5 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
          <Calendar className="w-4 h-4 text-slate-400 dark:text-slate-500 shrink-0" />
          <div className="flex flex-col min-w-0">
            <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider truncate">Starts</span>
            <span className="text-xs font-bold text-slate-900 dark:text-white truncate">{course.startDate}</span>
          </div>
        </div>
        <div className="flex items-center gap-2.5 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
          <Calendar className="w-4 h-4 text-slate-400 dark:text-slate-500 shrink-0" />
          <div className="flex flex-col min-w-0">
            <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider truncate">Ends</span>
            <span className="text-xs font-bold text-slate-900 dark:text-white truncate">{course.endDate}</span>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        {/* 8. Premium Features Badge (Only for online cards) */}
        {course.type === 'online' && (
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-700 py-2.5 px-4 rounded-lg flex items-center justify-between mb-4 shadow-sm border border-slate-700 dark:border-slate-600">
            <span className="text-white text-xs font-semibold">Premium Features Included</span>
            <InfinityIcon className="w-4 h-4 text-primary-400" />
          </div>
        )}

        {/* 9. Price Section */}
        <div className="border-t border-slate-100 dark:border-slate-800 pt-5 mb-5">
          <div className="flex flex-wrap items-baseline gap-2 mb-2">
            <span className="text-2xl font-black text-slate-900 dark:text-white">
              ₹{course.price.toLocaleString('en-IN')}
            </span>
            {course.originalPrice && (
              <s className="text-sm font-medium text-slate-400 dark:text-slate-500">
                ₹{course.originalPrice.toLocaleString('en-IN')}
              </s>
            )}
          </div>
          
          {course.discount && (
            <div className="inline-flex items-center gap-1.5 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 rounded-md px-2.5 py-1">
              <Tag className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span className="text-emerald-700 dark:text-emerald-400 text-[11px] font-bold tracking-wide">
                SAVE {course.discount}%
              </span>
            </div>
          )}
        </div>

        {/* 10. Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <a 
            href={course.link} 
            className="flex items-center justify-center h-12 border-2 border-primary-500 text-primary-600 dark:text-primary-400 rounded-xl font-bold text-[13px] sm:text-sm hover:bg-primary-50 dark:hover:bg-primary-500/10 transition-colors"
          >
            Explore
          </a>
          <a 
            href={course.link}
            className="flex items-center justify-center h-12 bg-primary-500 text-white rounded-xl font-bold text-[13px] sm:text-sm hover:bg-primary-600 shadow-md shadow-primary-500/25 transition-all active:scale-95"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  )
}

// --- Main Carousel Component ---
export const PopularCourses = () => {
  const [activeType, setActiveType] = useState<string>('All')

  // Automatically extract unique batch types (Online, Offline, etc.)
  const availableTypes = ['All', ...Array.from(new Set(courses.map(c => c.type)))]
  
  // Filter courses based on selected type
  const filteredCourses = activeType === 'All' ? courses : courses.filter(c => c.type === activeType)

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 font-sans">
      {/* 1. Container */}
      <div className="max-w-[1152px] mx-auto px-4">
        
        {/* Header & Controls */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-[#1b2124] dark:text-white">Explore Batches</h2>
        </div>

        {/* Dynamic Type Filters */}
        <div className="flex gap-3 mb-6 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          {availableTypes.map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold capitalize transition-all border ${
                activeType === type
                  ? 'bg-[#5a4bda] text-white border-[#5a4bda] shadow-md shadow-[#5a4bda]/20'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-[#5a4bda] hover:text-[#5a4bda] dark:hover:border-[#5a4bda]'
              }`}
            >
              {type} Batches
            </button>
          ))}
        </div>

        {/* Grid Wrapper */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 pt-4">
          {filteredCourses.map((course) => (
            <BatchCard key={course.id} course={course} />
          ))}
        </div>
        
      </div>
    </section>
  )
}