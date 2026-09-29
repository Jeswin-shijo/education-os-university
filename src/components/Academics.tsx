import { ArrowRight } from 'lucide-react'
import { academics, images, placement } from '../data/siteData'
import './Academics.css'

export default function Academics() {
  return (
    <>
      <section className="academics page">
        <h2 className="academics__title">ACADEMICS</h2>
        <div className="academics__grid">
          {academics.map((program, i) => (
            <article key={i} className="program-card">
              <img src={program.image} alt={program.title} width={400} height={344} />
              <a href="#" className="pill-btn">
                Read More <ArrowRight size={17} strokeWidth={2} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="placement page">
        <div className="placement__media">
          <img src={images.campusAerial} alt="Aerial view of the Dhanalakshmi Srinivasan University campus" />
        </div>
        <div className="placement__panel">
          <h2 className="placement__title">
            {placement.titleLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <a href="#" className="pill-btn">
            Read More <ArrowRight size={17} strokeWidth={2} />
          </a>
        </div>
      </section>
    </>
  )
}
