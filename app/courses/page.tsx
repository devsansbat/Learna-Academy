import { PopularCourses } from '@/components/layout/popular-courses'

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-20">
      {/* Reuse the updated course card component here */}
      <PopularCourses />
    </main>
  )
}