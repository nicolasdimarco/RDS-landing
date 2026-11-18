import SectionLabel from './SectionLabel'
import {
  ArrowUpRight,
  CompassIcon,
  CpuIcon,
  MonitorIcon,
  SunIcon,
} from './Icons'

const solutions = [
  {
    icon: SunIcon,
    title: 'Sistemas solares a medida',
    text: 'Dimensionamos cada instalación para el invierno de Meliquina: días cortos, nieve y varios días nublados. Autonomía real, no promesas de verano.',
    tag: 'Diseño + instalación',
  },
  {
    icon: CpuIcon,
    title: 'Automatización e IoT',
    text: 'Programamos decisiones inteligentes: cuándo encender la bomba, cómo cuidar las baterías y cómo aprovechar el pronóstico. Tu casa usa mejor la energía que tenés.',
    tag: 'Energía inteligente',
  },
  {
    icon: MonitorIcon,
    title: 'Monitoreo y posventa',
    text: 'Seguimos tu sistema de forma remota 24/7, detectamos anomalías y recomendamos mejoras con datos reales. La instalación es el comienzo de la relación.',
    tag: 'Seguimiento continuo',
  },
  {
    icon: CompassIcon,
    title: 'Diagnóstico y asesoramiento',
    text: 'Evaluamos orientación, inclinación, sombras y hábitos de consumo antes de que compres nada. Asesoramiento profesional sin cargo.',
    tag: 'Sin cargo',
  },
]

export default function Solutions() {
  return (
    <section id="soluciones" className="section solutions" aria-labelledby="soluciones-title">
      <div className="shell">
        <SectionLabel index="02">Soluciones</SectionLabel>

        <div className="solutions__head">
          <h2 id="soluciones-title" data-reveal>
            No vendemos equipos.{' '}
            <span>Diseñamos soluciones.</span>
          </h2>
          <p data-reveal style={{ '--delay': '0.12s' }}>
            Cada casa, cada terreno y cada familia son distintos. Por eso combinamos
            energía solar, automatización y datos para armar un sistema que se adapte a tu
            forma de vivir.
          </p>
        </div>

        <div className="solutions__list">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <article
                key={solution.title}
                className="solution"
                data-reveal
                style={{ '--delay': `${index * 0.06}s` }}
              >
                <span className="solution__number" aria-hidden="true">
                  0{index + 1}
                </span>
                <div className="solution__main">
                  <div className="solution__heading">
                    <span className="solution__icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <h3>{solution.title}</h3>
                  </div>
                  <p>{solution.text}</p>
                  <span className="solution__tag">{solution.tag}</span>
                </div>
                <span className="solution__arrow" aria-hidden="true">
                  <ArrowUpRight size={26} />
                </span>
              </article>
            )
          })}
        </div>

        <div className="solutions__cta" data-reveal>
          <p>
            <strong>¿No sabés por dónde empezar?</strong> Empezá por un diagnóstico sin
            cargo. Vemos tu caso y te decimos qué conviene hacer.
          </p>
          <a className="btn btn--ink" href="#contacto">
            Pedí tu diagnóstico
            <ArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  )
}
