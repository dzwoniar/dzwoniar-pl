export default function AssetPlaceholder({ name, description, format, aspectRatio = '16/9', className = '' }) {
  return (
    <div
      className={`relative bg-surface border border-white/5 rounded-lg overflow-hidden ${className}`}
      style={{ aspectRatio }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-10 h-10 mb-4 rounded-full bg-accent/10 flex items-center justify-center">
          <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
          </svg>
        </div>
        <span className="text-xs font-body font-semibold text-accent uppercase tracking-wider mb-2">
          {name}
        </span>
        <p className="text-sm text-muted leading-relaxed max-w-md">
          {description}
        </p>
        {format && (
          <p className="text-xs text-muted-dim mt-2">{format}</p>
        )}
      </div>
      <div className="absolute inset-0 border-2 border-dashed border-muted-dim/20 rounded-lg pointer-events-none m-3" />
    </div>
  )
}
