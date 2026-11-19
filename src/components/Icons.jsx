const strokeProps = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
}

export function ArrowUpRight({ size = 20 }) {
  return (
    <svg {...strokeProps} width={size} height={size}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  )
}

export function ArrowDown({ size = 20 }) {
  return (
    <svg {...strokeProps} width={size} height={size}>
      <path d="M12 4v16" />
      <path d="m6 14 6 6 6-6" />
    </svg>
  )
}

export function ArrowUp({ size = 20 }) {
  return (
    <svg {...strokeProps} width={size} height={size}>
      <path d="M12 20V4" />
      <path d="m6 10 6-6 6 6" />
    </svg>
  )
}

export function SunIcon({ size = 24 }) {
  return (
    <svg {...strokeProps} width={size} height={size}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  )
}

export function CpuIcon({ size = 24 }) {
  return (
    <svg {...strokeProps} width={size} height={size}>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <rect x="9.5" y="9.5" width="5" height="5" rx="1" />
      <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
    </svg>
  )
}

export function MonitorIcon({ size = 24 }) {
  return (
    <svg {...strokeProps} width={size} height={size}>
      <rect x="2.5" y="4" width="19" height="13" rx="2" />
      <path d="M8 21h8M12 17v4M6.5 10.5h2l1.5-3 2.5 6 1.5-3h3.5" />
    </svg>
  )
}

export function CompassIcon({ size = 24 }) {
  return (
    <svg {...strokeProps} width={size} height={size}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </svg>
  )
}

export function CheckIcon({ size = 24 }) {
  return (
    <svg {...strokeProps} width={size} height={size}>
      <path d="m4 12.5 5 5L20 6.5" />
    </svg>
  )
}

export function MailIcon({ size = 20 }) {
  return (
    <svg {...strokeProps} width={size} height={size}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  )
}

export function WhatsAppIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  )
}

export function PinIcon({ size = 20 }) {
  return (
    <svg {...strokeProps} width={size} height={size}>
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

export function MenuIcon({ size = 24 }) {
  return (
    <svg {...strokeProps} width={size} height={size}>
      <path d="M4 8h16M4 16h16" />
    </svg>
  )
}

export function CloseIcon({ size = 24 }) {
  return (
    <svg {...strokeProps} width={size} height={size}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  )
}

export function PlayIcon({ size = 18 }) {
  return (
    <svg {...strokeProps} width={size} height={size}>
      <path d="M8 5.5v13l10-6.5-10-6.5Z" />
    </svg>
  )
}

export function PauseIcon({ size = 18 }) {
  return (
    <svg {...strokeProps} width={size} height={size}>
      <path d="M9 5v14M15 5v14" />
    </svg>
  )
}
