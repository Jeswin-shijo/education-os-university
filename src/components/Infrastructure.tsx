import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Infrastructure.css'

interface InfraImage {
  id: number
  modelCode: string
  image: string
  title: string
  dec: string
  themeClass: string
}

const images: InfraImage[] = [
  {
    id: 1,
    modelCode: 'MODEL 01',
    image: '/assets/image/img-5.jpg',
    title: 'Campus',
    dec: 'An environment of peace and vitality, crafted through the intelligent application of technology.',
    themeClass: 'infra-card--theme-1',
  },
  {
    id: 2,
    modelCode: 'MODEL 02',
    image: '/assets/image/img-19.jpg',
    title: 'Learning Center',
    dec: 'Innovatively built lecture halls and resourceful study centres to foster academic excellence',
    themeClass: 'infra-card--theme-2',
  },
  {
    id: 3,
    modelCode: 'MODEL 03',
    image: '/assets/image/img-22.jpg',
    title: 'Lab',
    dec: 'Advanced laboratories designed to spark curiosity and encourage hands-on discovery',
    themeClass: 'infra-card--theme-3',
  },
  {
    id: 4,
    modelCode: 'MODEL 04',
    image: '/assets/image/img-20.jpg',
    title: 'Library',
    dec: 'Spacious and well-stocked knowledge centre backed by cutting-edge technology',
    themeClass: 'infra-card--theme-4',
  },
  {
    id: 5,
    modelCode: 'MODEL 05',
    image: '/assets/image/img-21.jpg',
    title: 'Sports & Activity',
    dec: 'World-class recreation spaces that combine indoor comfort with outdoor excitement',
    themeClass: 'infra-card--theme-5',
  },
]

export default function Infrastructure() {
  const ref = useScrollReveal<HTMLElement>()
  const [active, setActive] = useState(0)

  return (
    <section ref={ref} className="infrastructure">
      <div className="page">
        <h2 data-reveal="up" className="infrastructure__title">
          Infrastructure
        </h2>

        {/* Desktop View (Original Accordion Hover Cards) */}
        <div data-reveal="up" className="infrastructure__container infrastructure__desktop-view">
          {images.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActive(index)}
              onMouseEnter={() => setActive(index)}
              className={`infrastructure__card ${
                active === index ? 'infrastructure__card--active' : ''
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="infrastructure__card-image"
                loading="lazy"
              />

              <div className="infrastructure__card-overlay" />

              {active === index && (
                <div className="infrastructure__card-content">
                  <h3 className="infrastructure__card-title">{item.title}</h3>
                  <p className="infrastructure__card-desc">{item.dec}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile View (Kulfi Website Stacked Sliding Cards Deck) */}
        <div data-reveal="up" className="infrastructure__mobile-stack">
          {images.map((item, index) => (
            <div
              key={item.id}
              className={`infra-mobile-card ${item.themeClass}`}
              style={{ '--i': index, zIndex: index + 1 } as React.CSSProperties}
            >
              {/* <div className="infra-card-gold-tab" /> */}

              <div className="infra-card-inner">
                <span className="infra-card-badge">{item.modelCode}</span>

                <div className="infra-card-body">
                  <h3 className="infra-card-title">{item.title}</h3>
                  <p className="infra-card-desc">{item.dec}</p>
                </div>

                <div className="infra-card-art">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="infra-card-img"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
