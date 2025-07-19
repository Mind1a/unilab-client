"use client"

import useEmblaCarousel from "embla-carousel-react"
import { useEffect, useState } from "react"
import Bullets from "../primitives/Bullets"
import HeroSlider from "../primitives/HeroSlider"
import HeroTop from "../primitives/HeroTop"

export const Hero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
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

  useEffect(() => {
    if (!emblaApi) return
    let timeout: NodeJS.Timeout

    const autoScroll = () => {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        emblaApi.scrollNext()
      }, 5000)
    }

    emblaApi.on("select", autoScroll)
    autoScroll()

    return () => {
      clearTimeout(timeout)
      emblaApi.off("select", autoScroll)
    }
  }, [emblaApi])

  return (
    <section
      id="main"
      className="flex min-h-[582px] w-full flex-col justify-between md:justify-normal md:gap-[138px]"
    >
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
