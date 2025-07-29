import { EmblaViewportRefType } from "embla-carousel-react"
import NewsCard from "@features/landing/components/primitives/NewsCard"
import { newsData } from "@features/landing/data/landingData"

function NewsCarousel({ ref }: { ref?: EmblaViewportRefType }) {
  return (
    <div className="overflow-x-hidden p-1" ref={ref}>
      <div className="flex gap-12">
        {newsData.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default NewsCarousel
