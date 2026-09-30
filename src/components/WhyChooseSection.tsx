import { useState, useEffect } from 'react'
import { MoveRight, X } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './WhyChooseSection.css'

const VIDEO_ID = 'ftQ0cxCF67c'

export default function WhyChooseSection() {
  const ref = useScrollReveal<HTMLElement>()
  const [rating, setRating] = useState(0)
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  useEffect(() => {
    let currentRating = 0
    const targetRating = 4.9
    const interval = setInterval(() => {
      currentRating += 0.1
      if (currentRating >= targetRating - 0.01) {
        setRating(targetRating)
        clearInterval(interval)
      } else {
        setRating(currentRating)
      }
    }, 30)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (!isVideoOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsVideoOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isVideoOpen])

  return (
    <section ref={ref} className="why-choose">
      <div className="page">
        <div className="why-choose__grid">
          {/* Left Text Content */}
          <div data-reveal="left">
            <div className="why-choose__badge">
              <span className="why-choose__dot" />
              Why Choose DSU
              <span className="why-choose__dot" />
            </div>

            <h2 className="why-choose__title">
              Why Dhanalakshmi Srinivasan University
            </h2>

            <div className="why-choose__description">
              <p>
                The Dhanalakshmi Srinivasan University (DSU) has been established
                under the Tamil Nadu Private Universities Act, 2019, located in
                Tiruchirappali, Tamil Nadu, India. Uniqueness of DSU lies in its
                multi-disciplinary nature in offering a wide range of academic
                programmes encompassing medicine and engineering. Our motto is
                &quot;education for the real world&quot; with dedication and commitment
                towards nurturing the future generation. Green ambience with
                state-of-the-art infrastructure along with top-class faculty aims
                to serve the need of national and international students.
              </p>
            </div>

            <div className="why-choose__actions">
              <button className="why-choose__read-more" type="button">
                <span className="why-choose__read-more-bg" />
                <span className="why-choose__read-more-content">
                  Read more
                  <MoveRight size={18} />
                </span>
              </button>

              <div className="why-choose__rating-box">
                <svg viewBox="0 0 48 48" className="why-choose__google-icon">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                </svg>

                <div className="why-choose__rating-info">
                  <div className="why-choose__score-row">
                    <span className="why-choose__score">{rating.toFixed(1)}/5.0</span>
                    <div className="why-choose__stars">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="why-choose__star"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <span className="why-choose__label">Google Ratings</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Media Trigger Card */}
          <div data-reveal="right" className="why-choose__media">
            <img
              src="/assets/image/img-5.jpg"
              alt="Hospital Awards and Accreditation"
              className="why-choose__image"
              loading="lazy"
            />
            <div className="why-choose__media-overlay" />

            <div className="why-choose__play-container">
              <svg viewBox="0 0 200 200" className="why-choose__rotating-text">
                <path
                  id="textCircle"
                  d="M 100, 100 m -78, 0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
                  fill="none"
                />
                <text fill="#ffffff" fontSize="17" fontWeight="500" letterSpacing="4">
                  <textPath href="#textCircle" startOffset="0%">
                    Dhanalakshmi Srinivasan University
                  </textPath>
                </text>
              </svg>

              <button
                type="button"
                aria-label="Play video"
                onClick={() => setIsVideoOpen(true)}
                className="why-choose__play-btn"
              >
                <img
                  src="/assets/icons/icons_7.svg"
                  alt="Play"
                  className="why-choose__play-icon"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Lightbox Modal */}
      {isVideoOpen && (
        <div className="why-choose__modal" onClick={() => setIsVideoOpen(false)}>
          <div className="why-choose__modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              aria-label="Close video"
              onClick={() => setIsVideoOpen(false)}
              className="why-choose__modal-close"
            >
              <X size={20} />
            </button>
            <iframe
              className="why-choose__iframe"
              src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
              title="Dhanalakshmi Srinivasan University video"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  )
}
