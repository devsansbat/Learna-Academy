/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Search, Menu, X, Sun, Moon, User, ShoppingCart, Bell, CheckCheck, Calendar, Award, Info, MessageSquare, Send, Sparkles, Trash2, Maximize2, Minimize2, Paperclip, Smile, Mail, Bot, ChevronRight, LayoutDashboard, Settings, LogOut, Flame, ChevronDown, Code, Server, Layout, Globe, Database, Cpu, BarChart, PenTool, Palette } from 'lucide-react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [cartCount, setCartCount] = useState(0)
  const [showNotifications, setShowNotifications] = useState(false)
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null)
  const [expandedMobileSubmenu, setExpandedMobileSubmenu] = useState<string | null>(null)
  const [isDesktopMenuHovered, setIsDesktopMenuHovered] = useState(false)
  const [activeDesktopSubmenu, setActiveDesktopSubmenu] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [chatInput, setChatInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [chatStep, setChatStep] = useState<'form' | 'chat'>('form')
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [hasStartedChat, setHasStartedChat] = useState(false)
  const [messages, setMessages] = useState<{id: number, text: string, sender: 'user'|'bot', time: string}>([])
  const quickTopics = ['Course Info', 'Pricing', 'Support']
  
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'schedule',
      title: 'Live class scheduled',
      message: 'Your React Mastery class starts in 10 minutes.',
      time: '2 mins ago',
      unread: true,
    },
    {
      id: 2,
      type: 'achievement',
      title: 'Quiz result published',
      message: 'You scored 92% in JavaScript Basics. Outstanding performance!',
      time: '2 hours ago',
      unread: true,
    },
    {
      id: 3,
      type: 'alert',
      title: 'System maintenance',
      message: 'Platform will be down for 15 mins at 2 AM EST for upgrades.',
      time: '1 day ago',
      unread: false,
    },
  ])
  const unreadCount = notifications.filter((item) => item.unread).length
  const { theme, setTheme, resolvedTheme } = useTheme()

  const notificationRef = useRef<HTMLDivElement>(null)
  const profileRef = useRef<HTMLDivElement>(null)

  const searchItems = [
    'React Basics',
    'JavaScript Mastery',
    'UI/UX Design',
    'Data Science Bootcamp',
    'AI & Machine Learning',
    'Python Programming',
    'Digital Marketing',
    'Career Guidance',
  ]

  const filteredSuggestions = searchQuery.trim()
    ? searchItems.filter((item) => item.toLowerCase().includes(searchQuery.toLowerCase()))
    : []

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Set initial bot message on mount to avoid hydration mismatch
  useEffect(() => {
    const savedChat = localStorage.getItem('learna-chat-state')
    if (savedChat) {
      try {
        const parsed = JSON.parse(savedChat)
        if (parsed.hasStartedChat) {
          setHasStartedChat(true)
          setChatStep('chat')
          setUserName(parsed.userName || '')
          setUserEmail(parsed.userEmail || '')
          if (parsed.messages && parsed.messages.length > 0) {
            setMessages(parsed.messages)
            return
          }
        }
      } catch (e) {
        console.error("Failed to parse chat state")
      }
    }
    setMessages([
      { id: 1, text: '👋 Hi there! Need help clearing your doubts or finding the right course? Let me know!', sender: 'bot', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
    ])
  }, [])

  // Save chat state to local storage to make it persistent across page loads
  useEffect(() => {
    if (hasStartedChat) {
      localStorage.setItem('learna-chat-state', JSON.stringify({ hasStartedChat, userName, userEmail, messages }))
    }
  }, [messages, hasStartedChat, userName, userEmail])

  useEffect(() => {
    const updateCartCount = () => {
      if (typeof window === 'undefined') return
      const stored = window.localStorage.getItem('learna-cart')
      if (!stored) {
        setCartCount(0)
        return
      }
      try {
        const parsed = JSON.parse(stored)
        setCartCount(Array.isArray(parsed) ? parsed.length : 0)
      } catch {
        setCartCount(0)
      }
    }

    updateCartCount()

    window.addEventListener('storage', updateCartCount)
    window.addEventListener('learna-cart-update', updateCartCount)

    return () => {
      window.removeEventListener('storage', updateCartCount)
      window.removeEventListener('learna-cart-update', updateCartCount)
    }
  }, [])

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

    setMessages(prev => [...prev, { id: Date.now(), text, sender: 'user', time: currentTime }])
    setChatInput('')
    setIsTyping(true)

    setTimeout(() => {
      let botReply = "I'm a demo bot! I can't really understand you yet, but our support team will be with you shortly."
      const lowerText = text.toLowerCase()
      if (lowerText.includes('course')) botReply = "We offer a wide range of courses including React, Node.js, and Data Science. You can check them out in the Courses section!"
      else if (lowerText.includes('price') || lowerText.includes('pricing')) botReply = "Our courses start from as low as $49. We also offer subscription plans for unlimited access."
      else if (lowerText.includes('support')) botReply = "Our support team is available 24/7. You can also reach us at support@learna.com."

      setMessages(prev => [...prev, { id: Date.now() + 1, text: botReply, sender: 'bot', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }])
      setIsTyping(false)
    }, 1500)
  }

  const handleStartChat = (e: React.FormEvent) => {
    e.preventDefault()
    if (!userName.trim() || !userEmail.trim()) return
    setChatStep('chat')
    setHasStartedChat(true)
    if (messages.length <= 1) {
      setMessages([
        { id: Date.now(), text: `👋 Hi ${userName}! Need help clearing your doubts or finding the right course? Let me know!`, sender: 'bot', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
      ])
    }
  }

  const handleClearChat = () => {
    setMessages([{ 
      id: Date.now(), 
      text: '✨ Chat cleared! How can I help you today?', 
      sender: 'bot',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }])
    localStorage.removeItem('learna-chat-state')
    setHasStartedChat(false)
    setChatStep('form')
    setUserName('')
    setUserEmail('')
  }

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setShowNotifications(false)
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setShowProfileMenu(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const markAllAsRead = () => {
    setNotifications((current) => current.map((item) => ({ ...item, unread: false })))
  }

  const markAsRead = (id: number) => {
    setNotifications((current) =>
      current.map((item) => (item.id === id ? { ...item, unread: false } : item))
    )
  }

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'schedule': return <Calendar className="h-3.5 w-3.5 text-sky-500" />
      case 'achievement': return <Award className="h-3.5 w-3.5 text-amber-500" />
      case 'alert': return <Info className="h-3.5 w-3.5 text-rose-500" />
      default: return <Bell className="h-3.5 w-3.5 text-primary-500" />
    }
  }

  const getNotificationBg = (type: string) => {
    switch (type) {
      case 'schedule': return 'bg-sky-100/50'
      case 'achievement': return 'bg-amber-100/50'
      case 'alert': return 'bg-rose-100/50'
      default: return 'bg-primary-100/50'
    }
  }

  const navLinks = [
    { name: 'Home', href: '/' },
    { 
      name: 'All Courses', 
      dropdown: [
        {
          title: 'Web Development',
          subItems: [
            { title: 'React JS Mastery', href: '/courses/react', icon: Code },
            { title: 'Full Stack Node.js', href: '/courses/node', icon: Server },
            { title: 'Frontend Bootcamp', href: '/courses/frontend', icon: Layout },
            { title: 'Next.js Advanced', href: '/courses/nextjs', icon: Globe }
          ]
        },
        {
          title: 'Data Science',
          subItems: [
            { title: 'Python for Data', href: '/courses/python', icon: Database },
            { title: 'Machine Learning A-Z', href: '/courses/ml', icon: Cpu },
            { title: 'Deep Learning Basics', href: '/courses/dl', icon: BarChart }
          ]
        },
        {
          title: 'Design',
          subItems: [
            { title: 'UI/UX Masterclass', href: '/courses/ui-ux', icon: PenTool },
            { title: 'Figma Advanced', href: '/courses/figma', icon: Layout },
            { title: 'Graphic Design', href: '/courses/graphic-design', icon: Palette }
          ]
        }
      ]
    },
    { name: 'Live Classes', href: '/live-classes' },
    { name: 'Test Series', href: '/test-series' },
    { name: 'Doubt Solving', href: '/doubt-solving' },
  ]

  return (
    <>
      <nav aria-label="Main Navigation" className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'glassmorphism shadow-lg' : 'bg-white/95 backdrop-blur-sm'
        }`}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-primary-500 to-secondary bg-clip-text text-transparent">
                Learna Academy
              </span>
            </Link>

            {/* Search Bar */}
            <div className="hidden lg:flex items-center flex-1 max-w-lg mx-4 lg:mx-8">
              <div className="relative w-full group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="text-slate-400 dark:text-slate-500 w-4 h-4 group-focus-within:text-primary-500 transition-colors" />
                </div>
                <input
                  type="text"
                  placeholder="Search for courses, skills, or mentors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-10 py-2.5 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-100/70 dark:bg-slate-800/70 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:bg-white dark:focus:bg-slate-900 focus:border-primary-500 focus:ring-[3px] focus:ring-primary-500/20 transition-all duration-300 outline-none text-sm font-medium shadow-sm hover:bg-white dark:hover:bg-slate-800"
                />
                
                <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
                  <AnimatePresence>
                    {searchQuery && (
                      <motion.button 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        onClick={() => setSearchQuery('')} 
                        className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                      >
                        <X className="w-3.5 h-3.5" />
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>

                <AnimatePresence>
                  {searchQuery.trim() && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute left-0 right-0 mt-3 overflow-hidden rounded-[1.25rem] border border-slate-200/80 dark:border-slate-700/80 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-2xl z-50 text-left text-sm"
                    >
                      {filteredSuggestions.length > 0 ? (
                        <div className="p-2">
                          <div className="px-3 pt-2 pb-1.5 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Top Results</div>
                          {filteredSuggestions.slice(0, 5).map((item) => (
                            <button key={item} type="button" onClick={() => setSearchQuery(item)} className="w-full flex items-center gap-3 px-3 py-2.5 text-left rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200 group/item">
                              <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover/item:bg-primary-50 dark:group-hover/item:bg-primary-500/20 transition-colors">
                                <Search className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 group-hover/item:text-primary-500 transition-colors" />
                              </div>
                              <span className="font-medium text-slate-700 dark:text-slate-300 group-hover/item:text-primary-600 dark:group-hover/item:text-primary-400 transition-colors">{item}</span>
                            </button>
                          ))}
                          <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                            <button className="w-full px-4 py-2.5 rounded-xl flex items-center justify-center gap-2 text-[13px] font-bold text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-500/10 transition-colors group/btn">
                              See all results for "{searchQuery}"
                              <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="px-4 py-10 text-center flex flex-col items-center">
                          <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mb-3">
                            <Search className="w-5 h-5 text-slate-400" />
                          </div>
                          <p className="font-semibold text-slate-900 dark:text-white">No results found</p>
                          <p className="text-xs text-slate-500 mt-1">Try checking for typos or using different keywords</p>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          {/* Right Area */}
          <div className="flex items-center gap-1.5 sm:gap-4">
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-3 text-sm">
              {navLinks.map((link) => (
                link.dropdown ? (
                  <div 
                    key={link.name} 
                    className="relative px-1"
                    onMouseEnter={() => setIsDesktopMenuHovered(true)}
                    onMouseLeave={() => { setIsDesktopMenuHovered(false); setActiveDesktopSubmenu(null); }}
                  >
                    <button className={`flex items-center gap-1 hover:text-primary-500 transition-colors font-medium py-2 ${isDesktopMenuHovered ? 'text-primary-500' : 'text-gray-700'}`}>
                      {link.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDesktopMenuHovered ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {isDesktopMenuHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 pt-2 w-64 z-50"
                        >
                          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2">
                            {link.dropdown.map((cat) => (
                              <div 
                                key={cat.title} 
                                className="relative"
                                onMouseEnter={() => setActiveDesktopSubmenu(cat.title)}
                              >
                                <button className={`w-full flex items-center justify-between px-4 py-3 text-sm hover:bg-slate-50 hover:text-primary-600 rounded-xl transition-colors text-left font-semibold ${activeDesktopSubmenu === cat.title ? 'bg-slate-50 text-primary-600' : 'text-slate-700'}`}>
                                  {cat.title}
                                  <ChevronRight className={`w-4 h-4 transition-colors ${activeDesktopSubmenu === cat.title ? 'text-primary-500' : 'text-slate-400'}`} />
                                </button>
                                
                                <AnimatePresence>
                                  {activeDesktopSubmenu === cat.title && (
                                    <motion.div
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      exit={{ opacity: 0, x: -10 }}
                                      transition={{ duration: 0.2 }}
                                      className="absolute top-0 left-full pl-2 w-64 z-50"
                                    >
                                      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2">
                                        {cat.subItems.map((sub) => {
                                          const SubIcon = sub.icon;
                                          return (
                                            <Link key={sub.title} href={sub.href} className="group flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-primary-600 rounded-xl transition-colors">
                                              <SubIcon className="w-4 h-4 text-slate-400 group-hover:text-primary-500 transition-colors" />
                                              {sub.title}
                                            </Link>
                                          )
                                        })}
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href || '#'}
                    className="text-gray-700 hover:text-primary-500 transition-colors font-medium px-2 py-2"
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <Link
                href="/login"
                className="rounded-full bg-primary-500 px-4 py-2 text-white font-medium hover:bg-primary-600 transition-colors text-sm shadow-sm"
              >
                Login / Register
              </Link>
              <button
                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full hover:bg-slate-100 transition-colors"
              >
                {mounted && resolvedTheme === 'dark' ? <Sun className="w-4 h-4 text-slate-300" /> : <Moon className="w-4 h-4 text-slate-700" />}
              </button>
            </div>

            {/* Universal Actions (Mobile & Desktop) */}
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="relative" ref={notificationRef}>
                <button
                  onClick={() => {
                    setShowNotifications((prev) => !prev)
                  }}
                  className="relative p-1 rounded-full hover:bg-slate-100 transition-colors"
                  aria-label="Toggle notifications"
                >
                  <Bell
                    className={`w-4 h-4 ${
                      notifications.some((item) => item.unread)
                        ? 'text-primary-600 animate-pulse'
                        : 'text-gray-700'
                    }`}
                  />
                  {notifications.some((item) => item.unread) && (
                    <span className="absolute -top-1 -right-1 inline-flex h-2.5 w-2.5 rounded-full bg-red-500 shadow-[0_0_0_4px_rgba(248,113,113,0.2)]" />
                  )}
                </button>

                <AnimatePresence>
                  {showNotifications && (
                    <motion.div
                      key="notifications-dropdown"
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute -right-16 top-11 z-50 w-[300px] overflow-hidden rounded-2xl border border-slate-200/70 bg-white/95 shadow-[0_10px_40px_rgb(0,0,0,0.1)] backdrop-blur-xl sm:right-0 sm:w-[320px] max-w-[calc(100vw-2rem)]"
                    >
                      {/* Header */}
                      <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/50 px-3 py-2.5">
                        <div className="flex items-center gap-2">
                          <p className="text-xs font-bold text-slate-800">Notifications</p>
                          {unreadCount > 0 && (
                            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-primary-100 text-[9px] font-bold text-primary-700">
                              {unreadCount}
                            </span>
                          )}
                        </div>
                        {unreadCount > 0 && (
                          <button onClick={(e) => { e.stopPropagation(); markAllAsRead(); }} className="flex items-center gap-1 rounded px-1.5 py-1 text-[9px] font-bold uppercase tracking-wider text-primary-600 transition-colors hover:bg-primary-50" title="Mark all as read">
                            <CheckCheck className="h-3 w-3" /> Read All
                          </button>
                        )}
                      </div>
                      
                      {/* List */}
                      <div className="max-h-[300px] overflow-y-auto bg-white [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-200 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-1">
                        {notifications.length > 0 ? (
                          notifications.map((notification) => (
                            <div
                              key={notification.id}
                              onClick={() => markAsRead(notification.id)}
                              className={`group relative flex cursor-pointer gap-2.5 border-b border-slate-50 p-3 transition-colors hover:bg-slate-50 ${notification.unread ? 'bg-indigo-50/30' : 'bg-transparent'}`}
                            >
                              {/* Icon */}
                              <div className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white shadow-sm ${getNotificationBg(notification.type)}`}>
                                {getNotificationIcon(notification.type)}
                              </div>
                              
                              {/* Content */}
                              <div className="flex flex-1 flex-col pr-2">
                                <div className="flex items-start justify-between gap-2">
                                  <p className={`text-xs leading-snug ${notification.unread ? 'font-bold text-slate-900' : 'font-semibold text-slate-600'}`}>
                                    {notification.title}
                                  </p>
                                  <span className="shrink-0 text-[9px] font-medium text-slate-400">
                                    {notification.time}
                                  </span>
                                </div>
                                <p className="mt-0.5 line-clamp-2 text-[10px] leading-relaxed text-slate-500">
                                  {notification.message}
                                </p>
                              </div>
                              
                              {/* Unread indicator */}
                              {notification.unread && (
                                <div className="absolute left-1.5 top-4">
                                  <div className="h-1.5 w-1.5 rounded-full bg-primary-500 shadow-[0_0_0_2px_rgba(99,102,241,0.15)]"></div>
                                </div>
                              )}
                            </div>
                          ))
                        ) : (
                          <div className="flex flex-col items-center justify-center py-8 text-center">
                            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-slate-50">
                              <Bell className="h-4 w-4 text-slate-300" />
                            </div>
                            <p className="text-[11px] font-semibold text-slate-700">No notifications</p>
                            <p className="mt-0.5 text-[9px] text-slate-500">You&apos;re all caught up!</p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link href="/cart" className="relative p-1" aria-label={`Cart with ${cartCount} items`}>
                <div className="relative">
                  <ShoppingCart className="w-4 h-4 text-gray-700" />
                  {cartCount > 0 && (
                    <span
                      className="absolute -top-1 -right-1 inline-flex h-4 min-w-[16px] items-center justify-center rounded-full bg-primary-500 text-[10px] font-semibold text-white shadow-sm"
                    >
                      {cartCount}
                    </span>
                  )}
                </div>
              </Link>
              
              {/* Advanced Profile Dropdown */}
              <div className="hidden sm:block relative" ref={profileRef}>
                <button
                  onClick={() => {
                    setShowProfileMenu((prev) => !prev)
                    setShowNotifications(false)
                  }}
                  className="relative w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-indigo-600 flex items-center justify-center cursor-pointer ring-2 ring-white hover:ring-primary-100 transition-all shadow-sm"
                >
                  <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&auto=format&fit=crop" alt="Profile" className="w-full h-full rounded-full object-cover" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></span>
                </button>

                <AnimatePresence>
                  {showProfileMenu && (
                    <motion.div
                      key="profile-dropdown"
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute right-0 top-11 z-50 w-[280px] sm:w-[300px] max-w-[calc(100vw-1rem)] overflow-hidden rounded-2xl border border-slate-200/70 bg-white/95 shadow-[0_10px_40px_rgb(0,0,0,0.1)] backdrop-blur-xl"
                    >
                      {/* Header */}
                      <div className="p-4 border-b border-slate-100 bg-gradient-to-br from-slate-50 to-white">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-indigo-600 flex items-center justify-center text-white font-black text-lg shadow-md border-2 border-white overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&auto=format&fit=crop" alt="Profile" className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1 overflow-hidden">
                            <h4 className="text-sm font-bold text-slate-900 truncate">Alex Johnson</h4>
                            <p className="text-[11px] font-medium text-slate-500 truncate">alex.j@example.com</p>
                            <div className="mt-1 inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-indigo-50 text-indigo-600 border border-indigo-100">
                              <Sparkles className="w-2.5 h-2.5" /> Pro Plan
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 divide-x divide-slate-100 border-b border-slate-100 bg-white">
                        <div className="p-3 text-center hover:bg-slate-50 transition-colors cursor-default">
                          <p className="text-lg font-black text-slate-800">12</p>
                          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Enrolled</p>
                        </div>
                        <div className="p-3 text-center hover:bg-slate-50 transition-colors cursor-default">
                          <p className="text-lg font-black text-orange-500 flex items-center justify-center gap-1"><Flame className="w-4 h-4"/> 30</p>
                          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Day Streak</p>
                        </div>
                      </div>

                      {/* Menu Items */}
                      <div className="p-2">
                        <Link href="/student/dashboard" onClick={() => setShowProfileMenu(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-all text-slate-600 hover:text-primary-600 group">
                          <LayoutDashboard className="w-4 h-4 text-slate-400 group-hover:text-primary-500 transition-colors" />
                          <span className="text-sm font-semibold">My Dashboard</span>
                        </Link>
                        <Link href="/profile" onClick={() => setShowProfileMenu(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-all text-slate-600 hover:text-primary-600 group">
                          <User className="w-4 h-4 text-slate-400 group-hover:text-primary-500 transition-colors" />
                          <span className="text-sm font-semibold">My Profile</span>
                        </Link>
                        <Link href="/profile?tab=security" onClick={() => setShowProfileMenu(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-all text-slate-600 hover:text-primary-600 group">
                          <Settings className="w-4 h-4 text-slate-400 group-hover:text-primary-500 transition-colors" />
                          <span className="text-sm font-semibold">Account Settings</span>
                        </Link>
                      </div>

                      {/* Footer */}
                      <div className="p-2 border-t border-slate-100 bg-slate-50/50">
                        <Link href="/login" onClick={() => setShowProfileMenu(false)} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-rose-50 transition-all text-slate-600 hover:text-rose-600 group">
                          <LogOut className="w-4 h-4 text-slate-400 group-hover:text-rose-500 transition-colors" />
                          <span className="text-sm font-semibold">Sign Out</span>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-1.5 -mr-1 rounded-full hover:bg-slate-100 transition-colors text-slate-700"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      </nav>

      {/* Mobile Menu */}
    <AnimatePresence>
      {isMobileMenuOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-slate-900/40 backdrop-blur-sm md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <motion.nav
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-[70] w-[85%] max-w-[320px] bg-white dark:bg-slate-900 shadow-2xl flex flex-col md:hidden"
            aria-label="Mobile Navigation"
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white dark:border-slate-700 shadow-sm shrink-0">
                  <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&auto=format&fit=crop" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col overflow-hidden">
                  <span className="text-sm font-bold text-slate-900 dark:text-white truncate">Alex Johnson</span>
                  <span className="text-[10px] text-primary-600 dark:text-primary-400 font-bold uppercase tracking-wider">Pro Learner</span>
                </div>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 shrink-0 rounded-full bg-white dark:bg-slate-800 shadow-sm text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors" aria-label="Close menu">
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-6">
              {/* Search */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="text-slate-400 dark:text-slate-500 w-4 h-4 group-focus-within:text-primary-500 transition-colors" />
                </div>
                <input 
                  type="text" 
                  placeholder="Search for courses..." 
                  value={searchQuery} 
                  onChange={(e) => setSearchQuery(e.target.value)} 
                  className="w-full pl-11 pr-12 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700/80 bg-slate-100/50 dark:bg-slate-800/50 text-sm focus:outline-none focus:bg-white dark:focus:bg-slate-900 focus:border-primary-500/50 focus:ring-4 focus:ring-primary-500/10 dark:text-white transition-all font-medium placeholder:text-slate-400 shadow-sm" 
                />
                <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
                  <AnimatePresence>
                    {searchQuery && (
                      <motion.button 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        onClick={() => setSearchQuery('')} 
                        className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>
                
                <AnimatePresence>
                  {searchQuery.trim() && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: 'auto' }}
                      exit={{ opacity: 0, y: -10, height: 0 }}
                      className="overflow-hidden mt-3 rounded-[1.25rem] border border-slate-200 dark:border-slate-700 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-xl z-20 text-left text-sm"
                    >
                      {filteredSuggestions.length > 0 ? (
                        <div className="p-2">
                          <div className="px-3 pt-2 pb-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Top Results</div>
                          {filteredSuggestions.slice(0, 5).map((item) => (
                            <button key={item} type="button" onClick={() => { setSearchQuery(item); setIsMobileMenuOpen(false); }} className="w-full flex items-center gap-3 px-3 py-3 text-left rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all group/mitem">
                              <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover/mitem:bg-primary-50 dark:group-hover/mitem:bg-primary-500/20 transition-colors">
                                <Search className="w-3.5 h-3.5 text-slate-400 group-hover/mitem:text-primary-500" />
                              </div>
                              <span className="font-medium text-slate-700 dark:text-slate-300 group-hover/mitem:text-primary-500">{item}</span>
                            </button>
                          ))}
                        </div>
                      ) : (
                        <div className="px-4 py-8 text-center flex flex-col items-center text-slate-500 dark:text-slate-400">
                          <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mb-3">
                            <Search className="w-5 h-5 text-slate-400" />
                          </div>
                          <p className="font-semibold text-slate-900 dark:text-white mb-1">No results found</p>
                          <p className="text-xs">Try different keywords</p>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Profile Actions */}
              <div className="flex flex-col space-y-1">
                <p className="px-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Account</p>
                <Link href="/student/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium text-[15px]">
                  <LayoutDashboard className="w-4 h-4" /> My Dashboard
                </Link>
                <Link href="/profile" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium text-[15px]">
                  <User className="w-4 h-4" /> My Profile
                </Link>
                <Link href="/profile?tab=security" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium text-[15px]">
                  <Settings className="w-4 h-4" /> Settings
                </Link>
              </div>

              {/* Nav Links */}
              <div className="flex flex-col space-y-1">
                <p className="px-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Navigation</p>
                {navLinks.map((link) => (
                  link.dropdown ? (
                    <div key={link.name} className="flex flex-col space-y-1">
                      <button
                        onClick={() => setExpandedMobileMenu(expandedMobileMenu === link.name ? null : link.name)}
                        className="flex items-center justify-between px-4 py-2.5 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-slate-800 transition-colors font-medium text-[15px]"
                      >
                        {link.name}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expandedMobileMenu === link.name ? 'rotate-180 text-primary-500' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {expandedMobileMenu === link.name && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden flex flex-col space-y-1 border-l-2 border-slate-100 dark:border-slate-800 ml-6 pl-2"
                          >
                            {link.dropdown.map(cat => (
                              <div key={cat.title} className="flex flex-col space-y-1">
                                <button
                                  onClick={() => setExpandedMobileSubmenu(expandedMobileSubmenu === cat.title ? null : cat.title)}
                                  className="flex items-center justify-between w-full px-4 py-2 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                                >
                                  {cat.title}
                                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${expandedMobileSubmenu === cat.title ? 'rotate-180 text-primary-500' : ''}`} />
                                </button>
                                <AnimatePresence>
                                  {expandedMobileSubmenu === cat.title && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: 'auto', opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      className="overflow-hidden flex flex-col pl-4"
                                    >
                                      {cat.subItems.map((sub) => {
                                        const SubIcon = sub.icon;
                                        return (
                                          <Link 
                                            key={sub.title} 
                                            href={sub.href || '#'} 
                                            onClick={() => setIsMobileMenuOpen(false)} 
                                            className="group flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50"
                                          >
                                            <SubIcon className="w-4 h-4 shrink-0 text-slate-400 dark:text-slate-500 group-hover:text-primary-500 transition-colors" />
                                            {sub.title}
                                          </Link>
                                        )
                                      })}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={link.name}
                      href={link.href || '#'}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-4 py-2.5 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium text-[15px]"
                    >
                      {link.name}
                    </Link>
                  )
                ))}
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-5">
                <div className="flex items-center justify-between px-4">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Appearance</span>
                  <button
                    onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                    className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
                  >
                    {mounted && resolvedTheme === 'dark' ? <><Sun className="w-4 h-4" /><span className="text-xs font-bold sm:hidden">Light</span></> : <><Moon className="w-4 h-4" /><span className="text-xs font-bold sm:hidden">Dark</span></>}
                  </button>
                </div>
                <Link
                  href="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-rose-50 dark:bg-rose-500/10 px-4 py-3.5 text-[15px] font-bold text-rose-600 dark:text-rose-400 transition hover:bg-rose-100 dark:hover:bg-rose-500/20 shadow-sm"
                >
                  <LogOut className="w-4 h-4" /> Sign Out
                </Link>
              </div>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>

      <div className="fixed bottom-6 right-4 sm:right-6 z-[100] flex flex-col items-end">
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: 'bottom right' }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={`mb-5 flex flex-col overflow-hidden rounded-[2rem] bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] dark:shadow-primary-500/10 border border-slate-200/60 dark:border-slate-700/60 transition-all duration-300 origin-bottom-right ${
                isExpanded ? 'w-[calc(100vw-2rem)] sm:w-[350px] h-[75vh] max-h-[560px]' : 'w-[calc(100vw-2rem)] sm:w-[320px] h-[440px]'
              }`}
            >
              {/* Header */}
              <div className="p-3 sm:p-4 flex justify-between items-center shrink-0 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-indigo-600 flex items-center justify-center text-white shadow-md">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full"></span>
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-sm leading-tight text-slate-900 dark:text-white">Learna AI</h3>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium mt-0">Always here to help</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-full transition-colors active:scale-95"
                    title={isExpanded ? "Minimize" : "Maximize"}
                  >
                    {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
                  </button>
                  {chatStep === 'chat' && (
                    <button 
                      onClick={handleClearChat}
                      className="p-1.5 hover:bg-rose-100 dark:hover:bg-rose-500/20 text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 rounded-full transition-colors active:scale-95"
                      title="Clear Chat"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                  <button 
                    onClick={() => setIsChatOpen(false)}
                    className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-full transition-colors active:scale-95"
                    title="Close"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
              
              {/* Body */}
              <div className="flex-1 bg-white dark:bg-slate-900 relative overflow-hidden flex flex-col">
                <AnimatePresence mode="wait">
                  {chatStep === 'form' ? (
                    <motion.div 
                      key="form"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex-1 p-4 sm:p-5 flex flex-col justify-center overflow-hidden"
                    >
                      <div className="bg-gradient-to-b from-primary-50/80 to-white dark:from-primary-500/10 dark:to-slate-900/50 p-5 rounded-[1.25rem] border border-primary-100/50 dark:border-primary-500/20 mb-5 text-center shadow-sm">
                        <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm border border-slate-100 dark:border-slate-700">
                          <Bot className="w-6 h-6 text-primary-500" />
                        </div>
                        <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1.5">Welcome to Learna! 👋</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed px-1">
                        Let&apos;s get started. Please fill in your details below so we can assist you better.
                        </p>
                      </div>
                      
                      <form onSubmit={handleStartChat} className="space-y-4">
                        <div className="space-y-1.5">
                          <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 ml-1 uppercase tracking-wider">Your Name</label>
                          <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input 
                              type="text" 
                              required
                              value={userName}
                              onChange={(e) => setUserName(e.target.value)}
                              placeholder="e.g. John Doe"
                              className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 dark:text-white rounded-[1rem] pl-10 pr-3 py-2.5 text-[13px] font-medium focus:outline-none focus:bg-white dark:focus:bg-slate-900 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all shadow-sm hover:border-slate-300 dark:hover:border-slate-600"
                            />
                          </div>
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 ml-1 uppercase tracking-wider">Email Address</label>
                          <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input 
                              type="email" 
                              required
                              value={userEmail}
                              onChange={(e) => setUserEmail(e.target.value)}
                              placeholder="you@example.com"
                              className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 dark:text-white rounded-[1rem] pl-10 pr-3 py-2.5 text-[13px] font-medium focus:outline-none focus:bg-white dark:focus:bg-slate-900 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all shadow-sm hover:border-slate-300 dark:hover:border-slate-600"
                            />
                          </div>
                        </div>
                        <button 
                          type="submit"
                          className="w-full bg-gradient-to-r from-slate-900 to-slate-800 dark:from-white dark:to-slate-100 hover:from-slate-800 hover:to-slate-700 dark:hover:from-slate-100 dark:hover:to-slate-200 text-white dark:text-slate-900 rounded-[1rem] py-2.5 px-4 text-[13px] font-bold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group mt-1.5 active:scale-[0.98]"
                        >
                          Start Conversation
                          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform opacity-70" />
                        </button>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="chat"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex-1 flex flex-col h-full"
                    >
                      <div className="flex-1 p-5 flex flex-col gap-4 overflow-hidden">
                        {messages.map((msg) => (
                          <motion.div 
                            layout 
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            key={msg.id} 
                            className={`flex gap-3 w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                          >
                            {msg.sender === 'bot' && (
                              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-indigo-600 flex items-center justify-center shrink-0 mt-0.5 shadow-md text-white">
                                <Sparkles className="w-4 h-4" />
                              </div>
                            )}
                            <div className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'} max-w-[85%]`}>
                              <div className={`px-4 py-3 rounded-[1.25rem] text-[13.5px] leading-relaxed shadow-sm text-left font-medium ${
                                msg.sender === 'bot' 
                                  ? 'bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60 rounded-tl-sm text-slate-800 dark:text-slate-200' 
                                  : 'bg-gradient-to-br from-primary-500 to-indigo-600 text-white rounded-tr-sm'
                              }`}>
                                {msg.text}
                              </div>
                              <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-1.5 px-1 font-semibold">{msg.time}</span>
                            </div>
                          </motion.div>
                        ))}
                        
                        {isTyping && (
                          <motion.div layout initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9 }} className="flex gap-3 w-full justify-start">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-indigo-600 flex items-center justify-center shrink-0 mt-0.5 shadow-md text-white">
                              <Sparkles className="w-4 h-4" />
                            </div>
                            <div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60 px-4 py-3.5 rounded-[1.25rem] rounded-tl-sm shadow-sm self-start flex gap-1.5 items-center h-[42px]">
                              <span className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-400 rounded-full animate-bounce"></span>
                              <span className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                              <span className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                            </div>
                          </motion.div>
                        )}
  
                        {messages.length === 1 && (
                          <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-2 mt-2 ml-11">
                            {quickTopics.map((topic) => (
                              <button 
                                key={topic}
                                onClick={() => handleSendMessage(topic)}
                                className="px-4 py-2 bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 rounded-full text-[12px] font-bold hover:bg-white dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 transition-all shadow-sm active:scale-95 hover:border-primary-200 dark:hover:border-primary-500/30"
                              >
                                {topic}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </div>
                      
                      {/* Input Area */}
                      <div className="p-4 bg-slate-50/50 dark:bg-slate-800/30 shrink-0 border-t border-slate-100 dark:border-slate-800/80">
                        <div className="flex items-center bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700/80 rounded-full pl-4 pr-2 py-2 shadow-sm focus-within:ring-4 focus-within:ring-primary-500/10 focus-within:border-primary-500 focus-within:shadow-md transition-all">
                          <input 
                            type="text" 
                            value={chatInput}
                            onChange={(e) => setChatInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && !isTyping && handleSendMessage(chatInput)}
                            disabled={isTyping}
                            placeholder="Message Learna AI..." 
                            className="flex-1 bg-transparent border-none p-0 text-[14px] font-medium focus:outline-none focus:ring-0 dark:text-white disabled:opacity-50 min-w-0 placeholder:text-slate-400"
                          />
                          <div className="flex items-center gap-1 shrink-0 ml-2">
                            <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors rounded-full hidden sm:block">
                              <Paperclip className="w-4 h-4" />
                            </button>
                            <button 
                              onClick={() => handleSendMessage(chatInput)}
                              disabled={!chatInput.trim() || isTyping}
                              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-primary-500 to-indigo-600 text-white flex items-center justify-center hover:shadow-md hover:shadow-primary-500/30 transition-all shadow-sm disabled:opacity-50 disabled:scale-95 active:scale-90"
                            >
                              <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-[-1px] sm:ml-[-2px]" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Button */}
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="w-11 h-11 sm:w-12 sm:h-12 bg-slate-900 dark:bg-primary-500 rounded-full flex items-center justify-center text-white shadow-[0_10px_30px_rgba(0,0,0,0.2)] dark:shadow-primary-500/30 hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)] transition-all relative z-50 group border border-slate-700 dark:border-primary-400"
        >
          {!isChatOpen && !hasStartedChat && (
            <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5 items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-rose-500 text-white text-[8px] font-bold items-center justify-center border-2 border-white dark:border-slate-900">1</span>
            </span>
          )}
          <AnimatePresence mode="wait">
            {isChatOpen ? (
              <motion.div key="close" initial={{ opacity: 0, rotate: -90, scale: 0.5 }} animate={{ opacity: 1, rotate: 0, scale: 1 }} exit={{ opacity: 0, rotate: 90, scale: 0.5 }} transition={{ duration: 0.2 }}>
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.div>
            ) : (
              <motion.div key="chat" className="relative flex items-center justify-center" initial={{ opacity: 0, rotate: 90, scale: 0.5 }} animate={{ opacity: 1, rotate: 0, scale: 1 }} exit={{ opacity: 0, rotate: -90, scale: 0.5 }} transition={{ duration: 0.2 }}>
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 group-hover:scale-110" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </>
  )
}