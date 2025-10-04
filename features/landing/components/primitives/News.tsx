"use client"
import { NewsApi } from "@features/landing/api"
import { NewsItem } from "@features/landing/types"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import Pagination from "./Pagination"
import NewsHeader from "./NewsHeader"
import NewsSkeleton from "./NesSkeleton"

const News = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const currentPage = Number(searchParams.get("page")) || 1
  const totalPages = 3

  const {
    data: news,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["cards", currentPage],
    queryFn: () => NewsApi(currentPage.toString()),
  })

  const handlePageChange = (page: number) => {
    router.push(`?page=${page}`)
  }

  if (isError) return <p>Something went wrong: {error?.message}</p>

  return (
    <div className="flex w-full max-w-[1068px] flex-col gap-[88px]">
      <NewsHeader />
      <div className="flex min-h-[864px] flex-col gap-[48px]">
        {isLoading ? (
          <NewsSkeleton />
        ) : (
          news?.map((item: NewsItem) => (
            <div
              key={item.id}
              className="flex flex-col items-center gap-[16px] lg:flex-row lg:gap-[24px]"
            >
              <div className="min-h-[249px] w-full max-w-[332px] rounded-[8px] bg-black lg:min-h-[180px] lg:max-w-[240px]"></div>
              <div className="flex min-h-[184px] w-full max-w-[804px] flex-col justify-between rounded-[16px] bg-[#0F0F10] p-[16px] lg:min-h-[180px]">
                <div className="flex justify-between">
                  <p className="w-full max-w-[386px] text-[16px] font-bold text-[#D4D4D4] lg:text-[18px]">
                    {item.title}
                  </p>
                  <p className="hidden text-[#84858C] lg:flex">{item.date}</p>
                </div>
                <div className="flex flex-col-reverse gap-[24px] lg:flex-row lg:justify-between">
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
                    <p className="flex text-[#84858C] lg:hidden">{item.date}</p>
                  </div>
                  <div className="flex gap-[6px]">
                    {item.tags.map((tag, index) => (
                      <div
                        key={index}
                        className="rounded-[16px] border border-[#0080FF] px-[10px] py-[4px]"
                      >
                        <span className="text-[14px] text-[#D4D4D4]">
                          {tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <Pagination
        page={currentPage}
        totalPages={totalPages}
        setPage={handlePageChange}
      />
    </div>
  )
}

export default News
