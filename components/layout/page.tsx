'use client'

import { useState, useEffect } from 'react'
import { ArrowLeft, Lock, CreditCard, Landmark, Wallet, QrCode, ShieldCheck } from 'lucide-react'
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion'

// Mock DB - In a real app, this would come from a global state/context
const COURSES_DB: Record<number, any> = {
  1: { title: "Arjuna NEET 2.0 2027", price: 4999, image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&h=100&fit=crop" },
  2: { title: "Arjuna NEET 2027 + Lakshya NEET 2028", price: 8800, image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=100&h=100&fit=crop" },
  4: { title: "Lakshya JEE 2.0 2025", price: 4200, image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=100&h=100&fit=crop" },
}

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<number[]>([])
  const [total, setTotal] = useState(0)
  const [activePayment, setActivePayment] = useState('card')
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const stored = window.localStorage.getItem('learna-cart')
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        // Ensure that parsed is always an array before setting state
        setCartItems(Array.isArray(parsed) ? parsed.map(Number) : [])
      } catch {
        setCartItems([])
      }
    }
  }, [])

  useEffect(() => {
    const newTotal = cartItems.reduce((acc, id) => acc + (COURSES_DB[id]?.price || 0), 0)
    setTotal(newTotal)
  }, [cartItems])

  const paymentMethods = [
    { id: 'card', name: 'Card', icon: CreditCard },
    { id: 'upi', name: 'UPI', icon: QrCode },
    { id: 'netbanking', name: 'Netbanking', icon: Landmark },
    { id: 'wallet', name: 'Wallet', icon: Wallet },
  ]

  if (!isClient) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary-500 dark:border-primary-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
      <div className="container-custom py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-primary-600 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <div className="flex items-center gap-2 text-sm font-bold text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
              <span>100% Secure Checkout</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Left: Payment Options */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200/60 dark:border-slate-800 shadow-sm"
            >
              <h1 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Select Payment Method</h1>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">All transactions are secure and encrypted.</p>

              <div className="flex flex-col sm:flex-row gap-4">
                {/* Payment Method Sidebar */}
                <div className="flex sm:flex-col gap-2">
                  {paymentMethods.map(method => (
                    <button
                      key={method.id}
                      onClick={() => setActivePayment(method.id)}
                      className={`flex-1 sm:w-32 flex items-center gap-3 p-3 rounded-xl text-left font-bold text-sm transition-all border-2 ${
                        activePayment === method.id
                          ? 'bg-primary-50 dark:bg-primary-500/10 border-primary-500 text-primary-600 dark:text-primary-400 shadow-sm'
                          : 'bg-slate-50 dark:bg-slate-800/50 border-transparent text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <method.icon className="w-5 h-5" />
                      {method.name}
                    </button>
                  ))}
                </div>

                {/* Payment Details Area */}
                <div className="flex-1 bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-100 dark:border-slate-800">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activePayment}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {activePayment === 'card' && (
                        <div className="space-y-4">
                          <h3 className="font-bold text-slate-800 dark:text-white">Enter Card Details</h3>
                          <input type="text" placeholder="Card Number" className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-3 text-sm font-medium focus:ring-2 focus:ring-primary-500 outline-none" />
                          <div className="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="MM / YY" className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-3 text-sm font-medium focus:ring-2 focus:ring-primary-500 outline-none" />
                            <input type="text" placeholder="CVC" className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-3 text-sm font-medium focus:ring-2 focus:ring-primary-500 outline-none" />
                          </div>
                          <input type="text" placeholder="Cardholder Name" className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-3 text-sm font-medium focus:ring-2 focus:ring-primary-500 outline-none" />
                        </div>
                      )}
                      {activePayment === 'upi' && (
                        <div className="text-center">
                          <h3 className="font-bold text-slate-800 dark:text-white mb-4">Scan QR with any UPI app</h3>
                          <div className="w-40 h-40 bg-slate-200 dark:bg-slate-700 rounded-lg mx-auto flex items-center justify-center">
                            <QrCode className="w-20 h-20 text-slate-400" />
                          </div>
                          <p className="text-xs text-slate-500 mt-4">or enter UPI ID</p>
                          <input type="text" placeholder="yourname@upi" className="mt-2 w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-3 text-sm font-medium focus:ring-2 focus:ring-primary-500 outline-none text-center" />
                        </div>
                      )}
                      {activePayment === 'netbanking' && <p className="text-center font-medium text-slate-600 dark:text-slate-400 p-8">Netbanking options will be shown on the next step.</p>}
                      {activePayment === 'wallet' && <p className="text-center font-medium text-slate-600 dark:text-slate-400 p-8">Wallet options will be shown on the next step.</p>}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Right: Order Summary */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="sticky top-28 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200/60 dark:border-slate-800 shadow-sm">
                <h2 className="text-xl font-black text-slate-900 dark:text-white mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6 max-h-60 overflow-y-auto pr-2">
                  {cartItems.map(id => {
                    const course = COURSES_DB[id];
                    if (!course) return null;
                    return (
                      <div key={id} className="flex items-center gap-4">
                        <Image
                          src={course.image}
                          alt={course.title}
                          width={64}
                          height={64}
                          className="w-16 h-16 rounded-lg object-cover border border-slate-100 dark:border-slate-800"
                        />
                        <div className="flex-1">
                          <p className="text-sm font-bold text-slate-800 dark:text-slate-200 line-clamp-2 leading-tight">{course.title}</p>
                        </div>
                        <p className="text-sm font-bold text-slate-600 dark:text-slate-300">₹{course.price.toLocaleString('en-IN')}</p>
                      </div>
                    )
                  })}
                </div>

                <div className="border-t border-slate-200 dark:border-slate-800 pt-6 space-y-3">
                  <div className="flex justify-between text-sm font-medium text-slate-500 dark:text-slate-400">
                    <span>Subtotal</span>
                    <span>₹{total.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-sm font-medium text-slate-500 dark:text-slate-400">
                    <span>Taxes & Fees</span>
                    <span className="text-emerald-600 dark:text-emerald-400">FREE</span>
                  </div>
                  <div className="border-t border-dashed border-slate-200 dark:border-slate-700 my-2"></div>
                  <div className="flex justify-between text-lg font-black text-slate-900 dark:text-white">
                    <span>Total Payable</span>
                    <span>₹{total.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <button className="w-full mt-8 bg-gradient-to-r from-primary-500 to-indigo-600 text-white rounded-xl py-4 font-bold text-[15px] transition-all shadow-lg shadow-primary-500/30 hover:shadow-primary-500/40 active:scale-95 flex items-center justify-center gap-2">
                  <Lock className="w-4 h-4" />
                  Pay ₹{total.toLocaleString('en-IN')} Securely
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  )
}