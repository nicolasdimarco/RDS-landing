import { asset } from '../utils/assetPath'

export default function Manifesto() {
  return (
    <section className="manifesto" aria-labelledby="manifesto-title">
      <picture className="manifesto__picture">
        <source
          type="image/avif"
          srcSet={`${asset('assets/stills/desafio-960.avif')} 960w, ${asset(
            'assets/stills/desafio-1800.avif',
          )} 1800w`}
          sizes="100vw"
        />
        <source
          type="image/webp"
          srcSet={`${asset('assets/stills/desafio-960.webp')} 960w, ${asset(
            'assets/stills/desafio-1800.webp',
          )} 1800w`}
          sizes="100vw"
        />
        <img
          src={asset('assets/stills/desafio-1800.jpg')}
          alt=""
          width="1800"
          height="2400"
          loading="lazy"
          decoding="async"
        />
      </picture>
      <div className="manifesto__overlay" aria-hidden="true" />
      <div className="shell manifesto__content" data-reveal>
        <p className="manifesto__eyebrow">Lo que nos mueve</p>
        <blockquote id="manifesto-title">
          El verdadero desafío solar no es el verano. <span>Es el invierno.</span>
        </blockquote>
        <p className="manifesto__text">
          Por eso pensamos cada sistema para el escenario más exigente. Sin promesas de
          verano, con autonomía real cuando más la necesitás.
        </p>
      </div>
    </section>
  )
}
