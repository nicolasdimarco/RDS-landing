import Logo from './Logo'
import { ArrowUp, ArrowUpRight } from './Icons'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__top">
          <a href="#inicio" aria-label="RDS, ir al inicio">
            <Logo />
          </a>
          <p className="footer__tagline">
            Sistemas solares y automatización para vivir todo el año en la Patagonia.
          </p>
        </div>

        <div className="footer__cols">
          <div className="footer__block">
            <h3>Navegación</h3>
            <nav className="footer__links" aria-label="Navegación del pie de página">
              <a href="#inicio">Inicio</a>
              <a href="#nosotros">Nosotros</a>
              <a href="#soluciones">Soluciones</a>
              <a href="#contacto">Contacto</a>
            </nav>
          </div>

          <div className="footer__block">
            <h3>Contacto</h3>
            <div className="footer__links">
              <a href="mailto:contacto@rds.ar">contacto@rds.ar</a>
              <a href="#contacto">
                Pedir diagnóstico
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          <div className="footer__block">
            <h3>Dónde estamos</h3>
            <p className="footer__place">
              Villa Lago Meliquina
              <br />
              Neuquén, Argentina
            </p>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {year} RDS · Energía y automatización</p>
          <a href="#inicio">
            Volver arriba
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
