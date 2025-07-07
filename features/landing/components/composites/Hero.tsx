"use client"

import useEmblaCarousel from "embla-carousel-react"
import { useEffect, useState } from "react"

export const Hero = () => {
  // გვერდების მონაცემები //
  const heroData = [
    { id: 1, text: "პროფესიული აქსელერაციის პროგრამა" },
    { id: 2, text: "უნიკურსი" },
    { id: 3, text: "შენი გზა ტექნოლოგიებში" },
  ]

  // embla ჰუკები //
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
      {/* სტატიკური ზედა სექცია */}
      <div className="flex items-center justify-between">
        <span className="text-8xl font-black">{`0${selectedIndex + 1}`}</span>
        <button
          className="h-[63px] w-[74px] cursor-pointer bg-[url(/Arrow.png)]"
          onClick={scrollToArrow}
        />
      </div>

      <div className="flex flex-col gap-16">
        {/* სლაიდერის სივრცე */}
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {heroData.map((item) => (
              <div key={item.id} className="embla__slide">
                <div className="flex flex-col items-end gap-12">
                  <button className="rounded-lg bg-[#0080FF] px-6 py-3">
                    დარეგისტრირდი
                  </button>
                  <p className="font-case text-right text-8xl font-black">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ბულეტები */}
        <div className="flex justify-center gap-3">
          {heroData.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToBullet(index)}
              className={`cursor-pointer rounded-full p-1.5 ${
                index === selectedIndex ? "bg-gray-300" : "bg-neutral-800"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
