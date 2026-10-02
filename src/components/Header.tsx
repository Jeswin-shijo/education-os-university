import { useState, useRef, useEffect } from 'react'
import { MapPin, Phone, Mail, ChevronDown, Search, UserCircle2, X, Menu } from 'lucide-react'
import { images, navItems, university } from '../data/siteData'
import './Header.css'

const quickLinks = ['Alumni', 'IQAC', 'NIRF', 'RTI', 'Grievance', 'Career']

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const searchRef = useRef<HTMLInputElement>(null)

  // Focus search input when opened
  useEffect(() => {
    if (searchOpen) searchRef.current?.focus()
  }, [searchOpen])

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  // Close drawer on escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setMobileOpen(false); setSearchOpen(false) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
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

            {/* Desktop Nav menu */}
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

            {/* Right action buttons */}
            <div className="nav-actions">
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

              {/* Hamburger — mobile only */}
              <button
                type="button"
                className="nav-hamburger"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen(v => !v)}
              >
                {mobileOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
              </button>
            </div>

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

      {/* ─── Mobile Drawer Overlay ─── */}
      <div
        className={`mobile-overlay${mobileOpen ? ' mobile-overlay--open' : ''}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* ─── Mobile Drawer ─── */}
      <aside className={`mobile-drawer${mobileOpen ? ' mobile-drawer--open' : ''}`} aria-label="Mobile navigation">
        {/* Drawer header */}
        <div className="mobile-drawer__head">
          <a href="/" className="mobile-drawer__brand" onClick={() => setMobileOpen(false)}>
            <img src={images.logo} alt="" className="mobile-drawer__logo" />
            <div className="mobile-drawer__brand-text">
              <span className="mobile-drawer__brand-name">{university.name}</span>
              <span className="mobile-drawer__brand-suffix">{university.suffix}</span>
            </div>
          </a>
          <button
            type="button"
            className="mobile-drawer__close"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} strokeWidth={2} />
          </button>
        </div>

        {/* Login button */}
        <div className="mobile-drawer__login">
          <button type="button" className="mobile-drawer__login-btn">
            <UserCircle2 size={16} strokeWidth={1.8} />
            Student / Staff Login
          </button>
        </div>

        {/* Nav items */}
        <nav aria-label="Mobile navigation">
          <ul className="mobile-drawer__list">
            {navItems.map((item) => (
              <li key={item} className="mobile-drawer__item">
                <a href="#" className="mobile-drawer__link" onClick={() => setMobileOpen(false)}>
                  <span>{item}</span>
                  <ChevronDown size={14} strokeWidth={2} className="mobile-drawer__chevron" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Quick links at the bottom */}
        <div className="mobile-drawer__quicklinks">
          {quickLinks.map((link) => (
            <a key={link} href="#" className="mobile-drawer__ql-link">{link}</a>
          ))}
        </div>

        {/* Contact info */}
        <div className="mobile-drawer__contact">
          <a href="tel:+917094458022" className="mobile-drawer__contact-item">
            <Phone size={14} />
            +91 70944 58022
          </a>
          <a href="mailto:enquiry@dsuniversity.ac.in" className="mobile-drawer__contact-item">
            <Mail size={14} />
            enquiry@dsuniversity.ac.in
          </a>
        </div>
      </aside>
    </>
  )
}
