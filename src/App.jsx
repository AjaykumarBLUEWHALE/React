import LogoSection from "./components/LogoSection"
import Navbar from "./components/Navbar"
import Showcase from "./components/sections/Showcase"
import Contact from "./sections/Contact"
import Experience from "./sections/ExperienceSection"
import Footer from "./sections/Footer"
import Hero from "./sections/hero"
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";
function App() {
  return (
 <>
 <Navbar/>
<Hero/>
<Showcase/>
<LogoSection/>
<Experience/>
    <TechStack />
    <Testimonials/>
    <Contact/>
    <Footer/>
 </>
  )
}

export default App
