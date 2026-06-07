'use client'

import { motion } from 'framer-motion'
import { BookOpen, Clock, Award, TrendingUp } from 'lucide-react'

const stats = [
  {
    icon: BookOpen,
    label: 'Enrolled Courses',
    value: '8',
    change: '+2 this month',
    progress: 68,
    bg: 'bg-blue-100 text-blue-600',
  },
  {
    icon: Clock,
    label: 'Learning Hours',
    value: '127h',
    change: '+15h this week',
    progress: 84,
    bg: 'bg-green-100 text-green-600',
  },
  {
    icon: Award,
    label: 'Certificates',
    value: '5',
    change: '2 pending',
    progress: 56,
    bg: 'bg-purple-100 text-purple-600',
  },
  {
    icon: TrendingUp,
    label: 'Avg. Score',
    value: '86%',
    change: '+5% improvement',
    progress: 86,
    bg: 'bg-orange-100 text-orange-600',
  },
]

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-xl p-6 shadow-sm"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 rounded-2xl ${stat.bg} flex items-center justify-center`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold">{stat.value}</span>
          </div>
          <h3 className="font-semibold text-gray-800 mb-3">{stat.label}</h3>
          <div className="h-2 rounded-full bg-gray-200 overflow-hidden mb-3">
            <div className="h-full rounded-full bg-primary-500" style={{ width: `${stat.progress}%` }} />
          </div>
          <p className="text-sm text-gray-500">{stat.change}</p>
        </motion.div>
      ))}
    </div>
  )
}