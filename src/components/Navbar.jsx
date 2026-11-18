import { useEffect, useRef, useState } from 'react'
import Logo from './Logo'
import { ArrowUpRight, CloseIcon, MenuIcon } from './Icons'

const links = [
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#soluciones', label: 'Soluciones' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const toggleRef = useRef(null)
  const menuRef = useRef(null)
  const restoreFocus = useRef(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-42% 0px -52% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const menu = menuRef.current
    const focusable = menu
      ? Array.from(menu.querySelectorAll('a[href], button:not([disabled])'))
      : []
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    const focusTimer = window.setTimeout(() => first?.focus(), 60)

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        restoreFocus.current = true
        setOpen(false)
        return
      }

      if (event.key !== 'Tab' || !focusable.length) return

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
      window.clearTimeout(focusTimer)
    }
  }, [open])

  useEffect(() => {
    if (!open && restoreFocus.current) {
      restoreFocus.current = false
      toggleRef.current?.focus()
    }
  }, [open])

  const closeMenu = (shouldRestoreFocus = false) => {
    restoreFocus.current = shouldRestoreFocus
    setOpen(false)
  }

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="shell site-header__inner">
          <a className="site-header__brand" href="#inicio" aria-label="RDS, ir al inicio">
            <Logo />
          </a>

          <nav className="nav" aria-label="Navegación principal">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={active === link.href ? 'location' : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="site-header__actions">
            <a className="btn btn--sun btn--small header-cta" href="#contacto">
              Escribinos
              <ArrowUpRight size={16} />
            </a>
            <button
              ref={toggleRef}
              type="button"
              className="menu-toggle"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label="Abrir menú"
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          ref={menuRef}
          id="mobile-menu"
          className="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
        >
          <div className="shell mobile-menu__top">
            <a
              href="#inicio"
              aria-label="RDS, ir al inicio"
              onClick={() => closeMenu(false)}
            >
              <Logo />
            </a>
            <button
              type="button"
              className="icon-button"
              aria-label="Cerrar menú"
              onClick={() => closeMenu(true)}
            >
              <CloseIcon />
            </button>
          </div>

          <nav className="shell mobile-menu__nav" aria-label="Navegación móvil">
            {links.map((link, index) => (
              <a key={link.href} href={link.href} onClick={() => closeMenu(false)}>
                {link.label}
                <span aria-hidden="true">0{index + 1}</span>
              </a>
            ))}
          </nav>

          <div className="shell mobile-menu__footer">
            <p>Villa Lago Meliquina · Neuquén, Argentina</p>
            <a className="mobile-menu__email" href="mailto:contacto@rds.ar">
              contacto@rds.ar
            </a>
            <a
              className="btn btn--sun"
              href="#contacto"
              onClick={() => closeMenu(false)}
            >
              Escribinos
              <ArrowUpRight />
            </a>
          </div>
        </div>
      )}
    </>
  )
}
