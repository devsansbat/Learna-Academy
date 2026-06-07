'use client'

export default function UpcomingClasses() {
  const classes = [
    { title: 'React State Management', date: 'June 10 • 5:00 PM', status: 'Live soon' },
    { title: 'Data Science Live Workshop', date: 'June 12 • 7:00 PM', status: 'Scheduled' },
  ]

  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold">Upcoming Classes</h3>
        <span className="rounded-full bg-sky-50 px-3 py-1 text-sm text-sky-700">2 sessions</span>
      </div>
      <div className="space-y-4">
        {classes.map((session) => (
          <div key={session.title} className="rounded-3xl border border-gray-200 p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-semibold text-gray-900">{session.title}</p>
                <p className="text-sm text-gray-500">{session.date}</p>
              </div>
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-gray-600">
                {session.status}
              </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <button className="inline-flex items-center justify-center rounded-full bg-primary-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-600">
                Join session
              </button>
              <button className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50">
                Add reminder
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
