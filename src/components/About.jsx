import { asset } from '../utils/assetPath'
import SectionLabel from './SectionLabel'

const values = [
  {
    title: 'Diagnóstico sin cargo',
    text: 'Evaluamos consumos, orientación y sombras antes de que compres cualquier equipo.',
  },
  {
    title: 'Diseño pensado para el invierno',
    text: 'Autonomía real para días cortos, nieve y varios días nublados.',
  },
  {
    title: 'Automatización que suma',
    text: 'IoT para decidir mejor cuándo y cómo usar la energía disponible.',
  },
]

const stats = [
  { value: '+40', label: 'instalaciones en la zona' },
  { value: '+5', label: 'años viviendo en Meliquina' },
  { value: '24/7', label: 'monitoreo remoto sin cargo' },
  { value: '4 h', label: 'de grupo electrógeno en todo un año*' },
]

export default function About() {
  return (
    <section id="nosotros" className="section about" aria-labelledby="nosotros-title">
      <div className="shell">
        <SectionLabel index="01">Nosotros</SectionLabel>

        <div className="about__intro">
          <h2 id="nosotros-title" data-reveal>
            Vivimos acá.{' '}
            <span>Diseñamos para acá.</span>
          </h2>
          <div className="about__lead" data-reveal style={{ '--delay': '0.12s' }}>
            <p>
              Somos profesionales con residencia en Meliquina. No vendemos paneles y
              baterías: diseñamos soluciones energéticas para cada familia y para vivir
              cómodamente todo el año.
            </p>
            <p>
              El proyecto nació acá, impulsado por gente que enfrenta los mismos desafíos
              que vos: días cortos, heladas, nieve y la necesidad de que la energía esté
              cuando hace falta.
            </p>
          </div>
        </div>

        <div className="about__body">
          <figure className="about__visual" data-reveal>
            <div className="about__frame">
              <picture>
                <source
                  type="image/avif"
                  srcSet={asset('assets/stills/meliquina-invierno.avif')}
                />
                <source
                  type="image/webp"
                  srcSet={asset('assets/stills/meliquina-invierno.webp')}
                />
                <img
                  src={asset('assets/stills/meliquina-invierno.jpg')}
                  alt="Vista aérea del paisaje de Villa Lago Meliquina en invierno"
                  width="960"
                  height="540"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
            <figcaption className="about__caption">
              <span className="about__caption-number">+5</span>
              <span>años viviendo en Meliquina, todo el año</span>
            </figcaption>
          </figure>

          <div className="about__copy" data-reveal style={{ '--delay': '0.12s' }}>
            <h3>El invierno no es una excepción. Es el punto de partida.</h3>
            <p>
              Más de 40 instalaciones en la zona nos enseñaron a dimensionar para el peor
              escenario, no para el verano ideal. Y a sumar automatizaciones que optimizan
              el uso de la energía y complementan el sistema solar.
            </p>
            <p>
              Seguimos cada sistema de forma remota, leemos los datos reales de consumo y
              recomendamos mejoras. La instalación es solo el comienzo.
            </p>

            <ul className="about__list">
              {values.map((value, index) => (
                <li key={value.title}>
                  <span className="about__list-index" aria-hidden="true">
                    0{index + 1}
                  </span>
                  <div>
                    <strong>{value.title}</strong>
                    <p>{value.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="stats-band" data-reveal>
        <div className="shell">
          <div className="stats">
            {stats.map((stat) => (
              <div key={stat.label} className="stat">
                <span className="stat__value">{stat.value}</span>
                <span className="stat__label">{stat.label}</span>
              </div>
            ))}
          </div>
          <p className="stats__note">
            *En instalaciones diseñadas a medida, según los datos de nuestro monitoreo
            remoto.
          </p>
        </div>
      </div>
    </section>
  )
}
