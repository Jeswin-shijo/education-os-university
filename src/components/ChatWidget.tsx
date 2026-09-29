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
        aria-label="Chat with SSVM Clara"
        onClick={() => setShowBubble((s) => !s)}
      >
        <img src={images.chatAvatar} alt="" width={66} height={53} />
      </button>
    </div>
  )
}
