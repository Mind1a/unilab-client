import Image from "next/image"
import React from "react"
import ImageTwo from "../../assets/images/ImageTwo.png"
import { Paragraph } from "../primitive/Paragraph"

const AboutHead = ({
  instructor,
  bio,
}: {
  instructor: string
  bio: string[]
}) => {
  return (
    <section className="mt-[84px] px-4 lg:mt-[100px]">
      <header className="mx-auto mb-[48px] max-w-[1200px]">
        <h1 className="font-case text-base leading-[24px] font-black lg:text-[24px] lg:leading-[32px]">
          ხელმძღვანელის შესახებ
        </h1>
      </header>

      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 xl:flex-row xl:items-start xl:gap-16">
        <div className="w-full shrink-0 sm:max-w-[400px] md:max-w-[450px] xl:max-w-[354px]">
          <Image
            src={ImageTwo}
            alt={instructor}
            className="h-auto w-full rounded-2xl object-cover"
            priority
          />
        </div>

        <article className="w-full flex-1 space-y-6">
          <h2 className="text-[32px] leading-tight font-bold lg:text-[48px] xl:text-[64px]">
            {instructor}
          </h2>

          <div className="font-case space-y-6 text-[14px] leading-relaxed text-[#D4D4D4] xl:text-[16px]">
            {bio.map((paragraph, index) => (
              <Paragraph key={index}>{paragraph}</Paragraph>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}

export default AboutHead
