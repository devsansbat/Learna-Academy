'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

export default function RegisterPage() {
  const router = useRouter()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setMessage('')

    if (!fullName || !email || !phone || !password || !confirmPassword) {
      setError('Please complete all fields before continuing.')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.')
      return
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    if (typeof window !== 'undefined') {
      const existing = window.localStorage.getItem('learna-user')
      if (existing) {
        const existingUser = JSON.parse(existing) as { email: string }
        if (existingUser.email === email) {
          setError('An account with this email already exists. Please login instead.')
          return
        }
      }

      const savedUser = {
        fullName,
        email,
        phone,
        password,
      }
      window.localStorage.setItem('learna-user', JSON.stringify(savedUser))
      setMessage('Account created successfully. Redirecting to login...')
      setTimeout(() => router.push('/login'), 800)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-12">
      <div className="mx-auto w-full max-w-2xl rounded-3xl bg-white p-8 shadow-lg">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Create your account</h1>
            <p className="mt-2 text-sm text-slate-600">Register with your details to start learning and track your progress.</p>
          </div>
          <Link
            href="/login"
            className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200 transition"
          >
            Already have an account?
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-[1.5fr_1fr]">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-slate-900">Registration details</h2>
            <p className="mt-3 text-sm text-slate-600">Fill in your full details below to register your account.</p>
            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <label className="block text-sm font-medium text-slate-700">
                Full name
                <input
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                  type="text"
                  placeholder="Your full name"
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Email address
                <input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Phone number
                <input
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Password
                <input
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  type="password"
                  placeholder="Create a password"
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Confirm password
                <input
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  type="password"
                  placeholder="Confirm your password"
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                />
              </label>
              {error ? <p className="text-sm text-red-600">{error}</p> : null}
              {message ? <p className="text-sm text-green-600">{message}</p> : null}
              <button
                type="submit"
                className="w-full rounded-2xl bg-primary-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-primary-600"
              >
                Create Account
              </button>
            </form>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-primary-500 to-secondary p-6 text-white shadow-xl">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Why register?</h3>
              <p className="text-sm leading-6 text-slate-100">
                Registering saves your profile, course progress, and gives you access to personalized recommendations, live classes, and notes.
              </p>
              <Link
                href="/login"
                className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary-700 transition hover:bg-slate-100"
              >
                Sign in instead
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
