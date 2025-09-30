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
    <div className="w-full max-w-[1068px] space-y-[48px] lg:mt-[114px]">
      <div className="flex flex-col-reverse items-center justify-between gap-[24px] lg:flex-row lg:gap-[6px]">
        <p className="flex w-full max-w-[504px] justify-end text-[#84858C] lg:hidden">
          {data.date}
        </p>
        <div className="min-h-[380px] w-full max-w-[504px] rounded-[8px] bg-black"></div>
        <div className="flex min-h-[84px] w-full max-w-[504px] flex-col justify-between gap-[24px] lg:min-h-[380px] lg:gap-[0px]">
          <p className="text-[24px] font-black text-[#D4D4D4]">{data.title}</p>
          <div>
            <div className="flex items-center justify-between">
              <div className="flex gap-[6px]">
                {data.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="rounded-[16px] border border-[#0080FF] px-[10px] py-[4px]"
                  >
                    <span className="text-[16px] text-[#D4D4D4]">{tag}</span>
                  </div>
                ))}
              </div>

              <p className="hidden text-[#84858C] lg:flex">{data.date}</p>
            </div>
          </div>
        </div>
      </div>
      <p className="leading-[24px] font-medium text-[#D4D4D4]">
        {data.description}
      </p>
    </div>
  )
}
