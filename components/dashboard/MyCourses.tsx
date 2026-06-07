'use client'

export default function MyCourses() {
  const courses = [
    {
      title: 'Full Stack Web Development',
      instructor: 'Sanya Kapoor',
      progress: 72,
      status: 'On track',
    },
    {
      title: 'AI & Machine Learning',
      instructor: 'Rohan Mehta',
      progress: 55,
      status: 'Needs attention',
    },
    {
      title: 'UI/UX Design',
      instructor: 'Priya Singh',
      progress: 89,
      status: 'Almost complete',
    },
  ]

  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold">My Courses</h3>
        <span className="rounded-full bg-primary-50 px-3 py-1 text-sm text-primary-700">3 active</span>
      </div>
      <div className="space-y-5">
        {courses.map((course) => (
          <div key={course.title} className="rounded-3xl border border-gray-200 p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-semibold text-gray-900">{course.title}</p>
                <p className="text-sm text-gray-500">Instructor: {course.instructor}</p>
              </div>
              <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">{course.status}</span>
            </div>
            <div className="mt-4 h-2 rounded-full bg-gray-200 overflow-hidden">
              <div className="h-full rounded-full bg-primary-500" style={{ width: `${course.progress}%` }} />
            </div>
            <div className="mt-3 flex items-center justify-between text-sm text-gray-600">
              <p>{course.progress}% complete</p>
              <button className="text-primary-600 font-semibold hover:text-primary-700">View course</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
