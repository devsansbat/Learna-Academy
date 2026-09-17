/* eslint-disable react/no-unescaped-entities */
'use client'
import Image from 'next/image'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search, Menu, X, Sun, Moon, User, ShoppingCart, Bell, CheckCheck, Calendar, Award, Info, MessageSquare, Send, Sparkles, Trash2, Maximize2, Minimize2, Paperclip, Smile, Mail, Bot, ChevronRight, ArrowRight, LayoutDashboard, Settings, LogOut, Flame, ChevronDown, Code, Server, Layout, Globe, Database, Cpu, BarChart, PenTool, Palette, ShieldCheck, Tag, CheckCircle } from 'lucide-react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'

// Mock Database mapping for Cart Panel rendering
const COURSES_DB: Record<number, any> = {
  1: { title: "Arjuna NEET 2.0 2027", price: 4999, originalPrice: 5500, image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop" },
  2: { title: "Arjuna NEET 2027 + Lakshya NEET 2028", price: 8800, originalPrice: 12400, image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=400&fit=crop" },
  3: { title: "Vidyapeeth 11 NEET (Target 2028)", price: 5000, originalPrice: null, image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop" },
  4: { title: "Lakshya JEE 2.0 2025", price: 4200, originalPrice: 5000, image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=400&fit=crop" },
  5: { title: "Vidyapeeth 12 JEE (Target 2025)", price: 8000, originalPrice: null, image: "https://images.unsplash.com/photo-1588591795084-1770cb3be374?w=800&h=400&fit=crop" },
  6: { title: "Udaan Class 10th 2025", price: 2500, originalPrice: 3000, image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=400&fit=crop" }
}

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [cartCount, setCartCount] = useState(0)
  const [cartItems, setCartItems] = useState<number[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null)
  const [expandedMobileSubmenu, setExpandedMobileSubmenu] = useState<string | null>(null)
  const [isDesktopMenuHovered, setIsDesktopMenuHovered] = useState(false)
  const [activeDesktopSubmenu, setActiveDesktopSubmenu] = useState<string | null>(null)
  const [activeDropdownCategory, setActiveDropdownCategory] = useState<string | null>(null)
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
  const [tipAmount, setTipAmount] = useState(0)
  const [checkoutView, setCheckoutView] = useState<'cart' | 'summary'>('cart')
  const [promoStatus, setPromoStatus] = useState<'idle' | 'applied' | 'invalid'>('idle')

  const pathname = usePathname()
  const quickTopics = ['Course Info', 'Pricing', 'Support']

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
  
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

  const allSearchableItems = [
    // From navLinks
    { type: 'Page', title: 'Home', href: '/', icon: LayoutDashboard },
    { type: 'Page', title: 'Live Classes', href: '/live-classes', icon: Calendar },
    { type: 'Page', title: 'Test Series', href: '/test-series', icon: CheckCheck },
    { type: 'Page', title: 'Doubt Solving', href: '/doubt-solving', icon: MessageSquare },
    // From navLinks dropdown
    { type: 'Course', title: 'React JS Mastery', href: '/courses/react', icon: Code },
    { type: 'Course', title: 'Full Stack Node.js', href: '/courses/node', icon: Server },
    { type: 'Course', title: 'Frontend Bootcamp', href: '/courses/frontend', icon: Layout },
    { type: 'Course', title: 'Next.js Advanced', href: '/courses/nextjs', icon: Globe },
    { type: 'Course', title: 'Python for Data', href: '/courses/python', icon: Database },
    { type: 'Course', title: 'Machine Learning A-Z', href: '/courses/ml', icon: Cpu },
    { type: 'Course', title: 'Deep Learning Basics', href: '/courses/dl', icon: BarChart },
    { type: 'Course', title: 'UI/UX Masterclass', href: '/courses/ui-ux', icon: PenTool },
    { type: 'Course', title: 'Figma Advanced', href: '/courses/figma', icon: Layout },
    { type: 'Course', title: 'Graphic Design', href: '/courses/graphic-design', icon: Palette },
    // Mock mentors
    { type: 'Mentor', title: 'John Doe - React Expert', href: '/mentors/john-doe', icon: User },
    { type: 'Mentor', title: 'Jane Smith - AI Specialist', href: '/mentors/jane-smith', icon: User },
  ]

  const filteredSuggestions = searchQuery.trim()
    ? allSearchableItems.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
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
        setCartItems([])
        return
      }
      try {
        const parsed = JSON.parse(stored)
        setCartCount(Array.isArray(parsed) ? parsed.length : 0)
        setCartItems(Array.isArray(parsed) ? parsed : [])
      } catch {
        setCartCount(0)
        setCartItems([])
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

  const removeFromCart = (id: number) => {
    const newCart = cartItems.filter(itemId => itemId !== id)
    window.localStorage.setItem('learna-cart', JSON.stringify(newCart))
    window.dispatchEvent(new Event('learna-cart-update'))
  }

  const clearCart = () => {
    window.localStorage.setItem('learna-cart', JSON.stringify([]))
    window.dispatchEvent(new Event('learna-cart-update'))
  }

  // Reset checkout view when cart is opened/closed
  useEffect(() => {
    if (isCartOpen) setCheckoutView('cart')
  }, [isCartOpen])

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
    switch (type) { // Add Clock, HeartHandshake, Receipt icons
      case 'schedule': return <Calendar className="h-3.5 w-3.5 text-sky-500" />
      case 'achievement': return <Award className="h-3.5 w-3.5 text-amber-500" />
      case 'alert': return <Info className="h-3.5 w-3.5 text-rose-500" />
      default: return <Bell className="h-3.5 w-3.5 text-primary-500" />
    }
  }

  const getNotificationBg = (type: string) => {
    switch (type) { // Add Clock, HeartHandshake, Receipt icons
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
          icon: Code,
          image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=600&fit=crop',
          title: 'Web Development',
          subItems: [
            { title: 'React JS Mastery', href: '/courses/react', icon: Code },
            { title: 'Full Stack Node.js', href: '/courses/node', icon: Server },
            { title: 'Frontend Bootcamp', href: '/courses/frontend', icon: Layout },
            { title: 'Next.js Advanced', href: '/courses/nextjs', icon: Globe }
          ]
        },
        {
          icon: Cpu,
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
          title: 'Data Science',
          subItems: [
            { title: 'Python for Data', href: '/courses/python', icon: Database },
            { title: 'Machine Learning A-Z', href: '/courses/ml', icon: Cpu },
            { title: 'Deep Learning Basics', href: '/courses/dl', icon: BarChart }
          ]
        },
        {
          icon: Palette,
          image: 'https://images.unsplash.com/photo-1522120691812-dcdfb625f397?w=800&h=600&fit=crop',
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

  const DropdownMenu = () => {
    const activeCategory =
      navLinks.find((l) => l.name === 'All Courses')?.dropdown?.find((c) => c.title === activeDropdownCategory) ||
      navLinks.find((l) => l.name === 'All Courses')?.dropdown?.[0]

    return (
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.98 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="absolute top-full mt-3 left-1/2 -translate-x-1/2 z-[70] origin-top"
      >
        <div className="w-auto max-w-[calc(100vw-2rem)] lg:max-w-5xl rounded-[28px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-[0_25px_80px_rgba(15,23,42,0.18)] overflow-hidden">
          <div className="flex">
            {/* Left Panel: Categories */}
            <div className="w-[260px] shrink-0 border-r border-slate-100 dark:border-slate-800/70 bg-slate-50/80 dark:bg-slate-950/40 p-3">
              <div className="mb-3 px-2 pt-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">Explore tracks</p>
              </div>
              <div className="flex flex-col gap-2">
                {navLinks.find(l => l.name === 'All Courses')?.dropdown?.map(category => {
                  const isActive = activeDropdownCategory === category.title
                  const Icon = category.icon

                  return (
                    <button
                      key={category.title}
                      onMouseEnter={() => setActiveDropdownCategory(category.title)}
                      className={`group w-full text-left rounded-2xl border px-3 py-3 transition-all duration-200 ${
                        isActive
                          ? 'border-primary-200 dark:border-primary-500/30 bg-primary-50/80 dark:bg-primary-500/10 shadow-sm'
                          : 'border-transparent bg-transparent hover:border-slate-200 dark:hover:border-slate-700 hover:bg-white dark:hover:bg-slate-800/50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${isActive ? 'bg-primary-500 text-white' : 'bg-slate-200/80 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:text-primary-500'}`}>
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className={`text-sm font-bold ${isActive ? 'text-primary-700 dark:text-primary-300' : 'text-slate-700 dark:text-slate-200'}`}>
                            {category.title}
                          </div>
                          <div className="text-[11px] text-slate-400 dark:text-slate-500">
                            {category.subItems.length} programs
                          </div>
                        </div>
                        <ArrowRight className={`h-4 w-4 transition-transform ${isActive ? 'translate-x-0 text-primary-500' : 'text-slate-300 group-hover:translate-x-0.5 group-hover:text-primary-500'}`} />
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Right Panel: Content */}
            <div className="flex-1 p-5 lg:p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory?.title || 'courses'}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]"
                >
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-500">Popular in {activeCategory?.title}</p>
                        <h3 className="mt-1 text-xl font-black text-slate-900 dark:text-white">Build job-ready skills</h3>
                      </div>
                      <Link
                        href="/courses"
                        onClick={() => setIsDesktopMenuHovered(false)}
                        className="inline-flex items-center gap-1 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-1.5 text-[11px] font-bold text-slate-700 dark:text-slate-200 transition hover:border-primary-200 hover:text-primary-600 dark:hover:text-primary-300"
                      >
                        View all
                        <ChevronRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>

                    <div className="grid gap-2.5 sm:grid-cols-2">
                      {activeCategory?.subItems.map((item) => {
                        const Icon = item.icon
                        return (
                          <Link
                            key={item.title}
                            href={item.href}
                            onClick={() => setIsDesktopMenuHovered(false)}
                            className="group flex items-center justify-between rounded-2xl border border-slate-200/80 dark:border-slate-700/80 bg-slate-50/80 dark:bg-slate-800/60 p-3 transition-all duration-200 hover:border-primary-200 dark:hover:border-primary-500/30 hover:bg-primary-50/60 dark:hover:bg-primary-500/10 hover:shadow-md"
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white dark:bg-slate-900 shadow-sm text-primary-600 dark:text-primary-400">
                                <Icon className="h-4 w-4" />
                              </div>
                              <div className="min-w-0">
                                <p className="truncate text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-primary-600 dark:group-hover:text-primary-300">{item.title}</p>
                                <p className="text-[11px] text-slate-500 dark:text-slate-400">Career-focused learning</p>
                              </div>
                            </div>
                            <ArrowRight className="h-4 w-4 shrink-0 text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-primary-500" />
                          </Link>
                        )
                      })}
                    </div>
                  </div>

                  <div>
                    <div className="mb-3 flex items-center justify-between">
                      <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Spotlight</h3>
                    </div>

                    <Link
                      href="/courses/nextjs"
                      onClick={() => setIsDesktopMenuHovered(false)}
                      className="group block overflow-hidden rounded-[24px] border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:border-primary-200 dark:hover:border-primary-500/30"
                    >
                      <div className="relative h-36 overflow-hidden">
                        <img
                          src={activeCategory?.image || 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=600&fit=crop'}
                          alt={activeCategory?.title || 'Featured course'}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/10 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <span className="inline-flex rounded-full bg-white/15 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                            Featured
                          </span>
                        </div>
                      </div>

                      <div className="p-4">
                        <div className="mb-2 flex items-center justify-between text-slate-400 dark:text-slate-500">
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Mentor-led</span>
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">4.9 ★</span>
                        </div>
                        <h4 className="text-lg font-black text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          Next.js Advanced
                        </h4>
                        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                          Build scalable, production-ready web apps with real-world architecture and deployment patterns.
                        </p>
                        <div className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary-600 dark:text-primary-400">
                          Explore track
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  useEffect(() => {
    if (isDesktopMenuHovered && activeDesktopSubmenu === 'All Courses') {
      const firstCategory = navLinks.find(l => l.name === 'All Courses')?.dropdown?.[0]?.title;
      if (firstCategory) {
        setActiveDropdownCategory(firstCategory);
      }
    }
  }, [isDesktopMenuHovered, activeDesktopSubmenu]);

  return (
    <>
      <nav aria-label="Main Navigation" className={`fixed top-0 w-full z-[80] transition-all duration-300 ${
          isScrolled ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm' : 'bg-white dark:bg-slate-950 border-b border-transparent'
        }`}>
        <div className="container-custom flex items-center justify-between h-14 lg:h-16 gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white">
                Learna Academy
              </span>
            </Link>

            {/* Search Bar */}
            <div className="hidden md:flex items-center flex-1 max-w-sm lg:max-w-lg mx-auto">
              <div className="relative w-full group">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Search className="text-slate-400 dark:text-slate-500 w-4 h-4 group-focus-within:text-primary-500 dark:group-focus-within:text-primary-400 transition-colors" />
                </div>
                <input
                  type="text"
                  placeholder="Search for courses, skills, or mentors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)} 
                  className="w-full pl-10 pr-10 py-2.5 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-100/70 dark:bg-slate-800/70 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:bg-white dark:focus:bg-slate-900 focus:border-primary-500 focus:ring-[3px] focus:ring-primary-500/20 transition-all duration-300 outline-none text-[13px] lg:text-sm font-medium shadow-sm hover:bg-white dark:hover:bg-slate-800"
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
                      className="absolute left-0 right-0 mt-3 overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-700/80 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-2xl z-50 text-left text-sm"
                    >
                      {filteredSuggestions.length > 0 ? (
                        <div className="p-2">
                          <div className="px-3 pt-2 pb-1.5 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Suggestions</div>
                          {filteredSuggestions.slice(0, 5).map((item) => (
                            <Link href={item.href} key={item.title} onClick={() => setSearchQuery('')} className="w-full flex items-center justify-between gap-3 px-3 py-2.5 text-left rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200 group/item">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover/item:bg-primary-50 dark:group-hover/item:bg-primary-500/20 transition-colors">
                                  <item.icon className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover/item:text-primary-500 transition-colors" />
                                </div>
                                <span className="font-medium text-slate-700 dark:text-slate-300 group-hover/item:text-primary-600 dark:group-hover/item:text-primary-400 transition-colors">{item.title}</span>
                              </div>
                              <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md">{item.type}</span>
                            </Link>
                          ))}
                          <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                            <Link href={`/search?q=${encodeURIComponent(searchQuery)}`} onClick={() => setSearchQuery('')}>
                              <button className="w-full px-4 py-2.5 rounded-xl flex items-center justify-center gap-2 text-[13px] font-bold text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-500/10 transition-colors group/btn">
                                See all results for "{searchQuery}"
                                <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                              </button>
                            </Link>
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

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                link.dropdown ? (
                  <div key={link.name} className="relative" onMouseLeave={() => { setIsDesktopMenuHovered(false); setActiveDesktopSubmenu(null); }}>
                    <div className="relative group/main">
                      <button onMouseEnter={() => { setIsDesktopMenuHovered(true); setActiveDesktopSubmenu(link.name); }} className="px-4 py-2 rounded-full text-[13px] font-bold flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors">
                        {link.name}
                        <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover/main:rotate-180" />
                      </button>
                      <AnimatePresence>
                        {isDesktopMenuHovered && activeDesktopSubmenu === link.name && (
                          <DropdownMenu />
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                ) : (
                  <Link href={link.href || '#'} key={link.name}>
                    <span className={`px-4 py-2 rounded-full text-[13px] font-bold transition-colors ${pathname === link.href ? 'bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'}`}>
                      {link.name}
                    </span>
                  </Link>
                )
              ))}
            </div>

            {/* Right side icons */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="hidden sm:flex w-9 h-9 items-center justify-center rounded-full text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 bg-slate-100/70 dark:bg-slate-800/70 hover:bg-slate-200/70 dark:hover:bg-slate-700/70 transition-colors" aria-label="Toggle theme">
                {mounted && (resolvedTheme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />)}
              </button>
              <div ref={notificationRef} className="relative">
                <button onClick={() => setShowNotifications(!showNotifications)} className="w-9 h-9 flex items-center justify-center rounded-full text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 bg-slate-100/70 dark:bg-slate-800/70 hover:bg-slate-200/70 dark:hover:bg-slate-700/70 transition-colors relative" aria-label="Notifications">
                  <Bell className="w-4 h-4" />
                  {unreadCount > 0 && <span className="absolute top-1.5 right-1.5 block h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white dark:ring-slate-950"></span>}
                </button>
              </div>
              <button onClick={() => setIsCartOpen(true)} className="w-9 h-9 flex items-center justify-center rounded-full text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 bg-slate-100/70 dark:bg-slate-800/70 hover:bg-slate-200/70 dark:hover:bg-slate-700/70 transition-colors relative" aria-label="Open cart">
                <ShoppingCart className="w-4 h-4" />
                {cartCount > 0 && <span className="absolute top-1 right-0.5 text-[9px] font-bold bg-primary-500 text-white rounded-full w-4 h-4 flex items-center justify-center">{cartCount}</span>}
              </button>
              <div ref={profileRef} className="relative hidden sm:block">
                <button onClick={() => setShowProfileMenu(!showProfileMenu)} className="w-9 h-9 rounded-full overflow-hidden border-2 border-slate-200 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-400 transition-all shadow-sm">
                  <Image src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&auto=format&fit=crop" alt="Profile" width={36} height={36} className="w-full h-full object-cover" />
                </button>
              </div>
              <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 bg-slate-100/70 dark:bg-slate-800/70 hover:bg-slate-200/70 dark:hover:bg-slate-700/70 transition-colors" aria-label="Open menu">
                <Menu className="w-4 h-4" />
              </button>
            </div>
        </div>
        <motion.div className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-indigo-500 origin-left" style={{ scaleX }} />
      </nav>

      {/* Notifications Panel */}
      <AnimatePresence>
        {showNotifications && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-16 right-4 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 lg:right-40 lg:left-auto lg:translate-x-0 w-[90vw] max-w-sm origin-top-right rounded-2xl border border-slate-200/80 dark:border-slate-700/80 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-2xl z-[100]"
          >
            <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
              <h3 className="font-bold text-slate-900 dark:text-white">Notifications</h3>
              {unreadCount > 0 && <button onClick={markAllAsRead} className="text-xs font-bold text-primary-600 dark:text-primary-400 hover:underline">Mark all as read</button>}
            </div>
            <div className="p-2 max-h-80 overflow-y-auto">
              {notifications.map(item => (
                <div key={item.id} onClick={() => markAsRead(item.id)} className={`flex gap-3 p-3 rounded-xl transition-colors cursor-pointer ${item.unread ? 'bg-primary-50/50 dark:bg-primary-500/10' : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${getNotificationBg(item.type)}`}>{getNotificationIcon(item.type)}</div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-slate-800 dark:text-slate-200">{item.title}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{item.message}</p>
                    <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-1.5 font-semibold">{item.time}</p>
                  </div>
                  {item.unread && <div className="w-2 h-2 rounded-full bg-primary-500 self-center"></div>}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Profile Menu */}
      <AnimatePresence>
        {showProfileMenu && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-16 right-4 w-60 origin-top-right rounded-2xl border border-slate-200/80 dark:border-slate-700/80 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-2xl z-[100] p-2"
          >
            <Link href="/student/dashboard" onClick={() => setShowProfileMenu(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium text-sm"><LayoutDashboard className="w-4 h-4" /> My Dashboard</Link>
            <Link href="/profile" onClick={() => setShowProfileMenu(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium text-sm"><User className="w-4 h-4" /> My Profile</Link>
            <Link href="/profile?tab=security" onClick={() => setShowProfileMenu(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium text-sm"><Settings className="w-4 h-4" /> Settings</Link>
            <div className="h-px bg-slate-100 dark:bg-slate-800 my-2"></div>
            <button onClick={() => { setShowProfileMenu(false); /* Add logout logic */ }} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-500/10 transition-colors font-medium text-sm"><LogOut className="w-4 h-4" /> Sign Out</button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sliding Advanced Cart */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[110] bg-slate-900/20 dark:bg-slate-900/60 backdrop-blur-sm"
              onClick={() => setIsCartOpen(false)}
            />
            {/* Slide-over Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-[120] w-full sm:w-[440px] bg-white dark:bg-slate-900 shadow-[0_0_50px_rgba(0,0,0,0.15)] dark:shadow-primary-900/20 flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl z-10">
                <h2 className="text-[22px] font-black text-slate-900 dark:text-white flex items-center gap-3 tracking-tight">
                  <div className="w-10 h-10 rounded-full bg-primary-50 dark:bg-primary-500/10 flex items-center justify-center text-primary-600 dark:text-primary-400">
                    <ShoppingCart className="w-5 h-5" />
                  </div>
                  Your Cart
                  {cartCount > 0 && (
                    <span className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[11px] py-1 px-2.5 rounded-full font-bold ml-1">{cartCount}</span>
                  )}
                </h2>
                <button onClick={() => setIsCartOpen(false)} className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors active:scale-95">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto p-6 bg-slate-50/50 dark:bg-slate-900/50 relative">
                <AnimatePresence mode="wait">
                  {cartItems.length > 0 ? (
                    <motion.div key="cart-items" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.2 } }} className="space-y-4">
                    <AnimatePresence initial={false}>
                      {cartItems.map((id) => {
                        const course = COURSES_DB[id];
                        if (!course) return null;
                        const discount = course.originalPrice ? Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100) : 0;
                        return (
                          <motion.div 
                            layout
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                            key={id} 
                            className="group relative flex gap-4 p-4 rounded-[1.25rem] bg-white dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/50 shadow-sm hover:shadow-md hover:border-primary-200 dark:hover:border-primary-500/30 transition-all duration-300"
                          >
                            <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
                              <Image src={course.image} alt={course.title} width={112} height={112} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                              {discount > 0 && (
                                <div className="absolute top-2 left-2 bg-rose-500 text-white text-[9px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider shadow-sm">
                                  -{discount}%
                                </div>
                              )}
                            </div>
                            <div className="flex flex-col justify-center flex-1 py-0.5 min-w-0">
                              <div className="flex justify-between items-start gap-2">
                                <h3 className="text-[15px] font-bold text-slate-900 dark:text-white leading-snug line-clamp-2 pr-6">{course.title}</h3>
                              </div>
                              <p className="text-[11px] font-bold text-primary-600 dark:text-primary-400 mt-1.5 uppercase tracking-wider bg-primary-50 dark:bg-primary-500/10 w-fit px-2 py-0.5 rounded">Online Batch</p>
                              <div className="flex items-end gap-2 mt-auto pt-2">
                                <span className="text-[18px] font-black text-slate-900 dark:text-white leading-none">₹{course.price.toLocaleString('en-IN')}</span>
                                {course.originalPrice && <s className="text-[12px] font-semibold text-slate-400 dark:text-slate-500 leading-none mb-0.5">₹{course.originalPrice.toLocaleString('en-IN')}</s>}
                              </div>
                            </div>
                            <button onClick={() => removeFromCart(id)} className="absolute top-3 right-3 text-slate-300 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 p-2 rounded-full transition-colors active:scale-95" title="Remove item">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </motion.div>
                        )
                      })}
                    </AnimatePresence>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="empty-cart"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
                      className="flex flex-col items-center justify-center h-full text-center space-y-4"
                    >
                    <div className="w-32 h-32 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4 relative">
                      <ShoppingCart className="w-12 h-12 text-slate-300 dark:text-slate-600" />
                      <motion.div 
                        animate={{ y: [0, -8, 0] }} 
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="absolute -top-2 -right-2 w-10 h-10 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center shadow-md border border-slate-100 dark:border-slate-600"
                      >
                        <Sparkles className="w-5 h-5 text-amber-400" />
                      </motion.div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Your cart is empty</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 max-w-[260px] mx-auto leading-relaxed font-medium">Looks like you haven't added any premium batches to your cart yet.</p>
                    </div>
                    <button onClick={() => setIsCartOpen(false)} className="mt-6 px-8 py-3.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:bg-primary-600 dark:hover:bg-primary-500 hover:text-white dark:hover:text-white transition-all shadow-lg hover:shadow-primary-500/25 active:scale-95">
                      Explore Batches
                    </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Footer Checkout Area */}
              <AnimatePresence>
                {cartItems.length > 0 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50, transition: { duration: 0.2 } }}
                    className="border-t border-slate-200/60 dark:border-slate-800 p-6 bg-white dark:bg-slate-900 z-10 shadow-[0_-10px_30px_rgba(0,0,0,0.02)]"
                  >
                  <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-5 mb-5 border border-slate-100 dark:border-slate-700/50">
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500 dark:text-slate-400 font-semibold">Subtotal</span>
                        <span className="font-bold text-slate-700 dark:text-slate-300">
                          ₹{cartItems.reduce((acc, id) => acc + (COURSES_DB[id]?.originalPrice || COURSES_DB[id]?.price || 0), 0).toLocaleString('en-IN')}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">Total Savings</span>
                        <span className="font-black text-emerald-600 dark:text-emerald-400">
                          - ₹{cartItems.reduce((acc, id) => {
                            const c = COURSES_DB[id];
                            return acc + (c ? ((c.originalPrice || c.price) - c.price) : 0);
                          }, 0).toLocaleString('en-IN')}
                        </span>
                      </div>
                      <div className="pt-3 mt-3 border-t border-slate-200/80 dark:border-slate-700/80 flex justify-between items-center">
                        <span className="font-black text-slate-900 dark:text-white text-base">Grand Total</span>
                        <span className="text-[22px] font-black text-primary-600 dark:text-primary-400">
                          ₹{cartItems.reduce((acc, id) => acc + (COURSES_DB[id]?.price || 0), 0).toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Link href="/checkout" onClick={() => setIsCartOpen(false)}>
                    <div className="relative overflow-hidden w-full py-4 rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 dark:from-white dark:to-slate-100 text-white dark:text-slate-900 font-black text-[15px] shadow-[0_8px_20px_rgba(0,0,0,0.1)] dark:shadow-white/10 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group">
                      <span className="relative z-10 flex items-center gap-2">Proceed to Checkout <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                    </div>
                  </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
    <AnimatePresence>
      {isMobileMenuOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[90] bg-slate-900/40 backdrop-blur-sm md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <motion.nav
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-[100] w-[85%] max-w-[320px] bg-white dark:bg-slate-900 shadow-2xl flex flex-col md:hidden"
            aria-label="Mobile Navigation"
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white dark:border-slate-700 shadow-sm shrink-0">
                  <Image src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&auto=format&fit=crop" alt="Profile" width={40} height={40} className="w-full h-full object-cover" />
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
                          <div className="px-3 pt-2 pb-1.5 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Suggestions</div>
                          {filteredSuggestions.slice(0, 5).map((item) => (
                            <Link href={item.href} key={item.title} onClick={() => { setSearchQuery(''); setIsMobileMenuOpen(false); }} className="w-full flex items-center justify-between gap-3 px-3 py-3 text-left rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200 group/item">
                              <div className="flex items-center gap-3 overflow-hidden">
                                <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 group-hover/item:bg-primary-50 dark:group-hover/item:bg-primary-500/20 transition-colors">
                                  <item.icon className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover/item:text-primary-500 transition-colors" />
                                </div>
                                <span className="font-medium text-slate-700 dark:text-slate-300 group-hover/item:text-primary-600 dark:group-hover/item:text-primary-400 transition-colors truncate">{item.title}</span>
                              </div>
                              <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded-md shrink-0">{item.type}</span>
                            </Link>
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
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
                  >
                    {mounted && theme === 'dark' ? <><Sun className="w-4 h-4" /><span className="text-xs font-bold sm:hidden">Light</span></> : <><Moon className="w-4 h-4" /><span className="text-xs font-bold sm:hidden">Dark</span></>}
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

      <div className="fixed bottom-4 right-4 sm:right-6 z-[100] flex flex-col items-end">
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: 'bottom right' }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={`mb-5 flex flex-col overflow-hidden rounded-[2rem] bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] dark:shadow-primary-500/10 border border-slate-200/60 dark:border-slate-700/60 transition-all duration-300 origin-bottom-right ${
                isExpanded ? 'w-[calc(100vw-2rem)] sm:w-[320px] h-[75vh] max-h-[560px]' : 'w-[calc(100vw-2rem)] sm:w-[300px] h-[440px]'
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
                      exit={{ opacity: 0, x: 20 }}
                      className="flex-1 p-4 sm:p-5 flex flex-col justify-center overflow-hidden"
                    >
                      <div className="bg-gradient-to-b from-primary-50/80 to-white dark:from-primary-900/20 dark:to-slate-900 p-4 rounded-[1.25rem] border border-primary-100/50 dark:border-slate-800 mb-4 text-center shadow-sm">
                        <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-2 shadow-sm border border-slate-100 dark:border-slate-700">
                          <Bot className="w-5 h-5 text-primary-500" />
                        </div>
                        <h4 className="font-bold text-slate-900 dark:text-white text-[15px] mb-1">Welcome to Learna! 👋</h4>
                        <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                        Let&apos;s get started. Please fill in your details below so we can assist you better.
                        </p>
                      </div>
                      
                      <form onSubmit={handleStartChat} className="space-y-3 mt-auto">
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
          className="w-11 h-11 sm:w-12 sm:h-12 bg-slate-900 dark:bg-primary-500 rounded-full flex items-center justify-center text-white shadow-[0_8px_30px_rgba(0,0,0,0.3)] dark:shadow-primary-500/40 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all relative z-50 group border border-slate-700 dark:border-primary-400"
        >
          {!isChatOpen && !hasStartedChat && (
            <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5 items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500 text-white text-[8px] font-bold items-center justify-center border-2 border-white dark:border-slate-900">1</span>
            </span>
          )}
          <AnimatePresence mode="wait">
            {isChatOpen ? (
              <motion.div key="close" initial={{ opacity: 0, rotate: -90, scale: 0.5 }} animate={{ opacity: 1, rotate: 0, scale: 1 }} exit={{ opacity: 0, rotate: 90, scale: 0.5 }} transition={{ duration: 0.2 }}>
                <X className="w-4 h-4" />
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