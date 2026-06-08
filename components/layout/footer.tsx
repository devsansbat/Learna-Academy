﻿﻿﻿﻿﻿'use client'

import Link from 'next/link'
import { Facebook, Twitter, Youtube, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

export const Footer = () => {
  const footerSections = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press Kit', href: '/press' },
      { name: 'Our Story', href: '/story' },
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Teaching Center', href: '/teaching-center' },
      { name: 'Help & Support', href: '/support' },
      { name: 'Community', href: '/community' },
    ],
    courses: [
      { name: 'Web Development', href: '/courses' },
      { name: 'Data Science', href: '/courses' },
      { name: 'Design', href: '/courses' },
      { name: 'Marketing', href: '/courses' },
    ],
  }

  const bottomLinks = [
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Refund Policy', href: '/refund' },
  ]

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8 mt-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-4 pr-0 lg:pr-8">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <motion.div 
                whileHover={{ rotate: 10, scale: 1.05 }}
                className="w-9 h-9 bg-gradient-to-br from-primary-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-sm"
              >
                <span className="text-white font-bold text-xl leading-none">L</span>
              </motion.div>
              <motion.span 
                animate={{ backgroundPosition: ['0%', '200%'] }}
                transition={{ duration: 4, ease: "linear", repeat: Infinity }}
                className="font-bold text-xl bg-gradient-to-r from-white via-primary-400 to-white bg-[length:200%_auto] bg-clip-text text-transparent tracking-tight"
              >
                Learna Academy
              </motion.span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              Empowering learners worldwide with quality education, expert instructors, and AI-powered tools. Start your journey today and unlock your potential.
            </p>
            <div className="flex space-x-3">
              {[Facebook, Twitter, Youtube, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerSections).map(([title, links]) => (
            <div key={title} className="lg:col-span-2">
              <h3 className="font-bold text-slate-100 mb-4 text-xs uppercase tracking-wider">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-slate-400 hover:text-primary-400 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="font-bold text-slate-100 mb-4 text-xs uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-slate-400">
                <Mail className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />
                <span className="hover:text-white transition-colors cursor-pointer">support@learna.com</span>
              </li>
              <li className="flex items-start space-x-3 text-sm text-slate-400">
                <Phone className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />
                <span className="hover:text-white transition-colors cursor-pointer">+91 98765 43210</span>
              </li>
              <li className="flex items-start space-x-3 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />
                <span>Koramangala, Bangalore<br/>India 560034</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Learna Academy. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-500">
            {bottomLinks.map((item) => (
              <Link key={item.name} href={item.href} className="hover:text-slate-300 transition-colors">
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Animated Watermark */}
        <div className="mt-16 md:mt-24 relative flex justify-center items-center w-full select-none pointer-events-none overflow-hidden pb-4">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative flex justify-center items-center w-full"
          >
            
            <h1 className="text-[10vw] sm:text-[9vw] md:text-[8vw] lg:text-[6.5vw] xl:text-[5.5vw] font-black uppercase whitespace-nowrap tracking-tighter leading-none text-center relative z-10 w-full px-2 sm:px-4">
              <motion.span 
                animate={{ backgroundPosition: ['200% center', '-200% center'] }}
                transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                className="bg-gradient-to-r from-slate-800 via-primary-500 to-slate-800 bg-[length:200%_auto] bg-clip-text text-transparent"
              >
                LEARNA ACADEMY
              </motion.span>
            </h1>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
