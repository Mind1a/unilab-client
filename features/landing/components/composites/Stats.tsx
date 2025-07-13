import { statsData } from "@features/landing/data/landingData"
import StatsUnit from "../primitives/StatsUnit"

const Stats = () => {
  return (
    <section className="mx-auto max-w-[1152px] pt-60 pr-12 pb-60 pl-9 md:w-full">
      <div className="grid w-full grid-cols-2 gap-6 text-center md:grid-cols-4 md:justify-between">
        {statsData.map((item, index) => (
          <StatsUnit key={index} num={item.num} text={item.text} />
        ))}
      </div>
    </section>
  )
}

export default Stats
