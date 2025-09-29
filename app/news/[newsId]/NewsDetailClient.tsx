"use client"

import { NewsById } from "@features/landing/api"
import { NewsItem } from "@features/landing/types"
import { useQuery } from "@tanstack/react-query"

type Props = {
  id: string
}

export default function NewsDetailClient({ id }: Props) {
  const { data, isLoading, isError } = useQuery<NewsItem>({
    queryKey: ["news", id],
    queryFn: () => NewsById(id),
  })

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error loading news</p>
  if (!data) return <p>No news found</p>

  return (
    <div>
      <h1>{data.title}</h1>
    </div>
  )
}
