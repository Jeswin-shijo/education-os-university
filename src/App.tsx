import Header from './components/Header'
import Hero from './components/Hero'
import VideoSection from './components/VideoSection'
import FounderSection from './components/FounderSection'
import Academics from './components/Academics'
import Recruiters from './components/Recruiters'
import LifeAtDSU from './components/LifeAtDSU'
import Infrastructure from './components/Infrastructure'
import CampusLife from './components/CampusLife'
import Career from './components/Career'
import Footer from './components/Footer'
import ChatWidget from './components/ChatWidget'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <VideoSection />
        <FounderSection />
        <Academics />
        <Recruiters />
        <LifeAtDSU />
        <Infrastructure />
        <CampusLife />
        <Career />
      </main>
      <Footer />
      <ChatWidget />
    </>
  )
}


