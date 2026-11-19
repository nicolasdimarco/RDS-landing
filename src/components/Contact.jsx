import { useState } from 'react'
import SectionLabel from './SectionLabel'
import {
  ArrowUpRight,
  CheckIcon,
  PinIcon,
  SunIcon,
  WhatsAppIcon,
} from './Icons'

const WHATSAPP_NUMBER = '5492972544498'
const WHATSAPP_DISPLAY = '+54 9 2972 54-4498'
const WHATSAPP_MESSAGE =
  'Hola RDS, quiero hacer una consulta sobre energía solar y automatización.'
const EMPTY_FORM = { name: '', email: '', message: '' }

function buildWhatsAppUrl({ name, email, message } = {}) {
  const lines = [WHATSAPP_MESSAGE]

  if (name?.trim() || email?.trim() || message?.trim()) {
    lines.push('')
    if (name?.trim()) lines.push(`Nombre: ${name.trim()}`)
    if (email?.trim()) lines.push(`Email: ${email.trim()}`)
    if (message?.trim()) lines.push('', message.trim())
  }

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`
}

const WHATSAPP_URL = buildWhatsAppUrl()

function validate(values) {
  const errors = {}

  if (values.name.trim().length < 2) {
    errors.name = 'Contanos tu nombre.'
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = 'Ingresá un email válido.'
  }

  if (values.message.trim().length < 10) {
    errors.message = 'Contanos un poco más (mínimo 10 caracteres).'
  }

  return errors
}

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [sentName, setSentName] = useState('')
  const [sentUrl, setSentUrl] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))

    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: undefined }))
    }
  }

  const handleBlur = (event) => {
    const { name } = event.target
    const fieldErrors = validate(form)
    setErrors((current) => ({ ...current, [name]: fieldErrors[name] }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length) {
      const firstField = Object.keys(nextErrors)[0]
      document.getElementById(`field-${firstField}`)?.focus()
      return
    }

    const url = buildWhatsAppUrl(form)
    setSentName(form.name.trim().split(' ')[0])
    setSentUrl(url)
    setForm(EMPTY_FORM)
    setStatus('success')
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contacto" className="section contact" aria-labelledby="contacto-title">
      <div className="shell">
        <SectionLabel index="03" tone="light">
          Contacto
        </SectionLabel>

        <div className="contact__head">
          <h2 id="contacto-title" data-reveal>
            Contanos qué tenés{' '}
            <span>en mente.</span>
          </h2>
          <p data-reveal style={{ '--delay': '0.12s' }}>
            Escribinos y coordinamos un diagnóstico sin cargo. Si estás en la zona,
            pasamos a ver tu terreno, tu instalación y tu consumo.
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact__form-wrap" data-reveal>
            {status === 'success' ? (
              <div className="form-success" role="status" aria-live="polite">
                <span className="form-success__icon" aria-hidden="true">
                  <CheckIcon size={28} />
                </span>
                <h3>¡Gracias{sentName ? `, ${sentName}` : ''}! Tu consulta está lista.</h3>
                <p>
                  Abrimos WhatsApp con tu mensaje para que lo envíes. Si no se abrió,
                  usá el botón de abajo.
                </p>
                <a
                  className="btn btn--sun"
                  href={sentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Abrir WhatsApp
                  <ArrowUpRight />
                </a>
                <button
                  type="button"
                  className="btn btn--outline-light"
                  onClick={() => setStatus('idle')}
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className={`field ${errors.name ? 'is-invalid' : ''}`}>
                  <label htmlFor="field-name">
                    Nombre
                    <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="field-name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Cómo te llamás"
                    autoComplete="name"
                    required
                    aria-required="true"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <span id="name-error" className="field__error">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className={`field ${errors.email ? 'is-invalid' : ''}`}>
                  <label htmlFor="field-email">
                    Email
                    <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="field-email"
                    name="email"
                    type="email"
                    inputMode="email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="tu@email.com"
                    autoComplete="email"
                    required
                    aria-required="true"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <span id="email-error" className="field__error">
                      {errors.email}
                    </span>
                  )}
                </div>

                <div className={`field ${errors.message ? 'is-invalid' : ''}`}>
                  <label htmlFor="field-message">
                    Consulta
                    <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="field-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Contanos qué necesitás: consumo, terreno, una instalación existente…"
                    rows="4"
                    required
                    aria-required="true"
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <span id="message-error" className="field__error">
                      {errors.message}
                    </span>
                  )}
                </div>

                <div className="form-actions">
                  <button className="btn btn--sun" type="submit">
                    Enviar consulta
                    <ArrowUpRight />
                  </button>
                  <p className="form-note">
                    Se abrirá WhatsApp con tu consulta para que la envíes.
                  </p>
                </div>
              </form>
            )}
          </div>

          <aside className="contact__aside" data-reveal style={{ '--delay': '0.1s' }}>
            <div className="contact__block">
              <p className="contact__kicker">WhatsApp</p>
              <a
                className="contact__whatsapp"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon size={22} />
                {WHATSAPP_DISPLAY}
                <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="contact__block">
              <p className="contact__kicker">Base</p>
              <p className="contact__place">
                <PinIcon size={20} />
                <span>
                  Villa Lago Meliquina
                  <br />
                  Neuquén, Patagonia Argentina
                </span>
              </p>
            </div>

            <div className="contact__badge">
              <SunIcon size={20} />
              Diagnóstico y asesoramiento sin cargo
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
