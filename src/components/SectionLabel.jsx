export default function SectionLabel({ index, children, tone = 'dark' }) {
  return (
    <p className={`section-label section-label--${tone}`}>
      <span className="section-label__dot" aria-hidden="true" />
      <span className="section-label__index">{index}</span>
      <span className="section-label__text">{children}</span>
    </p>
  )
}
