'use client'

import Link from 'next/link'
import { ArrowLeft, CheckCircle2, CreditCard, ShieldCheck } from 'lucide-react'

const orderSummary = [
  { label: 'React JS Mastery', price: '₹4,499' },
  { label: 'Full Stack Node.js', price: '₹5,999' },
  { label: 'Discount', price: '-₹1,200' },
]

const subtotal = 9498
const discount = 1200
const total = subtotal - discount

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 px-4 py-24 text-slate-900 dark:text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center gap-3">
          <Link href="/cart" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
            <ArrowLeft className="h-4 w-4" />
            Back to cart
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-100 text-primary-700 dark:bg-primary-500/10 dark:text-primary-400">
                <CreditCard className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400">Secure payment</p>
                <h1 className="text-3xl font-black">Checkout</h1>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800/50">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-lg font-bold">Payment method</h2>
                  <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-bold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                    <ShieldCheck className="h-3.5 w-3.5" /> 256-bit secure
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-primary-200 bg-primary-50 p-4 dark:border-primary-500/30 dark:bg-primary-500/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-bold text-slate-900 dark:text-white">UPI / Card / Wallet</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Fast and secure checkout</p>
                      </div>
                      <div className="rounded-full bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-primary-600 shadow-sm dark:bg-slate-800 dark:text-primary-300">Recommended</div>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Cardholder name</label>
                      <input className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-0 transition focus:border-primary-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white" placeholder="Alex Johnson" />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Card number</label>
                      <input className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-primary-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Expiry</label>
                      <input className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-primary-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white" placeholder="MM / YY" />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">CVC</label>
                      <input className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-primary-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white" placeholder="123" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <aside className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="mb-5 text-xl font-black">Order summary</h2>
            <div className="space-y-4">
              {orderSummary.map((item) => (
                <div key={item.label} className="flex items-center justify-between gap-3 text-sm">
                  <span className="text-slate-600 dark:text-slate-300">{item.label}</span>
                  <span className="font-semibold text-slate-900 dark:text-white">{item.price}</span>
                </div>
              ))}
            </div>

            <div className="my-6 h-px bg-slate-200 dark:bg-slate-700" />

            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-500 dark:text-slate-400">Subtotal</span>
                <span className="font-semibold text-slate-900 dark:text-white">₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500 dark:text-slate-400">Discount</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">-₹{discount.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-primary-50 p-4 dark:bg-primary-500/10">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Total payable</span>
                <span className="text-2xl font-black text-primary-600 dark:text-primary-400">₹{total.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <button className="mt-6 w-full rounded-full bg-gradient-to-r from-primary-500 to-indigo-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary-500/20 transition hover:shadow-primary-500/30">
              Pay ₹{total.toLocaleString('en-IN')}
            </button>

            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300">
              <CheckCircle2 className="h-5 w-5" />
              Instant access granted after payment
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
