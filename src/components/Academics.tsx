import type { CSSProperties } from 'react'
import type { LucideIcon } from 'lucide-react'
import { ArrowRight, Cpu, Microscope, PersonStanding, Pill, Stethoscope } from 'lucide-react'
import { academics, images, placement, type AcademicIcon, type AcademicProgram } from '../data/siteData'
import { normalizePathLength, stagger, useScrollReveal } from '../hooks/useScrollReveal'
import './Academics.css'

const programIcons: Record<AcademicIcon, LucideIcon> = {
  engineering: Cpu,
  nursing: Stethoscope,
  pharmacy: Pill,
  'allied-health': Microscope,
  physiotherapy: PersonStanding,
}

const ACADEMICS_TITLE = 'ACADEMICS'

function mediaVariant(program: AcademicProgram) {
  if (!program.image) return 'art'
  return program.bannerOnPoster ? 'poster' : 'photo'
}

export default function Academics() {
  const academicsRef = useScrollReveal<HTMLElement>()
  const placementRef = useScrollReveal<HTMLElement>()

  return (
    <>
      <section ref={academicsRef} className="academics page">
        <h2 className="academics__title" data-reveal="letters" aria-label={ACADEMICS_TITLE}>
          {[...ACADEMICS_TITLE].map((letter, i) => (
            <span key={i} className="academics__letter" style={{ '--c': i } as CSSProperties} aria-hidden="true">
              {letter}
            </span>
          ))}
        </h2>

        <div className="academics__grid">
          {academics.map((program, i) => {
            const Icon = programIcons[program.icon]
            const variant = mediaVariant(program)
            return (
              <article key={program.name} className="program-card" data-reveal="card" style={stagger(i % 3)}>
                <div className={`program-card__media program-card__media--${variant}`}>
                  {program.image ? (
                    <img src={program.image} alt="" width={400} height={344} />
                  ) : (
                    <Icon ref={normalizePathLength} className="program-card__icon" strokeWidth={1.1} aria-hidden="true" />
                  )}
                  <span className="program-card__banner" aria-hidden="true">
                    {program.bannerLines.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </span>
                </div>
                <h3 className="program-card__name">{program.name}</h3>
                <a href="#" className="pill-btn">
                  Read More <ArrowRight size={17} strokeWidth={2} />
                </a>
              </article>
            )
          })}
        </div>
      </section>

      <section ref={placementRef} className="placement page">
        <div className="placement__media" data-reveal="curtain">
          <img src={images.campusAerial} alt="Aerial view of the Dhanalakshmi Srinivasan University campus" />
        </div>
        <div className="placement__panel" data-reveal="right">
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
