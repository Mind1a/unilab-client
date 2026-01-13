import AboutUs from "./AboutUs"
import Acceleration from "./Acceleration"
import Faq from "./Faq"
import Hero from "./Hero"
import News from "@features/landing/components/composites/News"
import OurProjects from "@features/landing/components/composites/OurProjects"
import Stats from "./Stats"
import Unicourse from "./Unicourse"
// import Footer from "./Footer"

const Landing = () => {
  return (
    <div className="flex flex-col items-end gap-22 md:mt-[29px] md:gap-[240px]">
      <Hero />
      <AboutUs />
      <OurProjects />
      <Unicourse />
      <Stats />
      <Acceleration />
      <News />
      <Faq />
      {/* <Footer /> */}
    </div>
  )
}

export default Landing
