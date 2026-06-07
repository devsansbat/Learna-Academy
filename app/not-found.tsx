import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-xl text-center rounded-3xl bg-white p-10 shadow-lg">
        <h1 className="text-6xl font-black text-primary-600 mb-4">404</h1>
        <p className="text-xl font-semibold mb-4">This page could not be found.</p>
        <p className="text-gray-600 mb-8">
          The link you followed may be broken, or the page may have been removed. Go back to the home page to see the latest features.
        </p>
        <Link href="/" className="inline-flex items-center justify-center rounded-full bg-primary-500 px-6 py-3 text-white font-semibold shadow hover:bg-primary-600 transition">
          Go to Home
        </Link>
      </div>
    </main>
  )
}
