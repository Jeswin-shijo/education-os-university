import campusVideo from '../assets/images/video.mp4'
import { stats } from '../data/siteData'
import './Hero.css'

// const videoHighlights = [
//   'SELF-SELECTION OF SUBJECTS',
//   'CHOICE BASED CREDIT SYSTEM',
//   'INDUSTRY-ALIGNED CURRICULUM',
//   'WORLD-CLASS INFRASTRUCTURE',
// ]

function HeroVideoSection() {
  // const [highlightIndex, setHighlightIndex] = useState(0)

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setHighlightIndex((prev) => (prev + 1) % videoHighlights.length)
  //   }, 4000)
  //   return () => clearInterval(timer)
  // }, [])

  return (
    <section className="hero-fullvideo">
      {/* Background Video — permanently muted */}
      <video
        src={campusVideo}
        autoPlay
        loop
        muted
        playsInline
        className="hero-fullvideo__bg"
      />

      {/* Dark overlay */}
      <div className="hero-fullvideo__overlay" />

      {/* Bottom Right Rotating Tag */}
      
    </section>
  )
}

export default function Hero() {
  return (
    <>
      <HeroVideoSection />

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
