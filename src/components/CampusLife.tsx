import { useState, type ComponentType, type CSSProperties } from 'react'
import { ArrowRight, Cpu, Lightbulb, Users } from 'lucide-react'
import { campusLife, images, type CampusLifeKey } from '../data/siteData'
import { stagger, useScrollReveal } from '../hooks/useScrollReveal'
import { RunnerIcon } from './BrandIcons'
import './CampusLife.css'

const icons: Record<CampusLifeKey, ComponentType<{ size?: number; strokeWidth?: number }>> = {
  tech: Cpu,
  cultural: Users,
  sports: RunnerIcon,
  lifeskills: Lightbulb,
}

export default function CampusLife() {
  const [active, setActive] = useState<CampusLifeKey>('tech')
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className="campus-life">
      <div className="campus-life__inner page">
        <img
          src={''}
          alt=""
          className="campus-life__deco campus-life__deco--left"
          data-reveal="left"
        />
        <img
          src={''}
          alt=""
          className="campus-life__deco campus-life__deco--right"
          data-reveal="right"
        />

        <p className="campus-life__eyebrow" data-reveal="eyebrow">
          BEYOND ACADEMICS
        </p>
        <h2 className="campus-life__title" data-reveal="words">
          <span className="campus-life__word">Campus</span>{' '}
          <span className="campus-life__word campus-life__word--accent">Life</span>
        </h2>
        <p className="campus-life__subtitle" data-reveal="up" style={{ '--delay': '350ms' } as CSSProperties}>
          Explore, Engage, Grow – A Vibrant Campus Experience
        </p>

        <div className="campus-tabs" role="tablist" aria-label="Campus life categories">
          {campusLife.map((item, i) => {
            const Icon = icons[item.key]
            const isActive = item.key === active
            return (
              <button
                key={item.key}
                data-reveal="up"
                style={stagger(i)}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`campus-tab campus-tab--${item.key}${isActive ? ' is-active' : ''}`}
                onClick={() => setActive(item.key)}
              >
                <Icon size={30} strokeWidth={1.9} />
                {item.title}
              </button>
            )
          })}
        </div>

        <div className="campus-cards">
          {campusLife.map((item, i) => {
            const Icon = icons[item.key]
            return (
              <a
                key={item.key}
                data-reveal="card"
                style={stagger(i)}
                href="#"
                className={`campus-card campus-card--${item.key}${item.key === active ? ' is-active' : ''}`}
              >
                <img src={item.image} alt="" className="campus-card__photo" />
                <svg
                  className="campus-card__panel"
                  viewBox="0 0 327 130"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M0 14C0 5 14 0 58 0C104 0 126 9 148 21C168 32 190 37 222 37H327V130H0Z" />
                </svg>
                <span className="campus-card__icon">
                  <Icon size={28} strokeWidth={2} />
                </span>
                <span className="campus-card__body">
                  <span className="campus-card__title">{item.title}</span>
                  <span className="campus-card__tags">
                    {item.tags.map((t, i) => (
                      <span key={t}>
                        {i > 0 && <i aria-hidden="true">•</i>}
                        {t}
                      </span>
                    ))}
                  </span>
                </span>
                <span className="campus-card__arrow">
                  <ArrowRight size={18} strokeWidth={2.4} />
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
