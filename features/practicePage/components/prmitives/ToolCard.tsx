import { ComponentType, SVGProps } from "react"

type ToolCardProps = {
  Icon: ComponentType<SVGProps<SVGSVGElement>>
}

const ToolCard = ({ Icon }: ToolCardProps) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <Icon />
    </div>
  )
}

export default ToolCard
