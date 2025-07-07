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
    <section className="m-auto mt-36 flex min-h-screen max-w-[1152px] flex-col gap-[138px] pr-12 pl-9">
      <HeroTop selectedIndex={selectedIndex} scrollToArrow={scrollToArrow} />
      <div className="flex flex-col gap-16">
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
