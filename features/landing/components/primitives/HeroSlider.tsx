import { heroData } from "@features/landing/data/landingData"
import { EmblaViewportRefType } from "embla-carousel-react"
import Image from "next/image"

const HeroSlider = ({ emblaRef }: { emblaRef: EmblaViewportRefType }) => {
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {heroData.map((item) => (
          <div key={item.id} className="embla__slide">
            <div className="flex flex-col items-end gap-6 md:gap-12">
              <button className="flex cursor-pointer items-center gap-1 rounded-md bg-[#0080FF] px-6 py-3">
                დარეგისტრირდი
                <Image
                  src="/Btn.Arrow.svg"
                  alt="button arrow"
                  width={16}
                  height={16}
                />
              </button>
              <p className="font-case text-right text-[32px] font-black md:text-4xl lg:text-5xl xl:text-8xl">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HeroSlider
