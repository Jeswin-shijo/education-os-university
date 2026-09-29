import { recruiters } from '../data/siteData'
import './Recruiters.css'

export default function Recruiters() {
  return (
    <section className="recruiters">
      <div className="recruiters__band" aria-hidden="true" />
      <div className="recruiters__inner page">
        <h2 className="recruiters__title">Our Prominent Recruiters</h2>
        <div className="recruiters__card">
          <p className="recruiters__caption">PLACEMENTS IN 250+ GLOBAL ORGANIZATIONS</p>
          <ul className="recruiters__grid">
            {recruiters.map((r) => (
              <li key={r.name}>
                <img src={r.logo} alt={r.name} style={{ height: r.height }} loading="lazy" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
