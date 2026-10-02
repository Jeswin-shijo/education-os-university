import { useState, useRef, useEffect } from 'react'
import { MapPin, Phone, Mail, ChevronDown, Search, UserCircle2, X } from 'lucide-react'
import { images, navItems, university } from '../data/siteData'
import './Header.css'

const quickLinks = ['Alumni', 'IQAC', 'NIRF', 'RTI', 'Grievance', 'Career']

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false)
  const searchRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus()
  }, [searchOpen])

  return (
    <header className="site-header">

      {/* ─── Row 1 : Info / Utility Bar ─── */}
      <div className="util-bar">
        <div className="util-bar__inner page">

          <address className="util-bar__contact">
            <a href="https://maps.google.com" className="util-bar__item" target="_blank" rel="noopener noreferrer">
              <MapPin size={12} />
              Chengalpattu, Tamil Nadu - 603111, India
            </a>
            <span className="util-bar__divider" />
            <a href="tel:+917094458022" className="util-bar__item">
              <Phone size={12} />
              +91 70944 58022
            </a>
            <span className="util-bar__divider" />
            <a href="mailto:enquiry@dsuniversity.ac.in" className="util-bar__item">
              <Mail size={12} />
              enquiry@dsuniversity.ac.in
            </a>
          </address>

          <div className="util-bar__right">
            <nav aria-label="Quick links" className="util-bar__quicklinks">
              {quickLinks.map((link, i) => (
                <span key={link} className="util-bar__ql-group">
                  {i > 0 && <span className="util-bar__divider" />}
                  <a href="#" className="util-bar__ql-link">{link}</a>
                </span>
              ))}
            </nav>

            <button type="button" className="util-bar__login-btn">
              <UserCircle2 size={15} strokeWidth={1.8} />
              <span>Student / Staff Login</span>
              <ChevronDown size={13} strokeWidth={2} />
            </button>
          </div>

        </div>
      </div>

      {/* ─── Row 2 : Brand + Main Navigation ─── */}
      <div className="primary-nav">
        <div className="primary-nav__inner page">

          {/* Brand */}
          <a href="/" className="nav-brand" aria-label={`${university.name} ${university.suffix} — Home`}>
            <img src={images.logo} alt="" className="nav-brand__logo" />
            <div className="nav-brand__text">
              <span className="nav-brand__name">{university.name}</span>
              <span className="nav-brand__suffix">{university.suffix}</span>
            </div>
          </a>

          {/* Nav menu */}
          <nav aria-label="Main navigation" className="nav-menu">
            <ul className="nav-menu__list" role="menubar">
              {navItems.map((item) => (
                <li key={item} className="nav-menu__item" role="none">
                  <a href="#" className="nav-menu__link" role="menuitem">
                    <span>{item}</span>
                    <ChevronDown size={11} strokeWidth={2.4} className="nav-menu__chevron" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Search toggle */}
          <button
            type="button"
            className={`nav-search-btn${searchOpen ? ' is-open' : ''}`}
            aria-label={searchOpen ? 'Close search' : 'Open search'}
            aria-expanded={searchOpen}
            onClick={() => setSearchOpen(v => !v)}
          >
            {searchOpen ? <X size={18} strokeWidth={2.2} /> : <Search size={17} strokeWidth={2.2} />}
          </button>

        </div>

        {/* Expandable search bar */}
        <div className={`nav-search-bar${searchOpen ? ' nav-search-bar--open' : ''}`} aria-hidden={!searchOpen}>
          <div className="nav-search-bar__inner page">
            <Search size={16} className="nav-search-bar__icon" />
            <input
              ref={searchRef}
              type="search"
              placeholder="Search courses, departments, events…"
              className="nav-search-bar__input"
              tabIndex={searchOpen ? 0 : -1}
            />
            <button
              type="button"
              className="nav-search-bar__close"
              onClick={() => setSearchOpen(false)}
              tabIndex={searchOpen ? 0 : -1}
              aria-label="Close search"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      </div>

    </header>
  )
}
