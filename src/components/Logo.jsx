import { asset } from '../utils/assetPath'

export default function Logo({ alt = '' }) {
  return (
    <img
      className="logo"
      src={asset('assets/logo.webp')}
      alt={alt}
      width="400"
      height="127"
      decoding="async"
      fetchPriority="high"
    />
  )
}
