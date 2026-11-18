import { asset } from '../utils/assetPath'

export default function Manifesto() {
  return (
    <section className="manifesto" aria-labelledby="manifesto-title">
      <picture className="manifesto__picture">
        <source type="image/avif" srcSet={asset('assets/stills/meliquina-casa.avif')} />
        <source type="image/webp" srcSet={asset('assets/stills/meliquina-casa.webp')} />
        <img
          src={asset('assets/stills/meliquina-casa.jpg')}
          alt=""
          width="960"
          height="540"
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
