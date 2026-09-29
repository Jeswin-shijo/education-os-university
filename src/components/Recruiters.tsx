import type { CSSProperties } from 'react'
import { recruiters } from '../data/siteData'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Recruiters.css'

const COLUMNS = 6

export default function Recruiters() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className="recruiters">
      <div className="recruiters__band" aria-hidden="true" />
      <div className="recruiters__inner page">
        <h2 className="recruiters__title" data-reveal="up">
          Our Prominent Recruiters
        </h2>
        <div className="recruiters__card" data-reveal="card">
          <p className="recruiters__caption">PLACEMENTS IN 250+ GLOBAL ORGANIZATIONS</p>
          <ul className="recruiters__grid">
            {recruiters.map((r, i) => (
              // --wave = row + column, so logos arrive as a diagonal wave from the top-left
              <li key={r.name} style={{ '--wave': Math.floor(i / COLUMNS) + (i % COLUMNS) } as CSSProperties}>
                <img src={r.logo} alt={r.name} style={{ height: r.height }} loading="lazy" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
