﻿import { Play, TrendingUp, Award, Users } from 'lucide-react'
import Link from 'next/link'

export const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-primary-100 rounded-full px-4 py-2 mb-5">
              <TrendingUp className="w-4 h-4 text-primary-600" />
              <span className="text-sm font-semibold text-primary-600">Trusted by 1M+ Learners</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Transform Your Future
              <br />
              With AI-Powered Learning
            </h1>

            <p className="text-base text-gray-600 mb-5">
              Join India&apos;s fastest-growing EdTech platform. Learn from top educators, get personalized guidance, and achieve your dreams with our AI-powered learning ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/courses" className="btn-primary inline-flex items-center justify-center">
                Start Learning Now
              </Link>
              <button className="btn-secondary inline-flex items-center justify-center gap-2">
                <Play className="w-4 h-4" />
                Watch Demo
              </button>
            </div>

            <div className="flex items-center gap-6 mt-5">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary-500" />
                <span className="text-sm">Certified Courses</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary-500" />
                <span className="text-sm">Expert Educators</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop"
                alt="Learna Academy"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
