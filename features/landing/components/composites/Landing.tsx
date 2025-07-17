import News from "@features/landing/components/composites/News"
import AboutUs from "./AboutUs"
import Acceleration from "./Acceleration"
import Faq from "./Faq"
import Stats from "./Stats"
import Unicourse from "./Unicourse"
import Hero from "./Hero"
import OurProjects from "@features/landing/components/composites/OurProjects"

const Landing = () => {
  return (
    <div className="flex flex-col items-end gap-22 md:mt-36 md:mb-[98px] md:gap-[240px]">
      <Hero />
      <AboutUs />
      <OurProjects />
      <Stats />
      <Acceleration />
      <Unicourse />
      <News />
      <Faq />
    </div>
  )
}

export default Landing
