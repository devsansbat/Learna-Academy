'use client'

import { useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Users, BookOpen, Video, Award } from 'lucide-react'

const Counter = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    if (isInView) {
      let startTime: number
      let animationFrame: number

      const updateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = (timestamp - startTime) / duration
        const currentCount = Math.min(Math.floor(end * progress), end)
        setCount(currentCount)

        if (progress < 1) {
          animationFrame = requestAnimationFrame(updateCount)
        }
      }

      animationFrame = requestAnimationFrame(updateCount)
      return () => cancelAnimationFrame(animationFrame)
    }
  }, [isInView, end, duration])

  return <span ref={ref}>{count.toLocaleString()}+</span>
}

const stats = [
  { icon: Users, label: 'Active Students', value: 1000000, suffix: '+' },
  { icon: BookOpen, label: 'Courses', value: 2500, suffix: '+' },
  { icon: Video, label: 'Live Classes', value: 50000, suffix: '+' },
  { icon: Award, label: 'Certifications', value: 500000, suffix: '+' },
]

export const Statistics = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-500 to-secondary">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center text-white"
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">
                <Counter end={stat.value} />
              </div>
              <p className="text-lg opacity-90">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}