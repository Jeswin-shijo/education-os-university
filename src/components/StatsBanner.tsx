import { useEffect, useRef, useState } from 'react'
import buildingImg from '../assets/images/building.png'
import './StatsBanner.css'

/* ── Data ──────────────────────────────────────── */
interface StatData {
  id: number
  value: number
  suffix: string
  label: string
}

const statsData: StatData[] = [
  { id: 1, value: 25,   suffix: '+',  label: 'Years of History' },
  { id: 2, value: 100,  suffix: '+',  label: 'Acres Lush Green Campus' },
  { id: 3, value: 250,  suffix: '+',  label: 'Recruiting Partners' },
  { id: 4, value: 550,  suffix: '+',  label: 'Highly Qualified Faculty' },
  { id: 5, value: 20,   suffix: 'k+', label: 'Alumni Across the Globe' },
]

/* ── Count-up hook ────────────────────────────── */
function useCountUp(end: number, start: boolean, duration = 2000): number {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let frame: number
    const t0 = performance.now()

    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3) // ease-out cubic
      setCount(Math.round(end * eased))
      if (p < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [end, start, duration])

  return count
}

/* ── Single stat item ─────────────────────────── */
function StatItem({
  value,
  suffix,
  label,
  start,
}: {
  value: number
  suffix: string
  label: string
  start: boolean
}) {
  const count = useCountUp(value, start)

  return (
    <div className="stats-banner__item">
      <p className="stats-banner__value">
        {count}
        {suffix}
      </p>
      <p className="stats-banner__label">{label}</p>
    </div>
  )
}

/* ── Main component ───────────────────────────── */
export default function StatsBanner() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="stats-banner">
      <div ref={ref} className="stats-banner__card">
        {/* Stats grid */}
        <div className="stats-banner__grid">
          {statsData.map((item) => (
            <StatItem key={item.id} {...item} start={inView} />
          ))}
        </div>

        {/* Building cutout image */}
        <div className="stats-banner__image-wrap">
          <img
            src={buildingImg}
            alt="DSU Campus building"
            className="stats-banner__image"
          />
        </div>
      </div>
    </section>
  )
}
