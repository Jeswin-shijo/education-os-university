import { ArrowRight, Download } from 'lucide-react'
import { founder, images } from '../data/siteData'
import './FounderSection.css'

export default function FounderSection() {
  return (
    <section className="founder-section">
      <div className="founder-section__inner page">
        {/* Left Column: Founder Message */}
        <div className="founder-section__left">
          <span className="founder-section__eyebrow">{founder.eyebrow}</span>

          <h2 className="founder-section__title">
            <span className="founder-title-blue">Founder</span>
            <span className="founder-title-gold">Message</span>
          </h2>

          <blockquote className="founder-section__quote">
            {founder.quote}
          </blockquote>

          <div className="founder-section__author">
            <h4 className="founder-section__name">{founder.name}</h4>
            <p className="founder-section__role">{founder.role}</p>
          </div>

          <a href="#" className="founder-section__cta">
            <span>READ MORE</span>
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Center Column: Portrait with Golden Halo Ring & Dot */}
        <div className="founder-section__center">
          <div className="founder-section__halo-ring">
            <span className="founder-section__ring-dot" />
          </div>
          <img
            src={images.founderPhoto}
            alt={founder.name}
            className="founder-section__portrait-img"
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
