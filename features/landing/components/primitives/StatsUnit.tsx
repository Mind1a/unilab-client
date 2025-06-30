import { StatsProps } from "@features/landing/types"

const StatsUnit = ({ num, text }: StatsProps) => {
  return (
    <div className="flex flex-col gap-9">
      <div className="text-8xl">{num}</div>
      <span className="text-lg">{text}</span>
    </div>
  )
}

export default StatsUnit
