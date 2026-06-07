import { HeroSection } from '@/components/home/HeroSection'
import { PopularCourses } from '@/components/home/PopularCourses'
import { Categories } from '@/components/home/Categories'
import { TopEducators } from '@/components/home/TopEducators'
import { Testimonials } from '@/components/home/Testimonials'
import { Features } from '@/components/home/Features'
import { AppDownload } from '@/components/home/AppDownload'
import { FAQ } from '@/components/home/FAQ'
import { Newsletter } from '@/components/home/Newsletter'

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <PopularCourses />
      <Categories />
      <TopEducators />
      <Testimonials />
      <Features />
      <AppDownload />
      <FAQ />
      <Newsletter />
    </div>
  )
}