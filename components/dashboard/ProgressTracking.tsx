'use client'

export default function ProgressTracking() {
  const progressTiles = [
    { label: 'Weekly study goal', completed: 18, target: 20, color: 'bg-primary-500' },
    { label: 'Quizzes passed', completed: 12, target: 15, color: 'bg-emerald-500' },
    { label: 'Modules completed', completed: 14, target: 20, color: 'bg-violet-500' },
  ]

  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold">Progress Tracking</h3>
        <span className="rounded-full bg-primary-50 px-3 py-1 text-sm text-primary-700">Good pace</span>
      </div>
      <div className="space-y-5">
        {progressTiles.map((tile) => {
          const percentage = Math.round((tile.completed / tile.target) * 100)
          return (
            <div key={tile.label} className="space-y-3 rounded-3xl border border-gray-200 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900">{tile.label}</p>
                  <p className="text-sm text-gray-500">{tile.completed} of {tile.target}</p>
                </div>
                <span className="text-sm font-semibold text-gray-700">{percentage}%</span>
              </div>
              <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
                <div className={`h-full rounded-full ${tile.color}`} style={{ width: `${percentage}%` }} />
              </div>
            </div>
          )
        })}
      </div>
      <div className="mt-6 rounded-3xl bg-primary-50 p-4 text-sm text-primary-700">
        Keep the momentum going — completing 2 more lessons this week will unlock your next achievement.
      </div>
    </div>
  )
}
