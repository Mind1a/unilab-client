import NewsPage from "@features/news/components/composites/NewsPage"
import { Suspense } from "react"

const News = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <NewsPage />
      </Suspense>
    </div>
  )
}

export default News
