import { useState } from 'react'
import { images, videoSection } from '../data/siteData'
import './VideoSection.css'

export default function VideoSection() {
  const [playing, setPlaying] = useState(false)

  return (
    <section className="video-section page">
      <div className="video-section__media">
        <img src={images.videoThumb} alt="Student looking through a microscope" />
        <button
          type="button"
          className={`video-section__play${playing ? ' is-playing' : ''}`}
          aria-label={playing ? 'Pause video' : 'Play video'}
          onClick={() => setPlaying((p) => !p)}
        >
          {playing ? (
            <svg width="18" height="20" viewBox="0 0 18 20" aria-hidden="true">
              <rect x="1" y="1" width="5" height="18" rx="1" fill="#fff" />
              <rect x="12" y="1" width="5" height="18" rx="1" fill="#fff" />
            </svg>
          ) : (
            <svg width="18" height="20" viewBox="0 0 18 20" aria-hidden="true">
              <path d="M1 1.5v17L17 10z" fill="#fff" />
            </svg>
          )}
        </button>
      </div>

      <div className="video-section__content">
        <h2>{videoSection.title}</h2>
        <p>{videoSection.description}</p>
        <a href="#" className="video-section__cta">
          {videoSection.cta}
        </a>
      </div>
    </section>
  )
}
