'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  LayoutDashboard,
  BookOpen,
  Video,
  FileText,
  Trophy,
  HelpCircle,
  Settings,
  Calendar,
  Bell,
  TrendingUp,
  Award,
  Flame,
} from 'lucide-react'
import DashboardStats from '@/components/dashboard/dashboardstats'
import MyCourses from '@/components/dashboard/MyCourses'
import ProgressTracking from '@/components/dashboard/ProgressTracking'
import RecentActivity from '@/components/dashboard/RecentActivity'
import UpcomingClasses from '@/components/dashboard/UpcomingClasses'

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/student/dashboard' },
  { icon: BookOpen, label: 'My Courses', href: '/student/courses' },
  { icon: Video, label: 'Live Classes', href: '/student/live-classes' },
  { icon: FileText, label: 'Notes', href: '/student/notes' },
  { icon: Trophy, label: 'Achievements', href: '/student/achievements' },
  { icon: HelpCircle, label: 'Doubt Solver', href: '/student/doubts' },
  { icon: Settings, label: 'Settings', href: '/student/settings' },
]

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard')

  return (
    <div className="pt-20 pb-10 bg-gray-50 min-h-screen">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-80"
          >
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              {/* User Info */}
              <div className="text-center mb-6 pb-6 border-b">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary-500 to-secondary rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-3xl font-bold">A</span>
                </div>
                <h3 className="font-bold text-xl">Alex Johnson</h3>
                <p className="text-gray-600 text-sm">Student • Pro Plan</p>
                <div className="mt-2 inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  <Flame className="w-4 h-4" />
                  <span>30 Day Streak!</span>
                </div>
              </div>

              {/* Navigation */}
              <nav className="space-y-2">
                {sidebarItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => setActiveTab(item.label.toLowerCase())}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      activeTab === item.label.toLowerCase()
                        ? 'bg-primary-50 text-primary-600 font-semibold'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </motion.aside>

          {/* Main Content */}
          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1"
          >
            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-primary-500 to-secondary rounded-xl p-6 text-white mb-8">
              <h2 className="text-2xl font-bold mb-2">Welcome back, Alex! 👋</h2>
              <p className="opacity-90">Continue your learning journey. You're doing great!</p>
            </div>

            {/* Stats Overview */}
            <DashboardStats />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
              <MyCourses />
              <ProgressTracking />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
              <RecentActivity />
              <UpcomingClasses />
            </div>
          </motion.main>
        </div>
      </div>
    </div>
  )
}