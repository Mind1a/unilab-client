import StatsUnit from "../primitives/StatsUnit"
import { statsData } from "@features/landing/data/landingData"

const Stats = () => {
  return (
    <section className="w-full">
      <div className="grid w-full grid-cols-2 gap-6 text-center sm:gap-10 md:justify-between lg:grid-cols-4">
        {statsData.map((item, index) => (
          <StatsUnit key={index} num={item.num} text={item.text} />
        ))}
      </div>
    </section>
  )
}

export default Stats
