import NewsDetailClient from "@features/landing/components/primitives/NewsDetailClient"

type Props = {
  params: {
    newsId: string
  }
}

export default function NewsDetailPage({ params }: Props) {
  return <NewsDetailClient id={params.newsId} />
}
