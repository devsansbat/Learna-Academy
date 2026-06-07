'use client'

export default function RecentActivity() {
  const activities = [
    { title: 'Completed Module 5', detail: 'UI/UX Design course', time: '2 hours ago' },
    { title: 'Scored 92% on JavaScript quiz', detail: 'Web Development track', time: 'Yesterday' },
    { title: 'Attended live class: React Basics', detail: 'Live session with mentor', time: '2 days ago' },
  ]

  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold">Recent Activity</h3>
        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">3 updates</span>
      </div>
      <div className="space-y-4">
        {activities.map((item) => (
          <div key={item.title} className="rounded-3xl border border-gray-200 p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="font-semibold text-gray-900">{item.title}</p>
                <p className="text-sm text-gray-500">{item.detail}</p>
              </div>
              <p className="text-sm text-gray-400">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
