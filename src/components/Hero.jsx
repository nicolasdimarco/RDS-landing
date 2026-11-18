import { useEffect, useRef, useState } from 'react'
import { asset } from '../utils/assetPath'
import { ArrowDown, ArrowUpRight, PauseIcon, PlayIcon } from './Icons'

const stats = [
  { value: '+40', label: 'instalaciones en la zona' },
  { value: '24/7', label: 'monitoreo remoto' },
  { value: '+5', label: 'años viviendo en Meliquina' },
]

function getVideoSource() {
  if (
    typeof window !== 'undefined' &&
    window.matchMedia('(max-width: 700px)').matches
  ) {
    return asset('assets/drone-video-mobile.mp4')
  }

  return asset('assets/drone-video.mp4')
}

export default function Hero() {
  const videoRef = useRef(null)
  const [videoSource] = useState(getVideoSource)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      video.pause()
      return
    }

    const playPromise = video.play()
    if (playPromise?.catch) {
      playPromise.catch(() => setPlaying(false))
    }
  }, [])

  const toggleVideo = () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      video.play().catch(() => setPlaying(false))
    } else {
      video.pause()
    }
  }

  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="hero__media">
        <video
          ref={videoRef}
          className="hero__video"
          src={videoSource}
          poster={asset('assets/drone-poster.avif')}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />
        <div className="hero__scrim" aria-hidden="true" />
        <div className="hero__sun" aria-hidden="true" />
      </div>

      <div className="shell hero__content">
        <p className="hero__eyebrow">
          <span aria-hidden="true" />
          Villa Lago Meliquina · Patagonia
        </p>

        <h1 id="hero-title">
          <span className="hero__line">Tu proyecto con</span>{' '}
          <span className="hero__line hero__line--accent">energías renovables</span>{' '}
          <span className="hero__line">hecho realidad.</span>
        </h1>

        <p className="hero__lede">
          Diseñamos sistemas solares y automatizaciones IoT que funcionan todo el año,
          incluso cuando el invierno aprieta.
        </p>

        <div className="hero__actions">
          <a className="btn btn--sun" href="#contacto">
            Escribinos
            <ArrowUpRight />
          </a>
          <a className="btn btn--ghost" href="#nosotros">
            Conocé cómo trabajamos
          </a>
        </div>
      </div>

      <div className="shell hero__footer">
        <dl className="hero__stats">
          {stats.map((stat) => (
            <div key={stat.label} className="hero__stat">
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>

        <div className="hero__tools">
          <button
            type="button"
            className="video-toggle"
            onClick={toggleVideo}
            aria-label={playing ? 'Pausar video de fondo' : 'Reproducir video de fondo'}
          >
            <span className="video-toggle__icon" aria-hidden="true">
              {playing ? <PauseIcon /> : <PlayIcon />}
            </span>
            <span>{playing ? 'Pausar video' : 'Reproducir video'}</span>
          </button>

          <a className="scroll-cue" href="#nosotros">
            <span>Descubrí más</span>
            <ArrowDown />
          </a>
        </div>
      </div>
    </section>
  )
}
