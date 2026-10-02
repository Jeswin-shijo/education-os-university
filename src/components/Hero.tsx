import { useState, useRef, useEffect } from 'react'
import campusVideo from '../assets/images/video.mp4'
import { stats } from '../data/siteData'
import './Hero.css'

const videoHighlights = [
  'SELF-SELECTION OF SUBJECTS',
  'CHOICE BASED CREDIT SYSTEM',
  'INDUSTRY-ALIGNED CURRICULUM',
  'WORLD-CLASS INFRASTRUCTURE',
]

function HeroVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [muted, setMuted] = useState(true)
  const [highlightIndex, setHighlightIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setHighlightIndex((prev) => (prev + 1) % videoHighlights.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const toggleMute = () => {
    if (!videoRef.current) return
    const nextMuted = !muted
    videoRef.current.muted = nextMuted
    setMuted(nextMuted)
  }

  return (
    <section className="hero-fullvideo">
      {/* Background Video (Full Size 100% Width) */}
      <video
        ref={videoRef}
        src={campusVideo}
        autoPlay
        loop
        muted={muted}
        playsInline
        className="hero-fullvideo__bg"
      />

      {/* Full screen rgba(0,0,0,0.60) dark background block overlay */}
      <div className="hero-fullvideo__overlay" />

      {/* Animated Equalizer Sound Button ("Sound On / Sound Off") matching reference image */}
      <button
        type="button"
        className={`hero-video__sound-btn ${muted ? 'is-muted' : 'is-active'}`}
        onClick={toggleMute}
        aria-label={muted ? 'Enable Sound' : 'Mute Sound'}
        title={muted ? 'Click to Enable Sound' : 'Click to Mute Sound'}
      >
        <div className="sound-wave">
          <span className="sound-bar bar-1" />
          <span className="sound-bar bar-2" />
          <span className="sound-bar bar-3" />
          <span className="sound-bar bar-4" />
        </div>
      </button>

      {/* Left side text title block over full video overlay */}
      {/* <div className="hero-fullvideo__text-card">
        <span className="hero-section__eyebrow">ADMISSIONS OPEN 2026-27</span>

        <h1 className="hero-fullvideo__title">
          {hero.titleParts.map((p) =>
            p.highlight ? <span key={p.text}>{p.text}</span> : p.text,
          )}
        </h1>

        <p className="hero-fullvideo__campus">
          <MapPin size={15} className="hero-fullvideo__pin" />
          <strong>{hero.campusName}</strong>
        </p>
      </div> */}

      {/* Bottom Right Blue Ribbon Tag matching screenshot */}
      <div className="hero-fullvideo__tag">
        <span>{videoHighlights[highlightIndex]}</span>
      </div>
    </section>
  )
}

export default function Hero() {
  return (
    <>
      <HeroVideoSection />

      <section className="stats page" aria-label="Key figures">
        {stats.map((s) => (
          <div key={s.label} className="stat-card">
            <span className="stat-card__value">{s.value}</span>
            <span className="stat-card__label">{s.label}</span>
          </div>
        ))}
      </section>
    </>
  )
}
