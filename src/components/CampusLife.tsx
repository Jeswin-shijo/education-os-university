import { useState, type ComponentType } from 'react'
import { ArrowRight, Cpu, Lightbulb, Users } from 'lucide-react'
import { campusLife, images, type CampusLifeKey } from '../data/siteData'
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

  return (
    <section className="campus-life">
      <div className="campus-life__inner page">
        <img src={images.campusDecoLeft} alt="" className="campus-life__deco campus-life__deco--left" />
        <img src={images.campusDecoRight} alt="" className="campus-life__deco campus-life__deco--right" />

        <p className="campus-life__eyebrow">BEYOND ACADEMICS</p>
        <h2 className="campus-life__title">
          Campus <span>Life</span>
        </h2>
        <p className="campus-life__subtitle">
          Explore, Engage, Grow – A Vibrant Campus Experience
        </p>

        <div className="campus-tabs" role="tablist" aria-label="Campus life categories">
          {campusLife.map((item) => {
            const Icon = icons[item.key]
            const isActive = item.key === active
            return (
              <button
                key={item.key}
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
          {campusLife.map((item) => {
            const Icon = icons[item.key]
            return (
              <a
                key={item.key}
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
