import blueShapeSvg from "@features/landing/assets/blue-shape.svg"
import Image from "next/image"
import type { UniCourseCardProps } from "@features/landing/types"

const UnicourseCard = ({ title, image }: UniCourseCardProps) => {
  return (
    <div className="group relative flex h-[224px] w-[328px] items-center justify-center overflow-hidden rounded-[8px] border-[1px] border-solid border-[#0080FFCC] bg-[#0F0F10] px-12 font-[noto-sans] shadow-[0_0_8px_1px_#0080FFCC]">
      <Image
        className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform opacity-0 transition-opacity duration-[300ms] ease-in-out group-hover:opacity-100"
        src={image}
        alt="bg"
      />
      <h1 className="relative z-30 text-center text-[24px] leading-[32px] font-black text-[#EDFAFF]">
        {title}
      </h1>
      <Image
        className="absolute right-0 bottom-0 opacity-0 transition-opacity duration-[300ms] ease-in-out group-hover:opacity-100"
        src={blueShapeSvg}
        alt=""
      />
    </div>
  )
}

export default UnicourseCard
