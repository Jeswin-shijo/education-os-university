import { ArrowRight } from 'lucide-react'
import { founder, images, publications } from '../data/siteData'
import './FounderSection.css'

export default function FounderSection() {
  return (
    <section className="founder">
      <svg
        className="founder__wave"
        viewBox="0 0 1366 114"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 0H1366L1334 10L1332 43H1240C1196 56 1160 66 1128 84C1096 102 1054 112 1004 112H900L0 0Z"
          fill="#fff"
        />
      </svg>

      <div className="founder__inner page">
        <div className="founder__left">
          <p className="founder__eyebrow">{founder.eyebrow}</p>
          <h2 className="founder__title">
            {founder.titleLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <blockquote className="founder__quote">{founder.quote}</blockquote>
          <div className="founder__sign">
            <p className="founder__name">
              <strong>{founder.name}</strong>
              <span>{founder.role}</span>
              <span>{founder.org}</span>
            </p>
            <a href="#" className="pill-btn founder__more">
              Read More <ArrowRight size={17} strokeWidth={2} />
            </a>
          </div>
        </div>

        <div className="founder__portrait">
          <img src={images.founderPhoto} alt={founder.name} />
        </div>

        <div className="founder__pubs">
          <div className="pubs__heading">
            <p className="pubs__eyebrow">{publications.eyebrow}</p>
            <h3 className="pubs__title">{publications.title}</h3>
          </div>
          <img
            src={images.conclave}
            alt="SSVM Institutions – Transforming India Conclave ’25"
            className="pubs__badge"
            width={106}
            height={70}
          />
          <div className="pubs__buttons">
            {publications.buttons.map((b) => (
              <a key={b.label} href="#" className={`pubs__btn pubs__btn--${b.variant}`}>
                {b.label} <ArrowRight size={15} strokeWidth={2.2} />
              </a>
            ))}
          </div>

          <ul className="pubs__list">
            {publications.items.map((item) => (
              <li key={item.title.join(' ')} className="pubs__item">
                <img src={item.image} alt="" />
                <p className="pubs__item-title">
                  {item.title[0]}
                  <br />
                  {item.title[1]}
                </p>
                <a href="#" className="pubs__download">
                  Download
                </a>
              </li>
            ))}
          </ul>
        </div>

        <svg
          className="founder__glow"
          viewBox="0 0 534 234"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="founderGlow" x1="0" y1="0" x2="0.35" y2="1">
              <stop offset="0" stopColor="#ffe548" />
              <stop offset="0.55" stopColor="#ffdc0a" />
              <stop offset="1" stopColor="#ffd800" />
            </linearGradient>
          </defs>
          <path
            d="M58 0C38 70 14 150 0 234H534V158C500 158 462 156 424 150C330 132 200 52 58 0Z"
            fill="url(#founderGlow)"
          />
        </svg>
        <span className="founder__glow-ext" aria-hidden="true" />
      </div>
    </section>
  )
}
