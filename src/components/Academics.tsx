import { type CSSProperties, useCallback, useEffect, useRef } from 'react'
import type { LucideIcon } from 'lucide-react'
import { ArrowRight, Cpu, Microscope, PersonStanding, Pill, Stethoscope } from 'lucide-react'
import { academics, images, placement, type AcademicIcon, type AcademicProgram } from '../data/siteData'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { getPose, useCardFan } from '../hooks/useCardFan'
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

/** Card colour palettes — gradient top-left highlight and body colour */
const CARD_COLORS: { c1: string; c2: string }[] = [
  { c1: '#1a5cb0', c2: '#0d3a7a' },   // Engineering — deep blue
  { c1: '#7e3fa8', c2: '#561f8a' },   // Nursing — violet
  { c1: '#2a8f6a', c2: '#16734e' },   // Pharmacy — teal
  { c1: '#c44820', c2: '#a03218' },   // Allied Health — warm red
  { c1: '#d49b10', c2: '#b07e08' },   // Physiotherapy — amber
]

export default function Academics() {
  const placementRef = useScrollReveal<HTMLElement>()
  const stageRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const N = academics.length
  const { fanState, topIdx, onPointerEnter, onPointerMove, onPointerLeave, onVisible } = useCardFan(N)

  /* Start autoplay when the section scrolls into view */
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onVisible()
          observer.disconnect()
        }
      },
      { threshold: 0.25 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [onVisible])

  /* Resolve which card index the pointer is over */
  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      const card = (e.target as HTMLElement).closest<HTMLElement>('.fan-card')
      onPointerMove(card ? Number(card.dataset.index) : null)
    },
    [onPointerMove],
  )

  return (
    <>
      <section ref={sectionRef} className="academics page">
        <h2 className="academics__title" data-reveal="letters" aria-label={ACADEMICS_TITLE}>
          {ACADEMICS_TITLE.split('').map((letter, i) => (
            <span key={i} className="academics__letter" style={{ '--c': i } as CSSProperties} aria-hidden="true">
              {letter}
            </span>
          ))}
        </h2>

        <div
          ref={stageRef}
          className="fan-stage"
          aria-label="Academic programs fan-out"
          onPointerEnter={onPointerEnter}
          onPointerMove={handlePointerMove}
          onPointerLeave={onPointerLeave}
          style={
            {
              '--fan-dur': fanState.motion.dur,
              '--fan-ease': fanState.motion.ease,
            } as CSSProperties
          }
        >
          <div className="fan-stage__cards">
            {academics.map((program, i) => {
              const variant = mediaVariant(program)
              const pose = getPose(i, N, fanState, topIdx)
              const hovered = fanState.mode === 'fan' && fanState.hover === i
              const buried = fanState.mode === 'pile' && i !== topIdx
              const colors = CARD_COLORS[i] ?? CARD_COLORS[0]

              return (
                <article
                  key={program.name}
                  className={`fan-card${hovered ? ' is-hover' : ''}${buried ? ' is-buried' : ''}`}
                  data-index={i}
                  style={
                    {
                      '--x': `${pose.x}cqw`,
                      '--y': `${pose.y}cqw`,
                      '--r': `${pose.r}deg`,
                      '--s': pose.s,
                      '--z': pose.z,
                      '--c1': colors.c1,
                      '--c2': colors.c2,
                    } as CSSProperties
                  }
                >
                  <div className={`fan-card__media fan-card__media--${variant}`}>
                    {program.image ? (
                      <img src={program.image} alt="" width={400} height={344} />
                    ) : (
                      <span className="fan-card__icon-wrap" aria-hidden="true">
                        {(() => {
                          const Icon = programIcons[program.icon]
                          return <Icon className="fan-card__icon" strokeWidth={1.1} />
                        })()}
                      </span>
                    )}
                  </div>
                  <div className="fan-card__body">
                    <span className="fan-card__num" aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="fan-card__title">{program.bannerLines.join(' ')}</h3>
                    <p className="fan-card__text">{program.name}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        {/* CTA below the fan stage */}
        <div className="academics__cta">
          <a href="#" className="pill-btn">
            Explore All Programs <ArrowRight size={17} strokeWidth={2} />
          </a>
        </div>
      </section>

      {/* Placement Section (New Reference Design) */}
      <section ref={placementRef} className="placement-section">
        <div className="placement-section__dots-bottom" aria-hidden="true">
          {[...Array(18)].map((_, i) => (
            <span key={i} className="placement-section__dot" />
          ))}
        </div>

        <div className="placement-section__inner page">
          {/* Left Side: Campus Image & Dot Grid (NO yellow backdrop card) */}
          <div className="placement-section__media-wrap" data-reveal="curtain">
            {/* <div className="placement-section__dots-top" aria-hidden="true">
              {[...Array(18)].map((_, i) => (
                <span key={i} className="placement-section__dot" />
              ))}
            </div> */}

            <div className="placement-section__media">
              <img
                src={images.campusAerial}
                alt="Aerial view of Dhanalakshmi Srinivasan University campus"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Side: Heading, Description & READ MORE Button */}
          <div className="placement-section__content" data-reveal="right">
            <div className="placement-section__accent-line" />

            <h2 className="placement-section__title">
              <span className="placement-title-blue">Placement Success</span>
              <span className="placement-title-gold">Starts Here</span>
            </h2>

            <p className="placement-section__desc">
              Industry-ready programs, expert guidance and strong recruiter network to shape your future.
            </p>

            <a href="#recruiters" className="placement-section__cta">
              <span>READ MORE</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
