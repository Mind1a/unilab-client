import { statsData } from "@features/landing/data/landingData"
import StatsUnit from "../primitives/StatsUnit"

const Stats = () => {
  return (
    <div className="mx-auto max-w-[1152px] pt-60 pr-12 pb-60 pl-9">
      <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4 md:gap-[124px]">
        {statsData.map((item, index) => (
          <StatsUnit key={index} num={item.num} text={item.text} />
        ))}
      </div>
    </div>
  )
}

export default Stats
