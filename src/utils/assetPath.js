const baseUrl = import.meta.env.BASE_URL

export function asset(path) {
  return `${baseUrl}${path.replace(/^\//, '')}`
}
