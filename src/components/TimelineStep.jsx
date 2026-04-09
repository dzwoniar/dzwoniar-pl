export default function TimelineStep({ number, title, children, isLast = false }) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center flex-shrink-0">
          <span className="text-xs font-body font-semibold text-accent">{number}</span>
        </div>
        {!isLast && <div className="w-px flex-1 bg-muted-dim/30 mt-2" />}
      </div>
      <div className={`pb-8 ${isLast ? '' : ''}`}>
        <h4 className="text-lg font-body font-semibold text-warm-white mb-1">{title}</h4>
        <div className="text-muted text-sm leading-relaxed font-body">{children}</div>
      </div>
    </div>
  )
}
