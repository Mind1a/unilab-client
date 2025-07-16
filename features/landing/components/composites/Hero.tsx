"use client"

import useEmblaCarousel from "embla-carousel-react"
import { useEffect, useState } from "react"
import Bullets from "../primitives/Bullets"
import HeroSlider from "../primitives/HeroSlider"
import HeroTop from "../primitives/HeroTop"

export const Hero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel()
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    emblaApi.on("select", onSelect)
    onSelect()

    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi])

  // ფუნქცია ისრის ღილაკზე დაჭერისას //
  const scrollToBullet = (index: number) => {
    if (emblaApi) emblaApi.scrollTo(index)
  }

  // ფუნქცია ბულეტებზე დაჭერისას //
  const scrollToArrow = () => {
    if (!emblaApi) return
    if (emblaApi.canScrollNext()) emblaApi.scrollNext()
    else emblaApi.scrollTo(0)
  }

  return (
    <section className="mx-auto mt-6 flex min-h-[582px] w-full max-w-[1152px] flex-col justify-between pr-4 pl-4 md:mt-36 md:min-h-screen md:justify-normal md:gap-[138px] md:pr-12 md:pl-9">
      <HeroTop selectedIndex={selectedIndex} scrollToArrow={scrollToArrow} />
      <div className="flex flex-col gap-6 md:gap-16">
        <HeroSlider emblaRef={emblaRef} />
        <Bullets
          scrollToBullet={scrollToBullet}
          selectedIndex={selectedIndex}
        />
      </div>
    </section>
  )
}

export default Hero
