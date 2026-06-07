/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
'use client'

import { useState, ChangeEvent } from 'react'
import { motion } from 'framer-motion'
import {
  LayoutDashboard, BookOpen, Video, FileText, Trophy, Settings,
  Flame, Sparkles, User, Activity, ClipboardList, Library, Briefcase, Users,
  Bot, GraduationCap, Star, Bookmark, Shield, CreditCard, BellRing, Target, TrendingUp,
  ChevronRight, Edit3, Github, Linkedin, Twitter, Download, Share2, MapPin, Mail, Phone, Lock, HeartPulse, CheckCheck, X, Calendar, Camera, Globe, Award, ChevronDown
} from 'lucide-react'
import DashboardStats from '@/components/dashboard/dashboardstats'
import MyCourses from '@/components/dashboard/MyCourses'
import ProgressTracking from '@/components/dashboard/ProgressTracking'
import RecentActivity from '@/components/dashboard/RecentActivity'
import UpcomingClasses from '@/components/dashboard/UpcomingClasses'

const sidebarGroups = [
  {
    title: 'Overview',
    items: [
      { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard' },
      { icon: User, label: 'Profile', id: 'profile' },
      { icon: Activity, label: 'Analytics', id: 'analytics' },
    ]
  },
  {
    title: 'Learning Hub',
    items: [
      { icon: BookOpen, label: 'My Courses', id: 'courses' },
      { icon: Video, label: 'Live Classes', id: 'live classes' },
      { icon: ClipboardList, label: 'Assessments', id: 'assessments' },
      { icon: Library, label: 'Resources', id: 'resources' },
    ]
  },
  {
    title: 'Career & Growth',
    items: [
      { icon: Trophy, label: 'Achievements', id: 'achievements' },
      { icon: Briefcase, label: 'Career Center', id: 'career' },
    ]
  },
  {
    title: 'Connect & Settings',
    items: [
      { icon: Bot, label: 'AI Tutor', id: 'ai tutor' },
      { icon: Users, label: 'Community', id: 'community' },
      { icon: Settings, label: 'Settings', id: 'settings' },
    ]
  }
]

const quickActions = [
  { label: 'Resume Course', color: 'bg-primary-500', icon: Sparkles },
  { label: 'Review Notes', color: 'bg-emerald-500', icon: BookOpen },
  { label: 'Join Live Class', color: 'bg-sky-500', icon: Video },
]

const ProfileTab = () => {
  const [showImageUploadModal, setShowImageUploadModal] = useState(false)
  const [profileImageUrl, setProfileImageUrl] = useState(
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=250&auto=format&fit=crop'
  )

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const reader = new FileReader()

      reader.onload = (loadEvent) => {
        if (loadEvent.target && typeof loadEvent.target.result === 'string') {
          setProfileImageUrl(loadEvent.target.result)
          setShowImageUploadModal(false)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <>
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Cover Photo & Main Profile Card */}
      <div className="rounded-[32px] bg-white dark:bg-slate-900 shadow-sm overflow-hidden border border-slate-100 dark:border-slate-800 relative transition-colors">
      <div className="h-32 sm:h-48 w-full bg-slate-900 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] relative overflow-hidden flex items-center justify-center">
         <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 via-indigo-600/90 to-purple-600/90"></div>
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4"></div>
      </div>
      <div className="px-6 sm:px-10 pb-8 relative">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-end -mt-12 sm:-mt-16 mb-4 sm:mb-0 relative z-10 text-center sm:text-left">
          <div 
            className="w-28 h-28 sm:w-36 sm:h-36 rounded-[2rem] bg-white dark:bg-slate-800 p-2 shadow-xl border border-slate-100 dark:border-slate-700 relative group cursor-pointer shrink-0"
            onClick={() => setShowImageUploadModal(true)}
          >
            <div className="w-full h-full rounded-[1.5rem] bg-gradient-to-br from-primary-500 to-indigo-600 flex items-center justify-center text-white text-3xl sm:text-4xl font-black overflow-hidden transition-all duration-300 relative">
              <img src={profileImageUrl} alt="Profile" className="w-full h-full object-cover group-hover:opacity-50 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Camera className="w-8 h-8 text-white mb-1" />
                <span className="text-[10px] font-bold tracking-wider text-white uppercase">Change</span>
              </div>
            </div>
            <div className="absolute bottom-2 right-2 w-6 h-6 bg-emerald-500 border-[3px] border-white rounded-full shadow-sm" title="Online"></div>
          </div>
          <div className="flex-1 pb-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white flex items-center justify-center sm:justify-start gap-2">Alex Johnson <CheckCheck className="w-6 h-6 text-primary-500" /></h2>
                <p className="text-slate-600 dark:text-slate-400 font-medium text-sm mt-1 flex items-center justify-center sm:justify-start gap-2">
                  <span>Computer Science Student • 3rd Year</span>
                </p>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 mt-3 sm:mt-2">
                  <span className="flex items-center gap-1 text-xs font-bold text-slate-400 uppercase tracking-wider"><MapPin className="w-3.5 h-3.5"/> Bangalore, IN</span>
                  <span className="flex items-center gap-1 text-xs font-bold text-slate-400 uppercase tracking-wider"><Calendar className="w-3.5 h-3.5"/> Joined Sep 2023</span>
                </div>
              </div>
              <div className="flex w-full sm:w-auto justify-center sm:justify-start gap-3 mt-4 sm:mt-0">
                <button className="flex-1 sm:flex-none justify-center px-5 py-2.5 bg-primary-50 text-primary-600 rounded-xl font-bold hover:bg-primary-100 transition border border-primary-100 shadow-sm flex items-center gap-2 text-sm shrink-0">
                  <Download className="w-4 h-4" /> CV
                </button>
                <button className="flex-1 sm:flex-none justify-center px-5 py-2.5 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-xl font-bold hover:bg-slate-800 dark:hover:bg-white transition shadow-sm hover:shadow-md flex items-center gap-2 text-sm shrink-0">
                  <Edit3 className="w-4 h-4" /> Edit
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-default">
            <div className="w-12 h-12 rounded-full bg-orange-50 dark:bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0"><Flame className="w-6 h-6"/></div>
            <div><p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Current Streak</p><p className="font-black text-slate-900 dark:text-white text-base">30 Days</p></div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-default">
            <div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0"><Target className="w-6 h-6"/></div>
            <div><p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Avg Score</p><p className="font-black text-slate-900 dark:text-white text-base">86%</p></div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-default">
            <div className="w-12 h-12 rounded-full bg-sky-50 dark:bg-sky-500/10 text-sky-500 flex items-center justify-center shrink-0"><BookOpen className="w-6 h-6"/></div>
            <div><p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Courses</p><p className="font-black text-slate-900 dark:text-white text-base">8 Enrolled</p></div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-default">
            <div className="w-12 h-12 rounded-full bg-purple-50 dark:bg-purple-500/10 text-purple-500 flex items-center justify-center shrink-0"><Award className="w-6 h-6"/></div>
            <div><p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Certificates</p><p className="font-black text-slate-900 dark:text-white text-base">5 Earned</p></div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        {/* About & Academic */}
        <div className="rounded-[32px] bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm border border-slate-100 dark:border-slate-800 relative overflow-hidden transition-colors">
          <Bookmark className="absolute -bottom-4 -right-4 w-32 h-32 text-slate-50 dark:text-slate-800/50 -rotate-12" />
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2 relative z-10"><User className="w-6 h-6 text-primary-500"/> About Me</h3>
          <p className="text-[15px] text-slate-600 dark:text-slate-400 leading-relaxed mb-8 relative z-10">
            Passionate Computer Science student with a keen interest in full-stack web development and artificial intelligence. Always eager to learn new technologies and build projects that solve real-world problems. Currently focusing on mastering the React ecosystem and cloud architectures.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4 relative z-10">
            <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-primary-200 dark:hover:border-primary-500/30 transition-all hover:shadow-md hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap className="w-5 h-5 text-indigo-500" />
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">University</p>
              </div>
              <p className="font-bold text-slate-900 dark:text-white text-sm">Tech Institute of India</p>
            </div>
            <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-primary-200 dark:hover:border-primary-500/30 transition-all hover:shadow-md hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-2">
                <BookOpen className="w-5 h-5 text-sky-500" />
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Degree</p>
              </div>
              <p className="font-bold text-slate-900 dark:text-white text-sm">B.Tech in Computer Science</p>
            </div>
            <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-primary-200 dark:hover:border-primary-500/30 transition-all hover:shadow-md hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-2">
                <Target className="w-5 h-5 text-emerald-500" />
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Current CGPA</p>
              </div>
              <p className="font-black text-emerald-600 text-xl">8.9<span className="text-sm font-semibold text-emerald-600/50 ml-1">/ 10</span></p>
            </div>
            <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-primary-200 dark:hover:border-primary-500/30 transition-all hover:shadow-md hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-2">
                <Globe className="w-5 h-5 text-rose-500" />
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Languages</p>
              </div>
              <p className="font-bold text-slate-900 dark:text-white text-sm">English, Hindi</p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="rounded-[32px] bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm border border-slate-100 dark:border-slate-800 transition-colors">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2"><Star className="w-6 h-6 text-primary-500"/> Tech Stack</h3>
            <button className="text-primary-600 dark:text-primary-400 text-sm font-bold hover:text-primary-700 dark:hover:text-primary-300 bg-primary-50 dark:bg-primary-500/10 px-4 py-2 rounded-xl transition-colors">+ Add Skill</button>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Frontend</h4>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { name: 'React.js', level: 'Advanced', color: 'bg-sky-50 text-sky-700 border-sky-200' },
                  { name: 'Tailwind CSS', level: 'Advanced', color: 'bg-cyan-50 text-cyan-700 border-cyan-200' },
                  { name: 'TypeScript', level: 'Intermediate', color: 'bg-blue-50 text-blue-700 border-blue-200' },
                  { name: 'Next.js', level: 'Intermediate', color: 'bg-slate-100 text-slate-700 border-slate-300' },
                ].map((skill, i) => (
                  <div key={i} className={`px-4 py-2 border rounded-xl flex items-center gap-2 transition-all hover:shadow-md hover:-translate-y-0.5 cursor-default ${skill.color}`}>
                    <span className="text-[13px] font-bold">{skill.name}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-current opacity-30 mx-0.5"></span>
                    <span className="text-[10px] uppercase tracking-wider font-extrabold opacity-70">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Backend & Database</h4>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { name: 'Node.js', level: 'Intermediate', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
                  { name: 'Python', level: 'Intermediate', color: 'bg-yellow-50 text-yellow-700 border-yellow-200' },
                  { name: 'PostgreSQL', level: 'Intermediate', color: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
                  { name: 'MongoDB', level: 'Beginner', color: 'bg-teal-50 text-teal-700 border-teal-200' },
                ].map((skill, i) => (
                  <div key={i} className={`px-4 py-2 border rounded-xl flex items-center gap-2 transition-all hover:shadow-md hover:-translate-y-0.5 cursor-default ${skill.color}`}>
                    <span className="text-[13px] font-bold">{skill.name}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-current opacity-30 mx-0.5"></span>
                    <span className="text-[10px] uppercase tracking-wider font-extrabold opacity-70">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {/* Contact Info */}
        <div className="rounded-[32px] bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm border border-slate-100 dark:border-slate-800 transition-colors">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2"><Phone className="w-6 h-6 text-primary-500"/> Contact Info</h3>
          <ul className="space-y-3">
            <li>
              <a href="mailto:alex.j@example.com" className="flex items-center gap-4 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition border border-transparent hover:border-slate-100 dark:hover:border-slate-800 group">
                <div className="w-12 h-12 rounded-full bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"><Mail className="w-5 h-5"/></div>
                <div className="overflow-hidden">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Email</p>
                  <p className="text-[15px] font-bold text-slate-900 dark:text-white truncate">alex.j@example.com</p>
                </div>
              </a>
            </li>
            <li>
              <a href="tel:+919876543210" className="flex items-center gap-4 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition border border-transparent hover:border-slate-100 dark:hover:border-slate-800 group">
                <div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"><Phone className="w-5 h-5"/></div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Phone</p>
                  <p className="text-[15px] font-bold text-slate-900 dark:text-white">+91 98765 43210</p>
                </div>
              </a>
            </li>
            <li>
              <div className="flex items-center gap-4 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition border border-transparent hover:border-slate-100 dark:hover:border-slate-800 group cursor-default">
                <div className="w-12 h-12 rounded-full bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"><MapPin className="w-5 h-5"/></div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Location</p>
                  <p className="text-[15px] font-bold text-slate-900 dark:text-white">Bangalore, India</p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="rounded-[32px] bg-slate-900 p-6 sm:p-8 shadow-xl shadow-slate-900/10 text-white">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Share2 className="w-6 h-6 text-primary-400"/> Profiles</h3>
          <div className="space-y-3">
            <a href="#" className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition group">
              <div className="flex items-center gap-3">
                <Github className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                <span className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors">GitHub</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-all group-hover:translate-x-1" />
            </a>
            <a href="#" className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition group">
              <div className="flex items-center gap-3">
                <Linkedin className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <span className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors">LinkedIn</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-all group-hover:translate-x-1" />
            </a>
            <a href="#" className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition group">
              <div className="flex items-center gap-3">
                <Twitter className="w-5 h-5 text-sky-400 group-hover:text-sky-300 transition-colors" />
                <span className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors">Twitter</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-all group-hover:translate-x-1" />
            </a>
          </div>
        </div>
        
        {/* Completion Widget */}
        <div className="rounded-[32px] bg-gradient-to-br from-primary-50 dark:from-slate-800 to-indigo-50 dark:to-slate-900 p-6 sm:p-8 border border-primary-100 dark:border-slate-700 text-center relative overflow-hidden">
          <Sparkles className="absolute -top-4 -right-4 w-24 h-24 text-primary-500/10" />
          <div className="inline-flex w-20 h-20 rounded-full bg-white dark:bg-slate-800 shadow-md shadow-primary-500/10 border border-primary-100 dark:border-slate-700 items-center justify-center text-primary-600 dark:text-primary-400 font-black text-2xl mb-4 relative z-10">
            85%
          </div>
          <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-lg relative z-10">Profile Strength</h4>
          <p className="text-[13px] text-slate-600 dark:text-slate-400 font-medium mb-6 relative z-10 leading-relaxed">Complete your profile to get personalized course and job recommendations.</p>
          <div className="w-full bg-white dark:bg-slate-900 rounded-full h-2.5 mb-6 relative z-10 overflow-hidden shadow-inner">
            <div className="bg-gradient-to-r from-primary-500 to-indigo-500 h-full rounded-full" style={{ width: '85%' }}></div>
          </div>
          <button className="w-full py-3 bg-white dark:bg-slate-800 text-primary-600 dark:text-primary-400 text-[15px] font-bold rounded-xl shadow-sm border border-primary-100 dark:border-slate-700 hover:bg-primary-50 dark:hover:bg-slate-700 hover:shadow-md transition-all relative z-10">Complete Profile</button>
        </div>
      </div>
    </div>
      </div>

      {/* Image Upload Modal */}
      {showImageUploadModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl p-6 w-full max-w-md shadow-2xl relative animate-in zoom-in-95 duration-200">
            <button 
              onClick={() => setShowImageUploadModal(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 bg-slate-50 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Update Profile Picture</h3>
            <p className="text-sm text-slate-500 mb-6">Choose a new photo for your Learna Academy profile.</p>
            
            <div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center hover:bg-slate-50 transition-colors">
              <Camera className="w-10 h-10 text-slate-400 mx-auto mb-4" />
              <p className="text-sm font-medium text-slate-700 mb-1">Click to browse your files</p>
              <p className="text-xs text-slate-500 mb-4">PNG, JPG or GIF (Max 2MB)</p>
              <label className="cursor-pointer inline-flex items-center justify-center px-6 py-2.5 bg-primary-50 text-primary-600 text-sm font-bold rounded-xl hover:bg-primary-100 transition-colors">
                Browse Files
                <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
              </label>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

const AnalyticsTab = () => (
  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="rounded-3xl bg-white p-6 shadow-sm border border-gray-100">
        <p className="text-sm text-gray-500 font-medium">Total Learning Hours</p>
        <h3 className="text-3xl font-bold mt-2 text-gray-900">142<span className="text-lg text-gray-400 font-normal"> hrs</span></h3>
        <p className="text-emerald-500 text-sm mt-3 flex items-center gap-1 font-medium"><TrendingUp className="w-4 h-4"/> +12% this month</p>
      </div>
      <div className="rounded-3xl bg-white p-6 shadow-sm border border-gray-100">
        <p className="text-sm text-gray-500 font-medium">Average Attendance</p>
        <h3 className="text-3xl font-bold mt-2 text-gray-900">94<span className="text-lg text-gray-400 font-normal">%</span></h3>
        <p className="text-emerald-500 text-sm mt-3 flex items-center gap-1 font-medium"><TrendingUp className="w-4 h-4"/> Consistently high</p>
      </div>
      <div className="rounded-3xl bg-white p-6 shadow-sm border border-gray-100">
        <p className="text-sm text-gray-500 font-medium">Skill Growth Index</p>
        <h3 className="text-3xl font-bold mt-2 text-gray-900">8.4<span className="text-lg text-gray-400 font-normal">/10</span></h3>
        <p className="text-primary-500 text-sm mt-3 flex items-center gap-1 font-medium"><Target className="w-4 h-4"/> On track for Master</p>
      </div>
    </div>
    
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      <h3 className="text-lg font-bold text-gray-900 mb-6">Performance Analytics</h3>
      <div className="h-72 bg-slate-50/50 rounded-2xl border border-dashed border-slate-200 flex flex-col items-center justify-center gap-3">
        <Activity className="w-10 h-10 text-slate-300" />
        <p className="text-slate-500 font-medium">Interactive Progress Graph will appear here</p>
      </div>
    </div>
  </div>
)

const AssessmentsTab = () => (
  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="grid md:grid-cols-3 gap-6">
      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <h3 className="text-lg font-bold mb-2">Pending Assignments</h3>
        <p className="text-4xl font-black text-orange-500 mt-2">3</p>
        <p className="text-sm text-gray-500 mt-2 font-medium">Due this week</p>
      </div>
      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <h3 className="text-lg font-bold mb-2">Quiz Average</h3>
        <p className="text-4xl font-black text-emerald-500 mt-2">86%</p>
        <p className="text-sm text-gray-500 mt-2 font-medium">Across 12 quizzes</p>
      </div>
      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <h3 className="text-lg font-bold mb-2">Mock Tests</h3>
        <p className="text-4xl font-black text-primary-500 mt-2">2<span className="text-2xl text-gray-300 font-bold">/5</span></p>
        <p className="text-sm text-gray-500 mt-2 font-medium">Completed this month</p>
      </div>
    </div>
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      <h3 className="text-xl font-bold mb-6">Upcoming Assessments</h3>
      <div className="space-y-4">
        {[
          { title: 'React Hooks Deep Dive Quiz', type: 'Quiz', date: 'Tomorrow, 5:00 PM', status: 'Pending' },
          { title: 'Full Stack E-commerce Project', type: 'Assignment', date: 'Friday, 11:59 PM', status: 'In Progress' },
          { title: 'Mid-term Mock Exam', type: 'Mock Test', date: 'Next Monday, 10:00 AM', status: 'Not Started' }
        ].map((item, i) => (
          <div key={i} className="flex flex-col sm:flex-row justify-between sm:items-center p-5 border border-gray-100 rounded-2xl hover:border-primary-100 hover:shadow-md transition cursor-pointer group">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold px-2.5 py-1 bg-primary-50 text-primary-600 rounded-md uppercase tracking-wider">{item.type}</span>
                <span className="text-xs text-gray-500 flex items-center gap-1.5 font-medium"><Calendar className="w-3.5 h-3.5"/> {item.date}</span>
              </div>
              <h4 className="font-semibold text-gray-900 text-[15px] group-hover:text-primary-600 transition-colors">{item.title}</h4>
            </div>
            <button className="mt-4 sm:mt-0 px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-primary-600 transition shadow-sm">
              Start Now
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
)

const ResourcesTab = () => (
  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="flex gap-6 border-b border-gray-200">
      <button className="pb-3 border-b-2 border-primary-500 text-primary-600 font-bold">Study Materials</button>
      <button className="pb-3 text-gray-500 font-medium hover:text-gray-800 transition-colors">My Notes</button>
      <button className="pb-3 text-gray-500 font-medium hover:text-gray-800 transition-colors">Bookmarks</button>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { title: 'React Cheatsheet 2024', type: 'PDF Document', size: '2.4 MB' },
        { title: 'System Design Interview Prep', type: 'Video Lesson', size: '145 MB' },
        { title: 'Machine Learning Basics', type: 'Text Document', size: '1.2 MB' },
        { title: 'Tailwind UI Components', type: 'External Link', size: 'Web' },
      ].map((res, i) => (
        <div key={i} className="rounded-3xl border border-gray-100 p-6 hover:shadow-xl hover:shadow-primary-500/5 transition-all duration-300 group bg-white hover:-translate-y-1">
          <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
            <FileText className="w-6 h-6" />
          </div>
          <h4 className="font-bold text-gray-900 mb-1.5 line-clamp-1 group-hover:text-primary-600 transition-colors">{res.title}</h4>
          <p className="text-xs text-gray-500 mb-5 font-medium">{res.type} • {res.size}</p>
          <div className="flex justify-between items-center pt-4 border-t border-gray-50">
            <button className="text-sm font-bold text-primary-600 hover:text-primary-700">View Resource</button>
            <button className="p-2 text-gray-400 hover:bg-slate-100 hover:text-slate-700 rounded-full transition-colors"><Download className="w-4 h-4"/></button>
          </div>
        </div>
      ))}
    </div>
  </div>
)

const AchievementsTab = () => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-slate-900/10">
      <div>
        <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-bold tracking-wider mb-4 border border-white/10">LEADERBOARD</span>
        <h2 className="text-3xl sm:text-4xl font-black mb-2">Global Rank: #4,291</h2>
        <p className="text-slate-300 font-medium">Top 5% of all learners on Learna Academy</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-center p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
          <div className="w-16 h-16 rounded-full bg-yellow-500/20 text-yellow-400 flex items-center justify-center border border-yellow-500/50 mb-3 mx-auto shadow-lg shadow-yellow-500/20">
            <Trophy className="w-8 h-8" />
          </div>
          <span className="text-sm font-bold uppercase tracking-widest text-yellow-400">Master</span>
        </div>
      </div>
    </div>
    
    <div>
      <h3 className="text-xl font-bold mb-6 text-slate-900">Badges & Certificates</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { title: 'React Master', icon: Star, color: 'text-sky-500', bg: 'bg-sky-50', border: 'border-sky-100' },
          { title: '7-Day Streak', icon: Flame, color: 'text-orange-500', bg: 'bg-orange-50', border: 'border-orange-100' },
          { title: 'Top Scorer', icon: Target, color: 'text-emerald-500', bg: 'bg-emerald-50', border: 'border-emerald-100' },
          { title: 'Course Alumni', icon: GraduationCap, color: 'text-indigo-500', bg: 'bg-indigo-50', border: 'border-indigo-100' },
        ].map((badge, i) => (
          <div key={i} className={`rounded-3xl border ${badge.border} ${badge.bg} p-6 text-center shadow-sm hover:shadow-md transition-shadow cursor-default`}>
            <div className={`w-14 h-14 mx-auto rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4`}>
              <badge.icon className={`w-7 h-7 ${badge.color}`} />
            </div>
            <h4 className="font-bold text-gray-900 text-sm mb-1">{badge.title}</h4>
            <p className="text-[11px] text-gray-500 font-medium uppercase tracking-wider">Earned</p>
          </div>
        ))}
      </div>
    </div>
  </div>
)

const CareerTab = () => (
  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="grid md:grid-cols-2 gap-6">
      <div className="rounded-3xl bg-gradient-to-br from-primary-500 to-indigo-600 p-8 text-white relative overflow-hidden group shadow-lg shadow-primary-500/20 flex flex-col justify-center">
        <Briefcase className="absolute -right-6 -bottom-6 w-48 h-48 opacity-10 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500"/>
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-3">Resume Builder</h3>
          <p className="text-primary-100 mb-8 max-w-[280px] leading-relaxed">Create an ATS-friendly, professional resume automatically using your Learna profile and projects.</p>
          <button className="px-6 py-3 bg-white text-primary-600 font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all w-fit">Create Resume</button>
        </div>
      </div>
      <div className="rounded-3xl bg-white border border-gray-100 shadow-sm p-8">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-slate-900">Career Profile</h3>
          <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-xs font-bold border border-emerald-100">85% Complete</span>
        </div>
        <p className="text-sm text-gray-500 mb-6">Complete your profile to unlock premium job recommendations.</p>
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-sm font-medium text-slate-700"><CheckCheck className="w-5 h-5 text-emerald-500"/> Personal details added</div>
          <div className="flex items-center gap-3 text-sm font-medium text-slate-700"><CheckCheck className="w-5 h-5 text-emerald-500"/> Education verified</div>
          <div className="flex items-center gap-3 text-sm font-medium text-slate-700"><CheckCheck className="w-5 h-5 text-emerald-500"/> 3+ Projects uploaded</div>
          <div className="flex items-center gap-3 text-sm font-medium text-slate-400 bg-slate-50 p-3 rounded-xl border border-slate-100"><X className="w-4 h-4"/> Mock interview pending (Action required)</div>
        </div>
      </div>
    </div>
    <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-slate-900">Recommended Internships & Jobs</h3>
        <button className="text-sm font-bold text-primary-600 hover:text-primary-700">View all matches</button>
      </div>
      <div className="space-y-4">
        {[
          { role: 'Frontend Developer Intern', company: 'TechNova', location: 'Remote', stipend: '₹15,000/mo' },
          { role: 'Junior React Engineer', company: 'BuildFast', location: 'Bangalore', stipend: '₹8-12 LPA' },
        ].map((job, i) => (
          <div key={i} className="flex flex-col sm:flex-row justify-between sm:items-center p-5 border border-gray-100 rounded-2xl hover:border-primary-200 hover:shadow-md transition bg-slate-50/50">
            <div className="flex gap-4 items-center mb-4 sm:mb-0">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center font-black text-xl text-primary-500">{job.company[0]}</div>
              <div>
                <h4 className="font-bold text-gray-900 text-[15px]">{job.role}</h4>
                <p className="text-sm text-gray-500 font-medium">{job.company} • {job.location}</p>
              </div>
            </div>
            <div className="text-left sm:text-right flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-center w-full sm:w-auto">
              <p className="text-sm font-bold text-emerald-600 sm:mb-2">{job.stipend}</p>
              <button className="px-5 py-2 bg-primary-50 text-primary-600 text-sm font-bold rounded-full hover:bg-primary-600 hover:text-white transition-colors border border-primary-100 hover:border-primary-600 shadow-sm">Apply Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

const AITutorTab = () => (
  <div className="rounded-[2rem] bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden h-[calc(100vh-16rem)] min-h-[450px] max-h-[650px] flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500 transition-colors">
    <div className="bg-slate-900 p-5 text-white flex items-center gap-4">
      <div className="w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center shadow-inner"><Bot className="w-6 h-6 text-primary-300"/></div>
      <div>
        <h3 className="font-bold text-lg">Learna AI Tutor</h3>
        <p className="text-xs text-slate-300 font-medium">Ask me anything about your enrolled courses</p>
      </div>
    </div>
    <div className="flex-1 bg-slate-50 p-6 flex flex-col gap-4 overflow-y-auto">
      <div className="self-start max-w-[85%] sm:max-w-[70%] bg-white p-4 rounded-2xl rounded-tl-sm shadow-sm border border-gray-100">
        <p className="text-sm text-gray-700 leading-relaxed">Hello Alex! 👋 I noticed you&apos;re learning React. Do you want to review the `useEffect` hook concepts today, or start the new module on State Management?</p>
      </div>
      <div className="self-end max-w-[85%] sm:max-w-[70%] bg-primary-600 text-white p-4 rounded-2xl rounded-tr-sm shadow-sm">
        <p className="text-sm leading-relaxed">Let&apos;s review useEffect first. I&apos;m a bit confused about the dependency array.</p>
      </div>
      <div className="self-start max-w-[85%] sm:max-w-[70%] bg-white p-4 rounded-2xl rounded-tl-sm shadow-sm border border-gray-100">
        <p className="text-sm text-gray-700 mb-3 leading-relaxed">Sure thing! The dependency array controls exactly when your effect runs. Here is a quick breakdown:</p>
        <ul className="text-sm text-gray-700 space-y-2">
          <li className="flex gap-2 items-start"><span className="font-mono text-xs bg-slate-100 px-1 py-0.5 rounded text-primary-600 mt-0.5">[]</span> <span>Runs only once on mount.</span></li>
          <li className="flex gap-2 items-start"><span className="font-mono text-xs bg-slate-100 px-1 py-0.5 rounded text-primary-600 mt-0.5">[var]</span> <span>Runs whenever `var` changes.</span></li>
          <li className="flex gap-2 items-start"><span className="font-mono text-xs bg-slate-100 px-1 py-0.5 rounded text-primary-600 mt-0.5">none</span> <span>Runs on every single render (usually avoid this!).</span></li>
        </ul>
      </div>
    </div>
    <div className="p-4 sm:p-5 bg-white border-t border-gray-100 flex gap-3">
      <input type="text" placeholder="Type your doubt here..." className="flex-1 bg-slate-50 border border-gray-200 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all" />
      <button className="w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center hover:bg-primary-600 transition shadow-md hover:shadow-lg"><Sparkles className="w-5 h-5"/></button>
    </div>
  </div>
)

const CommunityTab = () => (
  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="flex flex-col sm:flex-row justify-between sm:items-center bg-white p-4 rounded-2xl shadow-sm border border-gray-100 gap-4">
      <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
        <button className="px-5 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-bold whitespace-nowrap">General Discussion</button>
        <button className="px-5 py-2 text-gray-500 hover:bg-gray-50 rounded-full text-sm font-medium transition-colors whitespace-nowrap">Study Groups</button>
        <button className="px-5 py-2 text-gray-500 hover:bg-gray-50 rounded-full text-sm font-medium transition-colors whitespace-nowrap">Project Showcases</button>
      </div>
      <button className="px-6 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-full shadow-md hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0">+ New Post</button>
    </div>
    <div className="space-y-4">
      {[1,2,3].map(i => (
        <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:border-primary-100 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 flex items-center justify-center text-white font-bold shadow-sm">U{i}</div>
            <div>
              <p className="font-bold text-gray-900 text-sm">Learner {i}</p>
              <p className="text-xs text-gray-500 font-medium">2 hours ago in React Masters Group</p>
            </div>
          </div>
          <h4 className="font-bold text-lg mb-2 text-slate-900">How to optimize rendering in large lists?</h4>
          <p className="text-sm text-gray-600 mb-5 leading-relaxed">I am building an e-commerce dashboard and rendering 1000+ items is causing lag. Any suggestions on virtual lists or pagination libraries that are easy to integrate?</p>
          <div className="flex gap-6 border-t border-gray-100 pt-4">
            <button className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-primary-600 transition-colors"><Bot className="w-4 h-4"/> 12 Replies</button>
            <button className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-rose-500 transition-colors"><HeartPulse className="w-4 h-4"/> 24 Likes</button>
            <button className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-sky-500 transition-colors ml-auto"><Share2 className="w-4 h-4"/> Share</button>
          </div>
        </div>
      ))}
    </div>
  </div>
)

const SettingsTab = () => (
  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="grid md:grid-cols-2 gap-6">
      <div className="rounded-3xl bg-white p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold flex items-center gap-2 mb-6"><CreditCard className="w-5 h-5 text-primary-500"/> Subscription Management</h3>
        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 mb-5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-primary-500/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="flex justify-between items-center mb-2 relative z-10">
            <span className="font-bold text-gray-900 text-lg">Pro Learner Plan</span>
            <span className="px-2.5 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-black tracking-wider rounded-md uppercase">ACTIVE</span>
          </div>
          <p className="text-sm text-gray-500 font-medium relative z-10">Renews on Oct 24, 2024</p>
        </div>
        <div className="flex gap-3">
          <button className="flex-1 py-2.5 bg-white border border-gray-200 text-gray-700 text-sm font-bold rounded-xl hover:bg-gray-50 transition-colors shadow-sm">Manage</button>
          <button className="flex-1 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-slate-800 transition-colors shadow-sm">Upgrade Plan</button>
        </div>
      </div>

      <div className="rounded-3xl bg-white p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold flex items-center gap-2 mb-6"><Shield className="w-5 h-5 text-primary-500"/> Security & Privacy</h3>
        <div className="space-y-5">
          <div className="flex justify-between items-center p-3 border border-slate-50 rounded-xl hover:bg-slate-50 transition-colors">
            <div>
              <p className="font-bold text-sm text-gray-900">Two-Factor Auth</p>
              <p className="text-xs text-gray-500 font-medium mt-0.5">Extra layer of security</p>
            </div>
            <button className="w-10 h-6 bg-emerald-500 rounded-full relative shadow-inner"><span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></span></button>
          </div>
          <div className="flex justify-between items-center p-3 border border-slate-50 rounded-xl hover:bg-slate-50 transition-colors">
            <div>
              <p className="font-bold text-sm text-gray-900">Public Profile</p>
              <p className="text-xs text-gray-500 font-medium mt-0.5">Show achievements</p>
            </div>
            <button className="w-10 h-6 bg-slate-200 rounded-full relative shadow-inner"><span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></span></button>
          </div>
          <button className="text-sm text-primary-600 font-bold flex items-center gap-1.5 mt-2 px-3 py-2 hover:bg-primary-50 rounded-lg transition-colors"><Lock className="w-4 h-4"/> Change Password</button>
        </div>
      </div>

      <div className="rounded-3xl bg-white p-6 shadow-sm border border-gray-100 md:col-span-2">
        <h3 className="text-lg font-bold flex items-center gap-2 mb-6"><BellRing className="w-5 h-5 text-primary-500"/> Notification Preferences</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {['Live Class Reminders', 'Assignment Deadlines', 'Community Mentions', 'New Course Alerts', 'Marketing Emails', 'Weekly Progress'].map((item, i) => (
            <label key={i} className="flex items-center gap-3 p-4 border border-gray-100 rounded-xl cursor-pointer hover:border-primary-200 hover:bg-slate-50 transition-all">
              <input type="checkbox" defaultChecked={i < 4} className="w-4 h-4 text-primary-600 rounded border-gray-300 focus:ring-primary-500" />
              <span className="text-sm text-gray-700 font-bold">{item}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default function DashboardContent() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [isMobileTabMenuOpen, setIsMobileTabMenuOpen] = useState(false)

  const getActiveTabDetails = () => {
    for (const group of sidebarGroups) {
      const item = group.items.find((i) => i.id === activeTab)
      if (item) return item
    }
    return { icon: LayoutDashboard, label: 'Dashboard' }
  }
  const activeTabInfo = getActiveTabDetails()
  const ActiveIcon = activeTabInfo.icon

  const renderTabContent = () => {
    switch (activeTab) {
      case 'courses':
        return <MyCourses />
      case 'live classes':
        return <UpcomingClasses />
      case 'achievements': return <AchievementsTab />
      case 'profile': return <ProfileTab />
      case 'analytics': return <AnalyticsTab />
      case 'assessments': return <AssessmentsTab />
      case 'resources': return <ResourcesTab />
      case 'career': return <CareerTab />
      case 'ai tutor': return <AITutorTab />
      case 'community': return <CommunityTab />
      case 'settings': return <SettingsTab />
      case 'doubt solver': // fallback for old tab
        return (
          <div className="space-y-6">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Doubt Solver</h3>
              <p className="text-gray-600 mb-4">
                Ask questions anytime and get help from educators within the next 30 minutes.
              </p>
              <button className="inline-flex items-center justify-center rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-600">
                Submit a question
              </button>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h4 className="text-lg font-semibold mb-3">Recent solver requests</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="rounded-2xl border border-gray-200 p-4">
                  <p className="font-semibold">Need help with React hooks</p>
                  <p className="text-sm">Expected reply in 12 minutes</p>
                </li>
                <li className="rounded-2xl border border-gray-200 p-4">
                  <p className="font-semibold">Clarify machine learning loss functions</p>
                  <p className="text-sm">Reply sent 10 minutes ago</p>
                </li>
              </ul>
            </div>
          </div>
        )
      default:
        return (
          <div className="space-y-8">
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="text-sm text-gray-500">Current course progress</p>
                <h3 className="mt-3 text-3xl font-semibold">68%</h3>
                <div className="mt-4 h-2 rounded-full bg-gray-200 overflow-hidden">
                  <div className="h-full w-2/3 rounded-full bg-primary-500" />
                </div>
                <p className="mt-3 text-sm text-gray-500">Keep going — just 4 lessons left to complete the current module.</p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="text-sm text-gray-500">Weekly progress</p>
                <h3 className="mt-3 text-3xl font-semibold">18h</h3>
                <p className="mt-3 text-sm text-gray-500">of 20h study goal completed</p>
                <div className="mt-4 rounded-3xl border border-primary-100 bg-primary-50 px-4 py-3 text-sm text-primary-700">
                Only 2 hours left to hit this week&apos;s target.
                </div>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="text-sm text-gray-500">Upcoming session</p>
                <h3 className="mt-3 text-2xl font-semibold">React State Management</h3>
                <p className="mt-2 text-sm text-gray-600">June 10 • 5:00 PM</p>
                <button className="mt-5 inline-flex items-center justify-center rounded-full bg-primary-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-600">
                  Add reminder
                </button>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold">Quick Actions</h3>
                  <p className="text-sm text-gray-500">Jump straight into the tasks that matter most.</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {quickActions.map((action) => {
                    const Icon = action.icon
                    return (
                      <button
                        key={action.label}
                        className={`${action.color} inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95`}
                      >
                        <Icon className="w-4 h-4" />
                        {action.label}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>

            <DashboardStats />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <MyCourses />
              <ProgressTracking />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <RecentActivity />
              <UpcomingClasses />
            </div>
          </div>
        )
    }
  }

  return (
    <div className="pt-20 pb-10 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 min-h-screen">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-8">
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-[300px] shrink-0"
          >
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm p-4 sm:p-5 lg:sticky lg:top-24 lg:max-h-[calc(100vh-120px)] overflow-y-auto scrollbar-hide transition-colors">
              <div className="text-center mb-6 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary-500 to-secondary rounded-full flex items-center justify-center mb-4 overflow-hidden shadow-sm">
                  <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&auto=format&fit=crop" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-xl text-slate-900 dark:text-white">Alex Johnson</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-1">Student • Pro Plan</p>
                <div className="mt-3 inline-flex items-center gap-1.5 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 px-3 py-1 rounded-full text-xs font-bold">
                  <Flame className="w-4 h-4" />
                  <span>30 Day Streak!</span>
                </div>
              </div>

              {/* Mobile Tab Menu Toggle */}
              <button
                onClick={() => setIsMobileTabMenuOpen(!isMobileTabMenuOpen)}
                className="lg:hidden w-full flex items-center justify-between px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-xl font-bold hover:bg-slate-100 dark:hover:bg-slate-700/80 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <ActiveIcon className="w-5 h-5 text-primary-500" />
                  <span className="capitalize">{activeTabInfo.label}</span>
                </div>
                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isMobileTabMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              <nav className={`space-y-6 pt-4 lg:pt-0 ${isMobileTabMenuOpen ? 'block' : 'hidden'} lg:block`}>
                {sidebarGroups.map((group) => (
                  <div key={group.title}>
                    <p className="px-4 text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">{group.title}</p>
                    <div className="space-y-1">
                      {group.items.map((item) => (
                        <button
                          key={item.label}
                          onClick={() => setActiveTab(item.id)}
                          className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all font-medium ${
                            activeTab === item.id
                              ? 'bg-primary-50 text-primary-600 shadow-sm border border-primary-100/50'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                          }`}
                        >
                          <item.icon className={`w-5 h-5 ${activeTab === item.id ? 'text-primary-500' : 'text-gray-400'}`} />
                          <span className="text-sm">{item.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </nav>
            </div>
          </motion.aside>

          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1"
          >
            <div className="rounded-3xl bg-white dark:bg-slate-900 p-6 shadow-sm mb-8 border border-slate-100 dark:border-slate-800 transition-colors">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-500 mb-1">{activeTab.replace('-', ' ')}</p>
                  <h1 className="text-3xl font-black text-slate-900 dark:text-white capitalize">{activeTab === 'dashboard' ? 'Learning Snapshot' : activeTab.replace('-', ' ')}</h1>
                </div>
                <div className="rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-2 text-xs font-bold text-slate-500 dark:text-slate-400">
                  Last updated 2 minutes ago
                </div>
              </div>
            </div>
            {renderTabContent()}
          </motion.main>
        </div>
      </div>
    </div>
  )
}
