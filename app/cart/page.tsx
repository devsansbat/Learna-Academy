'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ShoppingCart, Trash2 } from 'lucide-react'
const courses = [
  {
    id: 1,
    title: 'Complete Web Development Bootcamp 2024',
    instructor: 'Dr. Angela Yu',
    price: 2999,
  },
  {
    id: 2,
    title: 'Data Science & Machine Learning Mastery',
    instructor: 'Andrew Ng',
    price: 3999,
  },
  {
    id: 3,
    title: 'Digital Marketing & Branding',
    instructor: 'Neil Patel',
    price: 1999,
  },
  {
    id: 4,
    title: 'UI/UX Design Masterclass',
    instructor: 'Julie Zhou',
    price: 2499,
  },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState<number[]>([])
  const [isCartReady, setIsCartReady] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const stored = window.localStorage.getItem('learna-cart')
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        setCartItems(Array.isArray(parsed) ? parsed : [])
      } catch {
        setCartItems([])
      }
    }

    setIsCartReady(true)
  }, [])

  useEffect(() => {
    if (!isCartReady || typeof window === 'undefined') return

    window.localStorage.setItem('learna-cart', JSON.stringify(cartItems))
    window.dispatchEvent(new Event('learna-cart-update'))
  }, [cartItems, isCartReady])

  const selectedCourses = courses.filter((course) => cartItems.includes(course.id))
  const totalPrice = selectedCourses.reduce((sum, course) => sum + course.price, 0)

  const removeFromCart = (courseId: number) => {
    setCartItems((current) => current.filter((id) => id !== courseId))
  }

  return (
    <section className="container-custom py-24">
      <div className="max-w-5xl mx-auto rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-3xl bg-primary-100 text-primary-700 flex items-center justify-center">
              <ShoppingCart className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl font-semibold text-gray-900">Your Cart</h1>
              <p className="text-sm text-gray-500">Review selected courses and continue learning.</p>
            </div>
          </div>
          <div className="rounded-full bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700">
              {selectedCourses.length} course{selectedCourses.length === 1 ? '' : 's'} selected
            </div>
        </div>
        
          {selectedCourses.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-gray-300 p-10 text-center">
            <p className="mb-4 text-lg font-medium text-gray-900">Your cart is empty.</p>
            <p className="mb-8 text-gray-500">Add courses from the Popular Courses section to see them here.</p>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-600"
            >
              Browse Courses
            </Link>
          </div>
        ) : (
            <div className="space-y-6 lg:grid lg:grid-cols-3 lg:gap-6">
              <div className="lg:col-span-2 space-y-6">
                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <h2 className="text-xl font-semibold text-slate-900">Ready to checkout</h2>
                      <p className="text-sm text-slate-500">Confirm your selected courses before payment.</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-slate-500">Items</p>
                      <p className="text-lg font-semibold text-slate-900">{selectedCourses.length}</p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4">
              {selectedCourses.map((course) => (
                <div key={course.id} className="rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-primary-600">{course.instructor}</p>
                      <h3 className="text-xl font-semibold text-slate-900">{course.title}</h3>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-slate-900">₹{course.price.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => removeFromCart(course.id)}
                      className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-100"
                    >
                      <Trash2 className="w-4 h-4" />
                      Remove
                    </button>
                  </div>
                </div>
              ))}
                </div>
              </div>

              <aside className="lg:col-span-1 sticky top-28 rounded-3xl border border-slate-200 bg-slate-50 p-6 h-min">
                <div className="mb-4">
                  <p className="text-sm text-slate-500">Subtotal</p>
                  <p className="text-3xl font-bold text-slate-900">₹{totalPrice.toLocaleString()}</p>
                </div>
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-sm text-slate-500">Items</p>
                  <p className="font-semibold">{selectedCourses.length}</p>
                </div>
                <button className="w-full rounded-full bg-primary-500 px-4 py-3 text-white font-semibold hover:bg-primary-600 transition">Proceed to Checkout</button>
              </aside>
            </div>
        )}
      </div>
    </section>
  )
}
