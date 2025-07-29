"use client"

import { useCallback, useEffect, useState } from "react"

import Arrow from "@features/landing/components/primitives/Arrow"
import NewsCarousel from "@features/landing/components/primitives/NewsCarousel"
import useEmblaCarousel from "embla-carousel-react"

function News() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    skipSnaps: false,
  })

  const [prevDisabled, setPrevDisabled] = useState(true)
  const [nextDisabled, setNextDisabled] = useState(false)
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const updateDisabledStates = () => {
      setPrevDisabled(!emblaApi.canScrollPrev())
      setNextDisabled(!emblaApi.canScrollNext())
    }
    updateDisabledStates()
    emblaApi.on("select", updateDisabledStates)
    emblaApi.on("reInit", updateDisabledStates)

    return () => {
      emblaApi.off("select", updateDisabledStates)
      emblaApi.off("reInit", updateDisabledStates)
    }
  }, [emblaApi])

  return (
    <section id="news" className="flex w-full flex-col gap-12 md:gap-22">
      <div className="flex items-center justify-between">
        <h2 className="font-case text-center text-2xl leading-8 font-black text-[#EDFAFF] md:text-5xl md:leading-14">
          სიახლეები
        </h2>
        {/* <div className="flex items-center gap-2">
          <button
            onClick={scrollPrev}
            className="cursor-pointer"
            aria-label="Scroll to previous slide"
          >
            <Arrow direction="right" isDisabled={prevDisabled} />
          </button>
          <button
            onClick={scrollNext}
            className="cursor-pointer"
            aria-label="Scroll to next slide"
          >
            <Arrow direction="left" isDisabled={nextDisabled} />
          </button>
        </div> */}
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
      <NewsCarousel ref={emblaRef} />
    </section>
  )
}

export default News
