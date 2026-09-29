import { CalendarCheck, ChevronDown, Download } from 'lucide-react'
import { images, navItems, university } from '../data/siteData'
import { WhatsAppIcon } from './BrandIcons'
import './Header.css'

export default function Header() {
  return (
    <header className="site-header">
      <div className="topbar">
        <div className="topbar__inner page">
          <a href="#" className="brand" aria-label="Dhanalakshmi Srinivasan University home">
            <img src={images.logo} alt="" className="brand__logo" width={69} height={69} />
            <span className="brand__text">
              <span className="brand__name">{university.name}</span>
              <span className="brand__suffix">{university.suffix}</span>
            </span>
          </a>

          <div className="topbar__actions">
            <a href="#" className="topbar-btn">
              <Download size={16} strokeWidth={2} />
              Download Brochure
            </a>
            <a href="#" className="topbar-btn">
              <CalendarCheck size={16} strokeWidth={2} />
              Book Campus Tour
            </a>
            <a href="#" className="topbar-btn topbar-btn--whatsapp">
              <span className="topbar-btn__wa-icon">
                <WhatsAppIcon size={17} />
              </span>
              Chat with us on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <nav className="mainnav" aria-label="Main">
        <ul className="mainnav__list page">
          {navItems.map((item) => (
            <li key={item}>
              <a href="#" className="mainnav__link">
                {item}
                <ChevronDown size={11} strokeWidth={2.2} />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
