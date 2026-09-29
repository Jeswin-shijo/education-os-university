import { useEffect, useRef, type CSSProperties } from 'react'

/**
 * Marks every `[data-reveal]` element inside the returned ref with `data-revealed`
 * the first time it scrolls into view; CSS turns that attribute into the entrance
 * animation. A data attribute is used (not a class) so React re-renders that change
 * `className`, e.g. switching the active campus tab, never undo a reveal.
 */
export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return
    const targets = root.querySelectorAll<HTMLElement>('[data-reveal]')
    const reveal = (el: Element) => el.setAttribute('data-revealed', '')

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || !('IntersectionObserver' in window)) {
      targets.forEach(reveal)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          reveal(entry.target)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )
    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return ref
}

/** Stagger index for a revealed element; CSS multiplies it into the animation delay. */
export function stagger(i: number): CSSProperties {
  return { '--i': i } as CSSProperties
}

/**
 * Normalises every shape in an SVG icon to a path length of 1, so a stroke-dash
 * "drawing" animation takes the same time whatever the icon's real geometry.
 */
export function normalizePathLength(svg: SVGSVGElement | null) {
  svg?.querySelectorAll('path, circle, line, rect, polyline, ellipse').forEach((shape) => {
    shape.setAttribute('pathLength', '1')
  })
}
