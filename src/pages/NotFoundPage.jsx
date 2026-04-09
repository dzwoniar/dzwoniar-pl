import { Link } from 'react-router-dom'
import { m } from 'framer-motion'

export default function NotFoundPage() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-[80vh] flex items-center justify-center px-6"
    >
      <div className="text-center">
        <p className="text-8xl font-display font-bold text-accent mb-4">404</p>
        <h1 className="text-2xl font-display font-normal text-warm-white mb-3">
          Strona nie istnieje
        </h1>
        <p className="text-muted font-body mb-8 max-w-md mx-auto">
          Strona, której szukasz, mogła zostać przeniesiona lub nie istnieje.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 border border-accent text-accent font-body text-sm uppercase tracking-[0.2em] rounded hover:bg-accent hover:text-warm-white transition-colors duration-300"
        >
          Strona główna
        </Link>
      </div>
    </m.div>
  )
}
