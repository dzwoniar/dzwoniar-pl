export default function PullQuote({ children }) {
  return (
    <blockquote className="border-l-4 border-accent pl-6 py-2 my-8">
      <p className="text-xl md:text-2xl font-display font-normal text-warm-white leading-relaxed italic">
        {children}
      </p>
    </blockquote>
  )
}
