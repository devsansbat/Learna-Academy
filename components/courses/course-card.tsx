import Link from 'next/link'
import Image from 'next/image'
import { Star, Users, Clock } from 'lucide-react'

interface CourseCardProps {
  course: any
  viewMode: 'grid' | 'list'
  index: number
}

export default function CourseCard({ course, viewMode }: CourseCardProps) {
  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 relative h-48 md:h-auto">
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-2">{course.instructor}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary-500">₹{course.price}</div>
                <div className="text-gray-400 line-through">₹{course.originalPrice}</div>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{course.rating}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4 text-gray-400" />
                <span>{course.students.toLocaleString()} students</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-gray-400" />
                <span>{course.duration}</span>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">{course.level}</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">{course.lectures} lectures</span>
            </div>

            <Link
              href={`/courses/${course.id}`}
              className="inline-block mt-4 px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
            >
              View Course
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
      <div className="relative h-48">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-md text-xs font-semibold">
          {course.category}
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 line-clamp-2">{course.title}</h3>
        <p className="text-gray-600 text-sm mb-2">{course.instructor}</p>

        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-semibold ml-1">{course.rating}</span>
          </div>
          <span className="text-gray-400">•</span>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4 text-gray-400" />
            <span className="text-sm">{course.students.toLocaleString()}</span>
          </div>
          <span className="text-gray-400">•</span>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-gray-400" />
            <span className="text-sm">{course.duration}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div>
            <span className="text-2xl font-bold text-primary-500">₹{course.price}</span>
            <span className="text-gray-400 line-through ml-2">₹{course.originalPrice}</span>
          </div>
          <Link
            href={`/courses/${course.id}`}
            className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </div>
  )
}
