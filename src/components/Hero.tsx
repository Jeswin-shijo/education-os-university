import { useState, useRef, useEffect } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import campusVideo from '../assets/images/video.mp4'
import logo from '../assets/images/logo.png'
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

      {/* Top Left Logo */}
      <div className="hero-fullvideo__top-left">
        <img src={logo} alt="DSU Logo" className="hero-fullvideo__logo" />
      </div>

      {/* Cute Audio Toggle Button ("Kutty Icon") */}
      <button
        type="button"
        className="hero-video__audio-btn"
        onClick={toggleMute}
        aria-label={muted ? 'Enable Audio' : 'Mute Audio'}
        title={muted ? 'Click to Enable Audio' : 'Click to Mute Audio'}
      >
        {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        <span className="hero-video__audio-tooltip">{muted ? 'Unmute' : 'Muted'}</span>
      </button>

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
