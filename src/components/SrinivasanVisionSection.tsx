import { MoveRight } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './SrinivasanVisionSection.css'

interface DownloadItem {
  title: string
  image: string
  downloadUrl: string
}

interface SrinivasanVisionSectionProps {
  subtitle?: string
  title?: string
  quote?: string
  authorName?: string
  authorRole?: string
  authorOrg?: string
  readMoreLink?: string
  centerImage?: string
  downloads?: DownloadItem[]
}

export default function SrinivasanVisionSection({
  subtitle = "Founder-Chancellor DSU'S",
  title = "Global Vision &\nIndian Values",
  quote = "“Dr. Manimekalai Mohan founded SSVM Institutions in 1998 with a single play school. Today, her vision has grown into a network of 20 campuses across the Coimbatore district, combining global education standards with Indian values.”",
  authorName = "Dr Manimekalai Mohan",
  authorRole = "Founder - Chancellor",
  authorOrg = "DSU",
  readMoreLink = "#",
  centerImage = "/assets/image/img-2.png",
  downloads = [
    {
      title: "DSU Vision",
      image: "/assets/image/img-4.jpg",
      downloadUrl: "#",
    },
    {
      title: "DSU Brochure",
      image: "/assets/image/img-6.jpg",
      downloadUrl: "#",
    },
  ],
}: SrinivasanVisionSectionProps) {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className="srinivasan-vision">
      {/* Top Wave Divider */}
      <div className="srinivasan-vision__wave-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="srinivasan-vision__wave-svg"
        >
          <path fill="currentColor" d="M738,99l262-93V0H0v5.6L738,99z" />
        </svg>
      </div>

      {/* Decorative Bottom-Right Shape */}
      <div className="srinivasan-vision__decorative-shape">
        <img
          src="/assets/image/img_3.png"
          alt="Decorative Shape"
          loading="lazy"
        />
      </div>

      <div className="page srinivasan-vision__inner">
        <div className="srinivasan-vision__grid">
          {/* Left Text & Author Column */}
          <div data-reveal="left" className="srinivasan-vision__content">
            <span className="srinivasan-vision__subtitle">{subtitle}</span>

            <h2 className="srinivasan-vision__title">{title}</h2>

            <blockquote className="srinivasan-vision__quote">{quote}</blockquote>

            <div className="srinivasan-vision__author-box">
              <h4 className="srinivasan-vision__author-name">{authorName}</h4>
              <p className="srinivasan-vision__author-role">{authorRole}</p>
              <p className="srinivasan-vision__author-org">{authorOrg}</p>
            </div>

            <div className="why-choose__actions">
              <a
                href={readMoreLink}
                className="why-choose__read-more"
              >
                <span className="why-choose__read-more-bg" />
                <span className="why-choose__read-more-content">
                  Read more
                  <MoveRight size={18} />
                </span>
              </a>
            </div>
          </div>

          {/* Center Srinivasan Pic Column */}
          <div data-reveal="up" className="srinivasan-vision__center-image-col">
            <div className="srinivasan-vision__center-image-wrapper">
              <img
                src={centerImage}
                alt={authorName}
                className="srinivasan-vision__center-image"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Downloads Column */}
          <div data-reveal="right">
            <ul className="srinivasan-vision__downloads-card">
              {downloads.map((item, index) => (
                <li key={index} className="srinivasan-vision__download-item">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="srinivasan-vision__download-thumb"
                    loading="lazy"
                  />
                  <p className="srinivasan-vision__download-title">{item.title}</p>
                  <a
                    href={item.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="srinivasan-vision__download-btn"
                  >
                    Download
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
