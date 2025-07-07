import News from "@features/landing/components/composites/News"
import AboutUs from "./AboutUs"
import Acceleration from "./Acceleration"
import Faq from "./Faq"
import Stats from "./Stats"
import Unicourse from "./Unicourse"
import Hero from "./Hero"

const Landing = () => {
  return (
    <div className="flex flex-col items-end">
      <Hero />
      <AboutUs />
      <Stats />
      <Acceleration />
      <Unicourse />
      <News />
      <Faq />
    </div>
  )
}

export default Landing
