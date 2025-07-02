import { statsData } from "@features/landing/data/landingData"
import StatsUnit from "../primitives/StatsUnit"

const Stats = () => {
  return (
    <div className="max-w-[1152px] pt-60 pr-12 pb-60 pl-9">
      <div className="grid grid-cols-2 text-center md:grid-cols-4">
        {statsData.map((item, index) => (
          <StatsUnit key={index} num={item.num} text={item.text} />
        ))}
      </div>
    </div>
  )
}

export default Stats
