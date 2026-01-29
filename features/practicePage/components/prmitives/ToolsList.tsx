import { ToolItem } from "@features/practicePage/type"
import ToolCard from "./ToolCard"

type ToolsListProps = {
  items: ToolItem[]
}

const ToolsList = ({ items }: ToolsListProps) => {
  return (
    <div className="flex gap-[30px]">
      {items.map((tool) => (
        <ToolCard key={tool.id} Icon={tool.Icon} />
      ))}
    </div>
  )
}

export default ToolsList
