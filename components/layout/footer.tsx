'use client'

﻿import Link from 'next/link'
import { Facebook, Twitter, Youtube, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react'
import { ArrowRight } from 'lucide-react'
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
    <footer className="relative bg-slate-950 border-t border-slate-900 pt-20 overflow-hidden mt-10">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-primary-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-4 pr-0 lg:pr-8">
            <Link href="/" className="flex items-center space-x-2.5 mb-6">
              <div className="w-9 h-9 bg-gradient-to-br from-primary-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/20">
                <span className="text-white font-bold text-xl leading-none">L</span>
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                Learna Academy
              </span>
            </Link>
            <p className="text-slate-400 text-[13px] leading-relaxed mb-8 max-w-sm">
              Empowering learners worldwide with quality education, expert instructors, and AI-powered tools. Start your journey today and unlock your potential.
            </p>
            <div className="flex space-x-3">
              {[Facebook, Twitter, Youtube, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary-500 hover:text-white hover:border-primary-500 hover:-translate-y-1 transition-all duration-300 shadow-sm"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerSections).map(([title, links]) => (
            <div key={title} className="lg:col-span-2">
              <h3 className="font-bold text-slate-100 mb-5 text-xs uppercase tracking-wider">{title}</h3>
              <ul className="space-y-3.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="group flex items-center text-[13px] text-slate-400 hover:text-primary-400 transition-colors">
                      <ArrowRight className="w-3 h-3 opacity-0 -ml-4 mr-1 transition-all group-hover:opacity-100 group-hover:ml-0" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="font-bold text-slate-100 mb-5 text-xs uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-[13px] text-slate-400">
                <div className="mt-0.5 w-6 h-6 rounded-md bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                  <Mail className="w-3 h-3 text-primary-400" />
                </div>
                <span className="hover:text-white transition-colors cursor-pointer pt-0.5">support@learna.com</span>
              </li>
              <li className="flex items-start space-x-3 text-[13px] text-slate-400">
                <div className="mt-0.5 w-6 h-6 rounded-md bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                  <Phone className="w-3 h-3 text-primary-400" />
                </div>
                <span className="hover:text-white transition-colors cursor-pointer pt-0.5">+91 98765 43210</span>
              </li>
              <li className="flex items-start space-x-3 text-[13px] text-slate-400">
                <div className="mt-0.5 w-6 h-6 rounded-md bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-3 h-3 text-primary-400" />
                </div>
                <span className="pt-0.5">Koramangala, Bangalore<br/>India 560034</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="border-t border-slate-800/60 py-6 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-[12px] text-slate-500">
            &copy; {new Date().getFullYear()} Learna Academy. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[12px] font-medium text-slate-500">
            {bottomLinks.map((item) => (
              <Link key={item.name} href={item.href} className="hover:text-slate-300 transition-colors">
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Giant Clean Text at the very bottom */}
      <div className="w-full flex justify-center overflow-hidden select-none bg-slate-950 pb-6 pt-10 mt-2 border-t border-slate-900/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex items-center justify-center cursor-default"
        >
          <h1 className="whitespace-nowrap text-[12vw] sm:text-[11vw] md:text-[9.5vw] font-black leading-none tracking-tighter text-slate-800 transition-colors duration-500 hover:text-slate-700">
            LEARNA ACADEMY
          </h1>
        </motion.div>
      </div>
    </footer>
  )
}
