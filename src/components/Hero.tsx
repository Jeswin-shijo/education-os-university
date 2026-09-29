import { useState, type FormEvent } from 'react'
import { ArrowLeft, ArrowRight, ChevronDown, MapPin } from 'lucide-react'
import { achievers, admission, hero, stats } from '../data/siteData'
import './Hero.css'

function AchieverCarousel() {
  const [start, setStart] = useState(0)
  const count = achievers.length
  const visible = achievers.map((_, i) => achievers[(start + i) % count])

  return (
    <div className="achievers">
      <button
        type="button"
        className="achievers__arrow achievers__arrow--prev"
        aria-label="Previous achievers"
        onClick={() => setStart((s) => (s - 1 + count) % count)}
      >
        <ArrowLeft size={18} strokeWidth={2} />
      </button>

      <div className="achievers__track">
        {visible.map((a) => (
          <figure key={a.name} className="achiever-card">
            <img src={a.image} alt={`${a.name}, ${a.talent} – also scored ${a.score}`} />
          </figure>
        ))}
      </div>

      <button
        type="button"
        className="achievers__arrow achievers__arrow--next"
        aria-label="Next achievers"
        onClick={() => setStart((s) => (s + 1) % count)}
      >
        <ArrowRight size={18} strokeWidth={2} />
      </button>
    </div>
  )
}

function AdmissionForm() {
  const handleSubmit = (e: FormEvent) => e.preventDefault()

  return (
    <form className="admission" onSubmit={handleSubmit}>
      <div className="admission__head">
        <span>Admission open for</span>
        <label className="admission__year">
          <span className="sr-only">Academic year</span>
          <select defaultValue={admission.years[0]}>
            {admission.years.map((y) => (
              <option key={y}>{y}</option>
            ))}
          </select>
          <ChevronDown size={11} strokeWidth={2.4} />
        </label>
      </div>

      <div className="admission__grid">
        <label className="field">
          <span className="field__label">
            Parent Name <em>*</em>
          </span>
          <input type="text" placeholder="Parent Name*" />
        </label>
        <label className="field">
          <span className="field__label">
            Mobile Number <em>*</em>
          </span>
          <input type="tel" placeholder="Mobile*" />
        </label>
        <label className="field">
          <span className="field__label">Email Address</span>
          <input type="email" placeholder="Enter email address" />
        </label>
        <label className="field">
          <span className="field__label">
            Select Branch <em>*</em>
          </span>
          <select defaultValue={admission.branches[0]}>
            {admission.branches.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="admission__city">
        <MapPin size={13} fill="#e0435a" color="#e0435a" strokeWidth={0} />
        <span className="admission__city-name">{admission.city}</span>
        <a href="#">Click to change city</a>
      </div>

      <button type="submit" className="admission__submit">
        Enquire Now
      </button>
    </form>
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
