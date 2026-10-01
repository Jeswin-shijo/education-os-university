import { useState, useEffect } from 'react'
import { ArrowRight, Download, ChevronLeft, ChevronRight } from 'lucide-react'
import { leaders, images } from '../data/siteData'
import './FounderSection.css'

export default function FounderSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const currentLeader = leaders[currentIndex]

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext()
    }, 6000)
    return () => clearInterval(timer)
  }, [currentIndex, isAnimating])

  const triggerTransition = (newIndex: number) => {
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex(newIndex)
      setIsAnimating(false)
    }, 200)
  }

  const handleSelect = (index: number) => {
    if (index === currentIndex || isAnimating) return
    triggerTransition(index)
  }

  const handlePrev = () => {
    if (isAnimating) return
    const nextIdx = currentIndex === 0 ? leaders.length - 1 : currentIndex - 1
    triggerTransition(nextIdx)
  }

  const handleNext = () => {
    if (isAnimating) return
    const nextIdx = currentIndex === leaders.length - 1 ? 0 : currentIndex + 1
    triggerTransition(nextIdx)
  }

  return (
    <section className="founder-section">
      <div className="founder-section__inner page">
        {/* Left Column: Leader Message */}
        <div className={`founder-section__left ${isAnimating ? 'founder-transitioning' : ''}`}>
          <span className="founder-section__eyebrow">{currentLeader.eyebrow}</span>

          <h2 className="founder-section__title">
            <span className="founder-title-blue">{currentLeader.titleBlue}</span>
            <span className="founder-title-gold">{currentLeader.titleGold}</span>
          </h2>

          <blockquote className="founder-section__quote">
            {currentLeader.quote}
          </blockquote>

          <div className="founder-section__author">
            <h4 className="founder-section__name">{currentLeader.name}</h4>
            <p className="founder-section__role">{currentLeader.role}</p>
          </div>

          <div className="founder-section__actions">
            <a href="#" className="founder-section__cta">
              <span>READ MORE</span>
              <ArrowRight size={18} />
            </a>

            {/* Navigation Dots & Controls */}
            <div className="founder-section__nav">
              <button
                type="button"
                className="founder-nav-btn"
                onClick={handlePrev}
                aria-label="Previous leader"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="founder-dots">
                {leaders.map((leader, idx) => (
                  <button
                    key={leader.id}
                    type="button"
                    className={`founder-dot ${idx === currentIndex ? 'active' : ''}`}
                    onClick={() => handleSelect(idx)}
                    aria-label={`Go to ${leader.name}`}
                  />
                ))}
              </div>

              <button
                type="button"
                className="founder-nav-btn"
                onClick={handleNext}
                aria-label="Next leader"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Center Column: Portrait with Golden Halo Ring & Dot */}
        <div className="founder-section__center">
          <div className="founder-section__halo-ring">
            <span className="founder-section__ring-dot" />
          </div>
          <img
            key={currentLeader.id}
            src={currentLeader.image}
            alt={currentLeader.name}
            className={`founder-section__portrait-img ${isAnimating ? 'founder-transitioning' : ''}`}
          />
        </div>

        {/* Right Column: Digital Publications */}
        <div className="founder-section__right">
          <div className="pubs__heading">
            <span className="pubs__eyebrow">DSU UNIVERSITY</span>
            <h3 className="pubs__title">
              <span className="pubs-title-blue">Digital</span>{' '}
              <span className="pubs-title-gold">Publications</span>
            </h3>
            <div className="pubs__accent-line" />
          </div>

          <div className="pubs__cards">
            <div className="pub-card">
              <div className="pub-card__thumb">
                <img src={images.pubBrochure || images.founderPhoto} alt="DS University Brochure" />
              </div>
              <div className="pub-card__info">
                <h4 className="pub-card__title">DS University Brochure</h4>
              </div>
              <a href="#" className="pub-card__download-btn" aria-label="Download DS University Brochure">
                <div className="pub-card__download-icon">
                  <Download size={18} />
                </div>
                <span>Download</span>
              </a>
            </div>

            <div className="pub-card">
              <div className="pub-card__thumb">
                <img src={images.pubMagazine || images.founderPhoto} alt="DS University Magazine" />
              </div>
              <div className="pub-card__info">
                <h4 className="pub-card__title">DS University Magazine</h4>
              </div>
              <a href="#" className="pub-card__download-btn" aria-label="Download DS University Magazine">
                <div className="pub-card__download-icon">
                  <Download size={18} />
                </div>
                <span>Download</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

