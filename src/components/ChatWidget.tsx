import { useState } from 'react'
import { X } from 'lucide-react'
import { chatWidget, images } from '../data/siteData'
import './ChatWidget.css'

export default function ChatWidget() {
  const [showBubble, setShowBubble] = useState(true)

  return (
    <div className="chat-widget">
      {showBubble && (
        <div className="chat-widget__bubble" role="status">
          <span aria-hidden="true">👋</span> {chatWidget.message}
          <button
            type="button"
            className="chat-widget__close"
            aria-label="Dismiss message"
            onClick={() => setShowBubble(false)}
          >
            <X size={12} strokeWidth={2.4} />
          </button>
        </div>
      )}
      <button
        type="button"
        className="chat-widget__launcher"
        aria-label="Chat with Dhanalakshmi Srinivasan University"
        onClick={() => setShowBubble((s) => !s)}
      >
        <img src={images.footerLogo} alt="" width={60} height={60} />
      </button>
    </div>
  )
}
