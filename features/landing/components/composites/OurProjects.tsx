"use client"
import Arrow from "@features/landing/components/primitives/Arrow"
import OurProjectsSlide from "@features/landing/components/primitives/OurProjectsSlide"
import { ourProjectsData } from "@features/landing/data/landingData"
import useEmblaControls from "@features/landing/hooks/useEmblaControls"
import Link from "next/link"

function OurProjects() {
  const { emblaRef, prevDisabled, nextDisabled, scrollNext, scrollPrev } =
    useEmblaControls({ skipSnaps: true })

  return (
    <section className="mx-auto flex w-full max-w-[1104px] flex-col gap-6 md:gap-12">
      <div className="mb-[8px] flex items-center justify-between md:mb-10">
        <h2 className="font-case text-center text-2xl leading-8 font-black text-[#EDFAFF] md:text-5xl md:leading-14">
          პროექტები
        </h2>
        <div className="flex items-center md:gap-2">
          <button
            onClick={scrollPrev}
            className="cursor-pointer p-2 md:p-0"
            aria-label="Scroll to previous slide"
          >
            <Arrow direction="right" isDisabled={prevDisabled} />
          </button>
          <button
            onClick={scrollNext}
            className="cursor-pointer p-2 md:p-0"
            aria-label="Scroll to next slide"
          >
            <Arrow direction="left" isDisabled={nextDisabled} />
          </button>
        </div>
      </div>
      <div className="overflow-x-hidden p-1" ref={emblaRef}>
        <div className="flex gap-12 md:px-2">
          {ourProjectsData.map((item) => (
            <Link href={item.href} key={item.id}>
              <OurProjectsSlide img={item.img} title={item.title} />
            </Link>
          ))}
        </div>
      </div>
      <Link
        className="text-right text-[14px] leading-5 font-medium text-[#d4d4d4] md:text-[16px]"
        href="#"
      >
        ყველას ნახვა &gt;
      </Link>
    </section>
  )
}

export default OurProjects
