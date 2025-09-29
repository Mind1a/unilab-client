"use client"
import { News } from "@features/landing/api"
import { NewsItem } from "@features/landing/types"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"

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
        <div key={item.id}>
          {/* <Image
            src={item.image}
            alt="notification Image"
            width={240}
            height={180}
          /> */}
          <div className="flex min-h-[180px] w-full max-w-[804px] flex-col justify-between rounded-[16px] bg-[#0F0F10] p-[16px]">
            <div className="flex justify-between">
              <p className="w-full max-w-[386px] text-[18px] font-bold text-[#D4D4D4]">
                {item.title}
              </p>
              <p className="text-[#84858C]">{item.date}</p>
            </div>
            <div>
              <button>ვრცლად</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
export default NewsPage
