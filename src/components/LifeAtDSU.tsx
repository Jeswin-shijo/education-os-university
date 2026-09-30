import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './LifeAtDSU.css'

interface TileItem {
  id: number
  type: 'image' | 'youtube' | 'mp4'
  src?: string
  youtubeId?: string
  caption: string
  span?: string
}

const items: TileItem[] = [
  { id: 1, type: 'image', src: '/assets/image/img-12.jpg', caption: 'Tradition comes alive through classical dance and devotion.' },
  { id: 2, type: 'image', src: '/assets/image/img-13.jpg', caption: 'Music that moves hearts and minds.' },
  { id: 3, type: 'image', src: '/assets/image/img-14.jpg', caption: 'Powerful group choreography under dynamic stage lights.', span: 'life-dsu__tile--col-2 life-dsu__tile--row-2' },
  { id: 4, type: 'youtube', youtubeId: 'ftQ0cxCF67c', caption: 'Drums beating, feet moving, spirits soaring.', span: 'life-dsu__tile--row-2' },
  { id: 5, type: 'image', src: '/assets/image/img-15.jpg', caption: 'A soulful live performance energizing the campus.' },
  { id: 6, type: 'image', src: '/assets/image/img-16.jpg', caption: 'Students celebrating together the rhythm of joy.' },
  { id: 7, type: 'youtube', youtubeId: 'ftQ0cxCF67c', caption: 'Campus colors filled with music, lights and laughter.', span: 'life-dsu__tile--col-2' },
  { id: 8, type: 'image', src: '/assets/image/img-17.jpg', caption: 'Grace, confidence, and passion in solo performance.', span: 'life-dsu__tile--row-2' },
  { id: 9, type: 'image', src: '/assets/image/img-18.jpg', caption: 'The spirit of togetherness in vibrant campus celebrations.' },
  { id: 10, type: 'image', src: '/assets/image/img-12.jpg', caption: 'Little footsteps, big faith on campus.' },
  { id: 11, type: 'image', src: '/assets/image/img-13.jpg', caption: 'Smiles that capture the essence of celebration.', span: 'life-dsu__tile--col-2' },
  { id: 12, type: 'image', src: '/assets/image/img-14.jpg', caption: 'A sea of smiles capturing the festive spirit.' },
  { id: 13, type: 'image', src: '/assets/image/img-15.jpg', caption: 'Culture and heritage proudly showcased through art.' },
]

function Caption({ text }: { text: string }) {
  return (
    <div className="life-dsu__caption">
      <p className="life-dsu__caption-text">{text}</p>
    </div>
  )
}

function ImageTile({ src, caption }: { src: string; caption: string }) {
  return (
    <>
      <img
        src={src}
        alt={caption}
        loading="lazy"
        decoding="async"
        className="life-dsu__image"
      />
      <Caption text={caption} />
    </>
  )
}

function YouTubeTile({ youtubeId, caption }: { youtubeId: string; caption: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const params = new URLSearchParams({
    autoplay: '1',
    mute: '1',
    loop: '1',
    playlist: youtubeId,
    controls: '0',
    modestbranding: '1',
    rel: '0',
    playsinline: '1',
    disablekb: '1',
    iv_load_policy: '3',
  })

  return (
    <div ref={ref} className="life-dsu__yt-container">
      <div className="life-dsu__yt-wrapper">
        <img
          src={`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
          alt={caption}
          loading="lazy"
          className="life-dsu__yt-thumb"
        />
        {visible && (
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?${params}`}
            title={caption}
            allow="autoplay; encrypted-media; picture-in-picture"
            onLoad={() => setLoaded(true)}
            className={`life-dsu__yt-iframe ${loaded ? 'opacity-100' : 'opacity-0'}`}
          />
        )}
      </div>

      <a
        href={`https://www.youtube.com/watch?v=${youtubeId}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Watch on YouTube: ${caption}`}
        className="life-dsu__yt-link"
      />
      <Caption text={caption} />
    </div>
  )
}

export default function LifeAtDSU() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className="life-dsu">
      <div className="page">
        <h2 data-reveal="up" className="life-dsu__title">
          Life@ DSU
        </h2>

        <div data-reveal="up" className="life-dsu__grid">
          {items.map((item) => (
            <div
              key={item.id}
              className={`life-dsu__tile ${item.span || ''}`}
            >
              {item.type === 'youtube' && item.youtubeId && (
                <YouTubeTile youtubeId={item.youtubeId} caption={item.caption} />
              )}
              {item.type === 'image' && item.src && (
                <ImageTile src={item.src} caption={item.caption} />
              )}
            </div>
          ))}
        </div>

        <a
          href="https://www.youtube.com/@DSU-Trichy-Campus/videos"
          target="_blank"
          rel="noopener noreferrer"
          className="life-dsu__view-more"
        >
          <ArrowUpRight size={18} />
          <span>View More</span>
        </a>
      </div>
    </section>
  )
}
