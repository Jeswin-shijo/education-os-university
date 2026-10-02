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

        {/* WhatsApp */}
        <a href="/" className="menu-sticky__item" aria-label="Chat with us on WhatsApp">
          <WhatsAppIcon size={18} />
          <span className="menu-sticky__label">Chat with us on WhatsApp</span>
        </a>

        <span className="menu-sticky__divider" />

        {/* Campus Tour */}
        <a href="/" className="menu-sticky__item" aria-label="Book Campus Tour">
          <CalendarCheck size={17} strokeWidth={2} />
          <span className="menu-sticky__label">Book Campus Tour</span>
        </a>

        <span className="menu-sticky__divider" />

        {/* Download Brochure */}
        <a href="/" className="menu-sticky__item" aria-label="Download Brochure">
          <Download size={17} strokeWidth={2.2} />
          <span className="menu-sticky__label">Download Brochure</span>
        </a>

        {/* Close */}
        <button
          onClick={() => setIsVisible(false)}
          className="menu-sticky__close"
          aria-label="Close sticky menu"
        >
          <X size={16} strokeWidth={2.5} />
        </button>

      </div>
    </div>
  )
}
