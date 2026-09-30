import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Infrastructure.css'

interface InfraImage {
  id: number
  image: string
  title: string
  dec: string
}

const images: InfraImage[] = [
  {
    id: 1,
    image: '/assets/image/img-5.jpg',
    title: 'Campus',
    dec: 'An environment of peace and vitality, crafted through the intelligent application of technology.',
  },
  {
    id: 2,
    image: '/assets/image/img-19.jpg',
    title: 'Learning Center',
    dec: 'Innovatively built lecture halls and resourceful study centres to foster academic excellence',
  },
  {
    id: 3,
    image: '/assets/image/img-22.jpg',
    title: 'Lab',
    dec: 'Advanced laboratories designed to spark curiosity and encourage hands-on discovery',
  },
  {
    id: 4,
    image: '/assets/image/img-20.jpg',
    title: 'Library',
    dec: 'Spacious and well-stocked knowledge centre backed by cutting-edge technology',
  },
  {
    id: 5,
    image: '/assets/image/img-21.jpg',
    title: 'Sports & Activity',
    dec: 'World-class recreation spaces that combine indoor comfort with outdoor excitement',
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

        <div data-reveal="up" className="infrastructure__container">
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
      </div>
    </section>
  )
}
