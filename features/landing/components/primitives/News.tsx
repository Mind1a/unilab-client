"use client"
import { News } from "@features/landing/api"
import { NewsItem } from "@features/landing/types"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import Link from "next/link"

const NewsPage = () => {
  const {
    data: news,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["cards"],
    queryFn: News,
  })

  console.log({ news, isLoading, isError, error })

  if (isError) return <p>Something went wrong: {error?.message}</p>
  if (isLoading) return <p>Loading...</p>

  return (
    <div className="flex flex-col gap-[48px]">
      {news?.map((item: NewsItem) => (
        <div
          key={item.id}
          className="flex flex-col items-center gap-[24px] lg:flex-row"
        >
          <div className="min-h-[249px] w-full max-w-[332px] rounded-[8px] bg-black lg:min-h-[180px] lg:max-w-[240px]"></div>
          <div className="flex min-h-[184px] w-full max-w-[804px] flex-col justify-between rounded-[16px] bg-[#0F0F10] p-[16px] lg:min-h-[180px]">
            <div className="flex justify-between">
              <p className="w-full max-w-[386px] text-[16px] font-bold text-[#D4D4D4] lg:text-[18px]">
                {item.title}
              </p>
              <p className="text-[#84858C]">{item.date}</p>
            </div>
            <div className="flex justify-between">
              <Link
                href={`/news/${item.id}`}
                className="flex cursor-pointer items-center gap-[8px]"
              >
                ვრცლად
                <Image
                  src="/newsIcon/image/svg/showMoreIcon.svg"
                  alt="arrow"
                  width={24}
                  height={24}
                />
              </Link>
              <div className="flex gap-[6px]">
                {item.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="rounded-[16px] border border-[#0080FF] px-[10px] py-[4px]"
                  >
                    <span className="text-[14px] text-[#D4D4D4]">{tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
export default NewsPage
