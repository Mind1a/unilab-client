import NewsDetailClient from "./NewsDetailClient"

type Props = {
  params: {
    newsId: string
  }
}

export default function NewsDetailPage({ params }: Props) {
  console.log("params.newsId:", params.newsId)

  return <NewsDetailClient id={params.newsId} />
}
