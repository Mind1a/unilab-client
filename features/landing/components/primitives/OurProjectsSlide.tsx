import type { ourProjectSlideProps } from "@features/landing/types"
import Image from "next/image"

function OurProjectsSlide({ img, title }: ourProjectSlideProps) {
  return (
    <div className="flex w-full max-w-[272px] shrink-0 cursor-pointer flex-col gap-4 rounded-2xl bg-[#0F0F10] p-4 shadow-[0_0_8px_1px_#0080FFCC] md:max-w-[472px]">
      <Image src={img} className="rounded-lg" alt={`Cover of ${title}`} />
      <div className="flex flex-col justify-between gap-6">
        <h3 className="truncate font-[noto-sans] leading-6 font-black text-[#d4d4d4] md:text-2xl md:leading-8">
          {title}
        </h3>
      </div>
    </div>
  )
}

export default OurProjectsSlide
