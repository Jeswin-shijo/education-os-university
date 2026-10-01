import { useRef, useState } from 'react'
import campusVideo from '../assets/images/video.mp4'
import { videoSection } from '../data/siteData'
import './VideoSection.css'

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(true)

  const togglePlay = () => {
    if (!videoRef.current) return
    if (playing) {
      videoRef.current.pause()
      setPlaying(false)
    } else {
      videoRef.current.play()
      setPlaying(true)
    }
  }

  return (
    <section className="video-section page">
      <div className="video-section__media">
        <video
          ref={videoRef}
          src={campusVideo}
          autoPlay
          loop
          muted
          playsInline
          className="video-section__video"
          onClick={togglePlay}
        />
        <button
          type="button"
          className={`video-section__play${playing ? ' is-playing' : ''}`}
          aria-label={playing ? 'Pause video' : 'Play video'}
          onClick={togglePlay}
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
