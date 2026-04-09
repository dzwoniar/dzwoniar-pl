export default function MetricCard({ value, unit = '', label }) {
  return (
    <div className="bg-surface border border-white/5 rounded-lg p-6 shadow-card">
      <div className="flex items-baseline gap-1.5">
        <span className="text-3xl md:text-4xl font-body font-bold text-warm-white">
          {value}
        </span>
        {unit && (
          <span className="text-lg text-muted font-body">{unit}</span>
        )}
      </div>
      <p className="text-sm text-muted mt-1.5 font-body">{label}</p>
      <div className="h-0.5 w-8 bg-accent/40 mt-3 rounded-full" />
    </div>
  )
}
