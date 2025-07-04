import blueShapeSvg from "@features/landing/assets/blue-shape.svg"
import Image from "next/image"
import type { UniCourseCardProps } from "@features/landing/types"
import Link from "next/link"

const UnicourseCard = ({ title, image }: UniCourseCardProps) => {
  return (
    <Link href="#">
      <article className="group relative flex h-[224px] items-center justify-center overflow-hidden rounded-[8px] border-[1px] border-solid border-[#0080FF] bg-[#0F0F10] px-12 font-[noto-sans] shadow-[0_0_8px_1px_#0080FF]">
        <Image
          className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform opacity-0 transition-opacity duration-[300ms] ease-in-out group-hover:opacity-100"
          src={image}
          alt={`${title} course background image`}
          loading="eager"
        />
        <h3 className="relative z-30 text-center text-[24px] leading-[32px] font-black text-[#EDFAFF]">
          {title}
        </h3>
        <Image
          className="absolute right-0 bottom-0 opacity-0 transition-opacity duration-[300ms] ease-in-out group-hover:opacity-100"
          src={blueShapeSvg}
          alt="Blue Shape"
          loading="eager"
        />
      </article>
    </Link>
  )
}

export default UnicourseCard
