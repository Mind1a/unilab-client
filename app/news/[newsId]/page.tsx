import NewsDetailClient from "@features/news/components/primitives/NewsDetailClient"
import { ParamsProps } from "@features/landing/types"

export default function NewsDetailPage({ params }: ParamsProps) {
  return <NewsDetailClient id={params.newsId} />
}
