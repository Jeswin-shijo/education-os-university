import { useState, useEffect, type FormEvent } from 'react'
import { ArrowLeft, ArrowRight, ChevronDown, MapPin, User, Phone, Mail, GraduationCap } from 'lucide-react'
import { achievers, admission } from '../data/siteData'
import './BannerSection.css'

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
              Select Department <em>*</em>
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
        </div>

        <button type="submit" className="admission__submit">
          <span>Enquire Now</span>
          <ArrowRight size={18} />
        </button>
      </form>
    </div>
  )
}

export default function BannerSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const count = achievers.length

  useEffect(() => {
    if (count === 0 || isHovered) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % count)
    }, 4000)
    return () => clearInterval(timer)
  }, [count, isHovered])

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + count) % count)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % count)
  }

  return (
    <section className="banner-section page" aria-label="Campus Banners Showcase">
      <div className="banner-section__header">
        <span className="banner-section__eyebrow">CAMPUS SHOWCASE</span>
        <h2 className="banner-section__title">
          <span className="title-blue">Life & Excellence</span>{' '}
          <span className="title-gold">at Dhanalakshmi Srinivasan University</span>
        </h2>
        <p className="banner-section__subtitle">
          Explore our vibrant campus environment, modern infrastructure, and student achievements.
        </p>
      </div>

      <div className="banner-section__flex">
        {/* Banner Carousel Slider */}
        <div
          className="banner-carousel"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button
            type="button"
            className="banner-carousel__arrow banner-carousel__arrow--prev"
            aria-label="Previous banner"
            onClick={prevSlide}
          >
            <ArrowLeft size={18} strokeWidth={2.2} />
          </button>

          <div className="banner-carousel__slides">
            {achievers.map((item, index) => (
              <div
                key={index}
                className={`banner-slide ${index === currentIndex ? 'banner-slide--active' : ''}`}
              >
                <img
                  src={item.image}
                  alt={item.name || `Campus Banner ${index + 1}`}
                  className="banner-slide__img"
                />
                <div className="banner-slide__overlay">
                  {item.name && (
                    <div className="banner-slide__info">
                      <span className="banner-slide__badge">{item.talent}</span>
                      <h3 className="banner-slide__name">{item.name}</h3>
                      {item.score && <span className="banner-slide__score">Score: {item.score}</span>}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="banner-carousel__arrow banner-carousel__arrow--next"
            aria-label="Next banner"
            onClick={nextSlide}
          >
            <ArrowRight size={18} strokeWidth={2.2} />
          </button>

          <div className="banner-carousel__controls-bottom">
            <div className="banner-carousel__counter">
              0{currentIndex + 1} / 0{count}
            </div>

            <div className="banner-carousel__dots">
              {achievers.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`banner-carousel__dot ${index === currentIndex ? 'banner-carousel__dot--active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Admission Form Card */}
        <AdmissionForm />
      </div>
    </section>
  )
}
