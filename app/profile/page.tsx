/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import { User, Mail, Phone, MapPin, Lock } from 'lucide-react'

export const metadata = {
  title: 'Profile - Learna Academy',
  description: 'Manage your Learna Academy profile, subscriptions, and preferences.',
}

export default async function ProfilePage({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }> | { [key: string]: string | string[] | undefined }
}) {
  const params = await searchParams;
  const tab = params?.tab || 'account'

  return (
    <section className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 py-24">
      <div className="container-custom">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <aside className="rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm transition-colors">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-28 h-28 rounded-full bg-primary-500 text-white grid place-items-center text-4xl font-bold overflow-hidden shadow-sm">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&auto=format&fit=crop" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Alex Johnson</h1>
                <p className="text-slate-500 dark:text-slate-400">Learner since 2024</p>
              </div>
            </div>

            <div className="mt-10 space-y-4">
              <Link href="?tab=account" className={`block rounded-3xl p-4 border transition-all ${tab === 'account' ? 'bg-primary-50 dark:bg-primary-500/10 border-primary-200 dark:border-primary-500/20 shadow-sm' : 'bg-slate-50 dark:bg-slate-800/50 border-transparent hover:bg-slate-100 dark:hover:bg-slate-800'}`}>
                <div className={`flex items-center gap-3 ${tab === 'account' ? 'text-primary-700 dark:text-primary-400' : 'text-primary-600 dark:text-primary-500'}`}>
                  <User className="w-5 h-5" />
                  <span className="text-sm font-semibold">Account</span>
                </div>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Manage your personal details and password.</p>
              </Link>
              <Link href="?tab=security" className={`block rounded-3xl p-4 border transition-all ${tab === 'security' ? 'bg-primary-50 dark:bg-primary-500/10 border-primary-200 dark:border-primary-500/20 shadow-sm' : 'bg-slate-50 dark:bg-slate-800/50 border-transparent hover:bg-slate-100 dark:hover:bg-slate-800'}`}>
                <div className={`flex items-center gap-3 ${tab === 'security' ? 'text-primary-700 dark:text-primary-400' : 'text-primary-600 dark:text-primary-500'}`}>
                  <Lock className="w-5 h-5" />
                  <span className="text-sm font-semibold">Security</span>
                </div>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Update your password and login settings.</p>
              </Link>
              <Link href="?tab=support" className={`block rounded-3xl p-4 border transition-all ${tab === 'support' ? 'bg-primary-50 dark:bg-primary-500/10 border-primary-200 dark:border-primary-500/20 shadow-sm' : 'bg-slate-50 dark:bg-slate-800/50 border-transparent hover:bg-slate-100 dark:hover:bg-slate-800'}`}>
                <div className={`flex items-center gap-3 ${tab === 'support' ? 'text-primary-700 dark:text-primary-400' : 'text-primary-600 dark:text-primary-500'}`}>
                  <Phone className="w-5 h-5" />
                  <span className="text-sm font-semibold">Support</span>
                </div>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Contact support if you need help with your courses.</p>
              </Link>
            </div>
          </aside>

          <div className="rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 sm:gap-4 text-center sm:text-left">
              <div>
                <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
                  {tab === 'account' && 'My Profile'}
                  {tab === 'security' && 'Security Settings'}
                  {tab === 'support' && 'Help & Support'}
                </h2>
                <p className="mt-2 text-slate-500 dark:text-slate-400">
                  {tab === 'account' && 'Edit your profile details and account preferences.'}
                  {tab === 'security' && 'Update your password and secure your account.'}
                  {tab === 'support' && 'Get in touch with our team for any assistance.'}
                </p>
              </div>
              <Link
                href="/student/dashboard"
                className="inline-flex items-center justify-center w-full sm:w-auto rounded-full bg-primary-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-primary-600 shadow-sm"
              >
                Go to Dashboard
              </Link>
            </div>

            {tab === 'account' && (
              <>
                <div className="mt-10 grid gap-6 md:grid-cols-2">
                  <div className="rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 p-6">
                    <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 mb-4">
                      <Mail className="w-5 h-5" />
                      <span className="font-semibold">Email</span>
                    </div>
                    <p className="text-slate-900 dark:text-white">alex.johnson@example.com</p>
                  </div>
                  <div className="rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 p-6">
                    <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 mb-4">
                      <Phone className="w-5 h-5" />
                      <span className="font-semibold">Phone</span>
                    </div>
                    <p className="text-slate-900 dark:text-white">+91 98765 43210</p>
                  </div>
                  <div className="rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 p-6">
                    <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 mb-4">
                      <MapPin className="w-5 h-5" />
                      <span className="font-semibold">Location</span>
                    </div>
                    <p className="text-slate-900 dark:text-white">Bangalore, India</p>
                  </div>
                  <div className="rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 p-6">
                    <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 mb-4">
                      <Lock className="w-5 h-5" />
                      <span className="font-semibold">Plan</span>
                    </div>
                    <p className="text-slate-900 dark:text-white">Pro Plan • Renews in 14 days</p>
                  </div>
                </div>

                <div className="mt-10 rounded-3xl bg-primary-50 dark:bg-primary-500/10 p-6 border border-primary-100 dark:border-primary-500/20">
                  <h3 className="text-xl font-semibold text-primary-700 dark:text-primary-400">Keep your profile secure</h3>
                  <p className="mt-2 text-sm text-primary-600 dark:text-primary-500">
                    Update your password regularly and enable two-factor authentication for the best protection.
                  </p>
                </div>
              </>
            )}

            {tab === 'security' && (
              <div className="mt-10 space-y-6">
                <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 p-6 md:p-8">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Change Password</h3>
                  <form className="space-y-5 max-w-md">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Current Password</label>
                      <input type="password" placeholder="••••••••" className="w-full rounded-xl border border-slate-200 dark:border-slate-700 px-4 py-2.5 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 bg-white dark:bg-slate-900 dark:text-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">New Password</label>
                      <input type="password" placeholder="••••••••" className="w-full rounded-xl border border-slate-200 dark:border-slate-700 px-4 py-2.5 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 bg-white dark:bg-slate-900 dark:text-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Confirm New Password</label>
                      <input type="password" placeholder="••••••••" className="w-full rounded-xl border border-slate-200 dark:border-slate-700 px-4 py-2.5 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 bg-white dark:bg-slate-900 dark:text-white" />
                    </div>
                    <button type="button" className="rounded-full bg-slate-900 dark:bg-primary-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 dark:hover:bg-primary-700 transition shadow-sm mt-2">Update Password</button>
                  </form>
                </div>
                <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Two-Factor Authentication</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Add an extra layer of security to your account.</p>
                  </div>
                  <button className="rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition shadow-sm whitespace-nowrap">Enable 2FA</button>
                </div>
              </div>
            )}

            {tab === 'support' && (
              <div className="mt-10 space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 p-6 md:p-8 flex flex-col items-start">
                    <div className="p-3 bg-primary-100 dark:bg-primary-500/20 rounded-2xl mb-4">
                      <Mail className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Email Support</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 mb-6 flex-1">Send us an email and we&apos;ll get back to you within 24 hours.</p>
                    <a href="mailto:support@learna.com" className="text-sm font-bold text-primary-600 hover:text-primary-700 bg-white dark:bg-slate-900 px-5 py-2.5 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm w-full text-center">support@learna.com</a>
                  </div>
                  <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 p-6 md:p-8 flex flex-col items-start">
                    <div className="p-3 bg-emerald-100 dark:bg-emerald-500/20 rounded-2xl mb-4">
                      <Phone className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Call Us</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 mb-6 flex-1">Available Monday to Friday, from 9 AM to 6 PM (EST).</p>
                    <a href="tel:+919876543210" className="text-sm font-bold text-emerald-600 hover:text-emerald-700 bg-white dark:bg-slate-900 px-5 py-2.5 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm w-full text-center">+91 98765 43210</a>
                  </div>
                </div>
                <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 md:p-8 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Send a Message</h3>
                  <form className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Your Name</label>
                        <input type="text" defaultValue="Alex Johnson" className="w-full rounded-xl border border-slate-200 dark:border-slate-700 px-4 py-2.5 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 bg-slate-50 dark:bg-slate-800/50 dark:text-white" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Email Address</label>
                        <input type="email" defaultValue="alex.johnson@example.com" className="w-full rounded-xl border border-slate-200 dark:border-slate-700 px-4 py-2.5 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 bg-slate-50 dark:bg-slate-800/50 dark:text-white" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Subject</label>
                      <input type="text" placeholder="How can we help?" className="w-full rounded-xl border border-slate-200 dark:border-slate-700 px-4 py-2.5 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 bg-white dark:bg-slate-900 dark:text-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Message</label>
                      <textarea rows={4} placeholder="Describe your issue in detail..." className="w-full rounded-xl border border-slate-200 dark:border-slate-700 px-4 py-2.5 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 bg-white dark:bg-slate-900 dark:text-white"></textarea>
                    </div>
                    <button type="button" className="rounded-full bg-primary-500 px-8 py-3 text-sm font-semibold text-white hover:bg-primary-600 transition shadow-sm mt-2">Send Message</button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
