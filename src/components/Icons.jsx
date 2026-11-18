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
