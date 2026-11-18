const items = [
  'Energía solar',
  'Automatización IoT',
  'Monitoreo 24/7',
  'Diseño a medida',
  'Villa Lago Meliquina',
]

function Group() {
  return (
    <div className="marquee__group">
      {items.map((item) => (
        <span key={item} className="marquee__item">
          {item}
          <span className="marquee__dot" aria-hidden="true" />
        </span>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        <Group />
        <Group />
      </div>
    </div>
  )
}
