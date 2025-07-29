import Link from "next/link"
import type { NewsCardProps } from "@features/landing/types"
import React from "react"

function NewsCard({ item }: { item: NewsCardProps }) {
  return (
    // <div
    //   key={item.id}
    //   className="flex w-full max-w-[814px] shrink-0 cursor-pointer gap-6 rounded-2xl bg-[#0F0F10] p-4 shadow-[0_0_8px_1px_#0080FFCC]"
    // >
    //   <img
    //     src={item.image.src}
    //     className="rounded-lg"
    //     alt={`Cover of ${item.title}`}
    //   />
    //   <div className="flex flex-col justify-between gap-6">
    //     <div className="flex flex-col gap-4">
    //       <h3 className="font-[noto-sans] text-[18px] leading-[1.4] font-black text-[#d4d4d4]">
    //         {item.title}
    //       </h3>
    //       <p className="line-clamp-5 font-[noto-sans] text-[16px] leading-[1.5] font-medium text-[#d4d4d4]">
    //         {item.paragraph}
    //       </p>
    //     </div>
    //     <div className="flex justify-between">
    //       <h4 className="self-end text-[16px] leading-[1.5] text-[#3b3b3e]">
    //         {item.date}
    //       </h4>
    //       <Link
    //         href={item.href}
    //         className="solid cursor-pointer rounded-[8px] border-[1px] border-[#d4d4d4] px-6 py-3"
    //       >
    //         ვრცლად
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    <div
      key={item.id}
      className="flex w-full max-w-[272px] shrink-0 cursor-pointer flex-col gap-4 rounded-2xl bg-[#0F0F10] p-4 shadow-[0_0_8px_1px_#0080FFCC] md:max-w-[350px] md:gap-6 lg:max-w-[814px] lg:flex-row"
    >
      <img
        src={item.image.src}
        className="rounded-lg"
        alt={`Cover of ${item.title}`}
      />
      <div className="flex flex-col justify-between gap-6">
        <div className="flex flex-col gap-2 lg:gap-4">
          <h3 className="font-[noto-sans] text-[16px] leading-[1.4] font-black text-[#d4d4d4] md:text-[18px]">
            {item.title}
          </h3>
          <p className="line-clamp-8 font-[noto-sans] text-xs leading-[18px] font-medium text-[#d4d4d4] md:line-clamp-4 md:text-[16px] md:leading-[1.5] lg:line-clamp-5">
            {item.paragraph}
          </p>
        </div>
        <div className="flex justify-between">
          <h4 className="self-end text-[14px] leading-[1.5] text-[#3b3b3e] md:text-[16px]">
            {item.date}
          </h4>
          <Link
            href={item.href}
            className="solid cursor-pointer rounded-[8px] border-[1px] border-[#d4d4d4] px-6 py-2 text-xs md:py-3 md:text-[16px]"
          >
            ვრცლად
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NewsCard
