'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

type StoredUser = {
  fullName: string
  email: string
  phone: string
  password: string
}

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setMessage('')

    if (!email || !password) {
      setError('Please enter both email and password.')
      return
    }

    const stored = typeof window !== 'undefined' ? window.localStorage.getItem('learna-user') : null
    if (!stored) {
      setError('No account found. Please register first.')
      return
    }

    let user: StoredUser
    try {
      user = JSON.parse(stored) as StoredUser
    } catch {
      setError('Unable to read saved account. Please register again.')
      return
    }

    if (user.email !== email || user.password !== password) {
      setError('Email or password is incorrect.')
      return
    }

    setMessage(`Welcome back, ${user.fullName}! Redirecting...`)
    window.localStorage.setItem('learna-session', JSON.stringify({ email: user.email, name: user.fullName }))
    setTimeout(() => router.push('/profile'), 700)
  }

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-12">
      <div className="mx-auto w-full max-w-2xl rounded-3xl bg-white p-8 shadow-lg">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Welcome back</h1>
            <p className="mt-2 text-sm text-slate-600">Sign in with your email and password to access your courses.</p>
          </div>
          <Link
            href="/register"
            className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200 transition"
          >
            Create an account
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-[1.5fr_1fr]">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-slate-900">Login to your account</h2>
            <div className="mt-4 space-y-3">
              <p className="text-sm text-slate-600">Or continue with one of the social providers below.</p>
              <div className="grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  <span className="mr-3 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-100">
                    <svg viewBox="0 0 46 46" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#FBBC05" d="M23 10.4c3.1 0 5.8 1.1 7.9 3l5.9-5.8C34.6 4 29.2 2 23 2 14.7 2 7.3 6.7 3.7 14.4l6.8 5.3C12.5 14.4 17.3 10.4 23 10.4z" />
                      <path fill="#EA4335" d="M42.7 20.3c0-1.5-.1-2.6-.4-3.8H23v7.2h11.7c-.5 2.6-2.1 4.8-4.4 6.3l6.8 5.2c4-3.7 6.3-9.2 6.3-14.9z" />
                      <path fill="#34A853" d="M10.5 27.5c-.6-1.8-.6-3.7 0-5.5L3.7 16.7C1.3 20.5 0 24.6 0 28.9s1.3 8.4 3.7 12.2l6.8-5.3z" />
                      <path fill="#4285F4" d="M23 41.6c6.2 0 11.6-2 15.5-5.4l-6.8-5.2c-1.9 1.3-4.3 2.1-8.7 2.1-5.7 0-10.5-4-12.2-9.4l-6.8 5.3C7.3 39.3 14.7 44 23 44z" />
                    </svg>
                  </span>
                  Continue with Google
                </button>
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  <span className="mr-3 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-100">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#1877F2" d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.69V11.31h3.13V8.414c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.396h-3.12V24h6.116C23.406 24 24 23.407 24 22.674V1.326C24 .593 23.406 0 22.675 0z" />
                    </svg>
                  </span>
                  Continue with Facebook
                </button>
              </div>
            </div>
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-slate-50 px-2 text-slate-500">or use email</span>
              </div>
            </div>
            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
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
                Password
                <input
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  type="password"
                  placeholder="********"
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                />
              </label>
              {error ? <p className="text-sm text-red-600">{error}</p> : null}
              {message ? <p className="text-sm text-green-600">{message}</p> : null}
              <button
                type="submit"
                className="w-full rounded-2xl bg-primary-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-primary-600"
              >
                Sign In
              </button>
            </form>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-primary-500 to-secondary p-6 text-white shadow-xl">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Need help?</h3>
              <p className="text-sm leading-6 text-slate-100">
                Access courses, live sessions, and progress tracking after signing in. New here? Create an account to get started.
              </p>
              <Link
                href="/register"
                className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary-700 transition hover:bg-slate-100"
              >
                Register now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
