function SectionTitle({ number, label, children, description, aside }) {
  return (
    <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-accent-ink)]">
          {number} <span className="px-1 text-[var(--color-muted)]">/</span> {label}
        </p>
        <h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl">{children}</h2>
        {description && <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--color-muted)] sm:text-base">{description}</p>}
      </div>
      {aside && <div className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--color-muted)]">{aside}</div>}
    </div>
  )
}

export default SectionTitle
