import Header from './components/Header'
import Hero from './components/Hero'
import BannerSection from './components/BannerSection'
// import StatsBanner from './components/StatsBanner'
import FounderSection from './components/FounderSection'
import Academics from './components/Academics'
import Recruiters from './components/Recruiters'
import LifeAtDSU from './components/LifeAtDSU'
import Infrastructure from './components/Infrastructure'
import CampusLife from './components/CampusLife'
import Career from './components/Career'
import Footer from './components/Footer'
// import ChatWidget from './components/ChatWidget'
import MenuSticky from './components/MenuSticky'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BannerSection />
        <FounderSection />
        <Academics />
        <Recruiters />
        <LifeAtDSU />
        {/* <StatsBanner /> */}
        <Infrastructure />
        <CampusLife />
        <Career />
      </main>
      <Footer />
      <MenuSticky />
      {/* <ChatWidget /> */}
    </>
  )
}


