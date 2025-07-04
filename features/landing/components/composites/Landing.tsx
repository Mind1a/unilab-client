import AboutUs from "./AboutUs"
import Acceleration from "./Acceleration"
import Stats from "./Stats"
import Unicourse from "./Unicourse"

const Landing = () => {
  return (
    <div className="flex flex-col items-end">
      <AboutUs />
      <Stats />
      <Acceleration />
      <Unicourse />
    </div>
  )
}

export default Landing
