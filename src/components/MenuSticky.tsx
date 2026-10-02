import { useState } from 'react'
import { X, Download, CalendarCheck } from 'lucide-react'

import './MenuSticky.css'
import { WhatsAppIcon } from './BrandIcons'

export default function MenuSticky() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="menu-sticky">
      <div className="menu-sticky__bar">
        {/* Admissions Enquiry */}
        <a href={`/`} className="menu-sticky__item">
          <WhatsAppIcon size={17} />
          Chat with us on WhatsApp
        </a>

        <span className="menu-sticky__divider" />

        {/* Campus Tour */}
        <a href="/" className="menu-sticky__item">
          <CalendarCheck size={16} strokeWidth={2} />
          Book Campus Tour
        </a>

        <span className="menu-sticky__divider" />

        {/* Download Brochure */}
        <a href="/" className="menu-sticky__item">
          <Download size={18} strokeWidth={2.2} />
          <span>Download Brochure</span>
        </a>

        {/* Close */}
        <button
          onClick={() => setIsVisible(false)}
          className="menu-sticky__close"
          aria-label="Close sticky menu"
        >
          <X size={18} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  )
}
