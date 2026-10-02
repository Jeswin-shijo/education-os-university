import { useState, useEffect, type FormEvent } from 'react'
import { ArrowLeft, ArrowRight, ChevronDown, MapPin, User, Phone, Mail, GraduationCap } from 'lucide-react'
import banner1 from '../assets/images/banner_1.jpg'
import banner2 from '../assets/images/banner_2.jpg'
import banner3 from '../assets/images/banner_3.jpg'
import { admission } from '../data/siteData'
import './BannerSection.css'

const banners = [
  { id: 1, image: banner2, title: '1st HCSET April 29 & 30, 2026' },
  { id: 2, image: banner1, title: 'Intellixverse 2026 Technical Symposium' },
  { id: 3, image: banner3, title: 'Aura 26 Mega Cultural Celebrations' },
]

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
              Parent Name <em>*</em>
            </span>
            <div className="field__input-wrap">
              <User size={15} className="field__icon" />
              <input type="text" required placeholder="Parent Name*" />
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
              <select defaultValue="">
                {admission.branches
                  .filter((b) => b !== 'DSU Trichy' && b !== 'DSU Chennai')
                  .map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
              </select>
              <ChevronDown size={14} className="field__select-arrow" />
            </div>
          </label>
        </div>

        <div className="admission__city">
          <MapPin size={14} className="admission__pin-icon" />
          <span className="admission__city-name">{admission.city}</span>
          <button type="button" className="admission__city-link">
            Click to change city
          </button>
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
  const count = banners.length

  useEffect(() => {
    if (count === 0 || isHovered) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % count)
    }, 4500)
    return () => clearInterval(timer)
  }, [count, isHovered])

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + count) % count)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % count)
  }

  return (
    <section className="banner-section" aria-label="Campus Banners Showcase">
      {/* Background Building Image on the Right (blends behind Admission Card) */}
      {/* <div className="banner-section__building-bg">
        <img src={campusBuilding} alt="DSU Campus Architecture" className="banner-section__building-img" />
      </div> */}

      <div className="banner-section__container page">
        {/* Left Column: Heading + Campus prompt + Banner Carousel Slider */}
        <div className="banner-section__left">
          {/* Decorative Dot Matrix Accent matching screenshot */}
          {/* <div className="banner-section__dots-accent" aria-hidden="true">
            {Array.from({ length: 15 }).map((_, i) => (
              <span key={i} className="accent-dot" />
            ))}
          </div> */}

          <div className="banner-section__title-group">
            <h2 className="banner-section__title">
              Leading University in <span className="title-gold">Chennai</span> - Dhanalakshmi Srinivasan University
            </h2>

            <p className="banner-section__campus">
              <span>Find a campus near you</span>
              <span className="banner-section__divider">|</span>
              <MapPin size={15} className="banner-section__pin" />
              <strong className="banner-section__campus-name">Chennai</strong>
            </p>
          </div>

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
              <ArrowLeft size={17} strokeWidth={2.4} />
            </button>

            <div className="banner-carousel__slides">
              {banners.map((item, index) => (
                <div
                  key={item.id}
                  className={`banner-slide ${index === currentIndex ? 'banner-slide--active' : ''}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="banner-slide__img"
                  />
                </div>
              ))}
            </div>

            <button
              type="button"
              className="banner-carousel__arrow banner-carousel__arrow--next"
              aria-label="Next banner"
              onClick={nextSlide}
            >
              <ArrowRight size={17} strokeWidth={2.4} />
            </button>
          </div>

          {/* Pagination Dots below Banner Carousel matching reference design */}
          <div className="banner-carousel__dots">
            {banners.map((_, index) => (
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

        {/* Right Column: Admission Form Card */}
        <div className="banner-section__right">
          <AdmissionForm />
        </div>
      </div>
    </section>
  )
}
