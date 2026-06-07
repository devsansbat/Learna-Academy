import { Star, Clock, Users } from 'lucide-react'
import Link from 'next/link'

const courses = [
  {
    id: 1,
    title: 'Complete Web Development Bootcamp 2024',
    instructor: 'Dr. Angela Yu',
    rating: 4.8,
    students: 150000,
    duration: '40 hours',
    price: 2999,
    originalPrice: 9999,
    image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&h=300&fit=crop',
    category: 'Programming',
  },
  {
    id: 2,
    title: 'Data Science & Machine Learning Mastery',
    instructor: 'Andrew Ng',
    rating: 4.9,
    students: 120000,
    duration: '50 hours',
    price: 3999,
    originalPrice: 14999,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    category: 'Data Science',
  },
  {
    id: 3,
    title: 'Digital Marketing & Branding',
    instructor: 'Neil Patel',
    rating: 4.7,
    students: 85000,
    duration: '30 hours',
    price: 1999,
    originalPrice: 7999,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    category: 'Marketing',
  },
  {
    id: 4,
    title: 'UI/UX Design Masterclass',
    instructor: 'Julie Zhou',
    rating: 4.9,
    students: 95000,
    duration: '35 hours',
    price: 2499,
    originalPrice: 8999,
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop',
    category: 'Design',
  },
]

export const PopularCourses = () => {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Popular Courses</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover the most enrolled courses and start your learning journey today
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="relative h-48">
                  <img
                  src={course.image}
                  alt={course.title}
                    className="w-full h-full object-cover"
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
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/courses" className="btn-primary inline-block">
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  )
}
