import { useState, useEffect, type FormEvent } from 'react'
import { ArrowLeft, ArrowRight, ChevronDown, MapPin, User, Phone, Mail, GraduationCap } from 'lucide-react'
import { achievers, admission, hero, stats } from '../data/siteData'
import './Hero.css'

function AchieverCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const count = achievers.length

  // Automatic transition every 3.5 seconds
  useEffect(() => {
    if (count === 0) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % count)
    }, 3500)
    return () => clearInterval(timer)
  }, [count])

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + count) % count)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % count)
  }

  return (
    <div className="achievers">
      <button
        type="button"
        className="achievers__arrow achievers__arrow--prev"
        aria-label="Previous banner"
        onClick={prevSlide}
      >
        <ArrowLeft size={16} strokeWidth={2.2} />
      </button>

      <div className="achievers__slide-container">
        {achievers.map((a, index) => (
          <div
            key={index}
            className={`achiever-slide ${index === currentIndex ? 'achiever-slide--active' : ''}`}
          >
            <img
              src={a.image}
              alt={a.name || `Banner ${index + 1}`}
              className="achiever-slide__img"
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        className="achievers__arrow achievers__arrow--next"
        aria-label="Next banner"
        onClick={nextSlide}
      >
        <ArrowRight size={16} strokeWidth={2.2} />
      </button>

      <div className="achievers__dots">
        {achievers.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`achievers__dot ${index === currentIndex ? 'achievers__dot--active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

function AdmissionForm() {
  const handleSubmit = (e: FormEvent) => e.preventDefault()

  return (
    <div className="admission-card">
      <form className="admission" onSubmit={handleSubmit}>
        <div className="admission__head">
          <span className="admission__head-title">Admission Open for</span>
          <label className="admission__year">
            <select defaultValue={admission.years[0]}>
              {admission.years.map((y) => (
                <option key={y}>{y}</option>
              ))}
            </select>
            <ChevronDown size={13} strokeWidth={2.5} className="admission__year-arrow" />
          </label>
        </div>

        <div className="admission__grid">
          <label className="field">
            <span className="field__label">
              Student Name <em>*</em>
            </span>
            <div className="field__input-wrap">
              <User size={15} className="field__icon" />
              <input type="text" required placeholder="Student Name*" />
            </div>
          </label>

          <label className="field">
            <span className="field__label">
              Mobile Number <em>*</em>
            </span>
            <div className="field__input-wrap">
              <Phone size={15} className="field__icon" />
              <input type="tel" required placeholder="Mobile*" />
            </div>
          </label>

          <label className="field">
            <span className="field__label">Email Address</span>
            <div className="field__input-wrap">
              <Mail size={15} className="field__icon" />
              <input type="email" placeholder="Enter email address" />
            </div>
          </label>

          <label className="field">
            <span className="field__label">
              Select Branch <em>*</em>
            </span>
            <div className="field__input-wrap">
              <GraduationCap size={15} className="field__icon" />
              <select defaultValue={admission.branches[0]}>
                {admission.branches.map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>
              <ChevronDown size={14} className="field__select-arrow" />
            </div>
          </label>
        </div>

        <div className="admission__city">
          <MapPin size={14} className="admission__pin-icon" />
          <span className="admission__city-name">{admission.city}</span>
          <a href="#" className="admission__city-link">Click to change city</a>
        </div>

        <button type="submit" className="admission__submit">
          <span>Enquire Now</span>
          <ArrowRight size={18} />
        </button>
      </form>
    </div>
  )
}

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero__inner page">
          <div className="hero__main">
            <h1 className="hero__title">
              {hero.titleParts.map((p) =>
                p.highlight ? <span key={p.text}>{p.text}</span> : p.text,
              )}
            </h1>
            <p className="hero__campus">
              {hero.campusPrompt}
              <span className="hero__divider">|</span>
              <MapPin size={15} className="hero__pin-icon" />
              <strong>{hero.campusName}</strong>
            </p>
            <AchieverCarousel />
          </div>
          <AdmissionForm />
        </div>
      </section>

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
