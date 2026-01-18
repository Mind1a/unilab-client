import NewsDetailClient from "@features/news/components/primitives/NewsDetailClient"
import { ParamsProps } from "@features/landing/types"

export default async function NewsDetailPage({ params }: ParamsProps) {
  const { newsId } = await params
  return <NewsDetailClient id={newsId} />
}
