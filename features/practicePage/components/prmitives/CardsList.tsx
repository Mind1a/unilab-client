import Card from "./Card"
import { CardItem } from "@features/practicePage/type"

type CardsListProps = {
  items: CardItem[]
}

const CardsList = ({ items }: CardsListProps) => {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:gap-[32px]">
      {items.map((item) => (
        <Card key={item.id} title={item.title} description={item.description} />
      ))}
    </div>
  )
}

export default CardsList
