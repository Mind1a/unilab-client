import { statsData } from "@features/landing/data/landingData"
import StatsUnit from "../primitives/StatsUnit"

const Stats = () => {
  return (
    <section className="mx-auto max-w-[1152px] pt-22 pr-12 pb-22 pl-9 md:w-full md:pt-60 md:pb-60">
      <div className="grid w-full grid-cols-2 gap-6 text-center sm:grid-cols-4 sm:gap-10 md:justify-between">
        {statsData.map((item, index) => (
          <StatsUnit key={index} num={item.num} text={item.text} />
        ))}
      </div>
    </section>
  )
}

export default Stats
