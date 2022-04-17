import { useEffect, useState } from 'react'

export default function useMedia(queries, values, defaultValue) {
  const match = () =>
    values[
      queries.findIndex((q) => {
        if (typeof window !== 'undefined') {
          return matchMedia(q).matches
        } else {
          return -1
        }
      })
    ] || defaultValue
  const [value, set] = useState(match)
  useEffect(() => {
    const handler = () => set(match)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)

    // eslint-disable-next-line
  }, [match])
  return value
}
