import React from "react"
import Image from "next/image"
import ImageOne from "../../assets/images/ImageOne.png"
import Button from "../primitive/Button"

const FeatureHero = ({
  header,
  instructor,
}: {
  header: string
  instructor: string
}) => {
  return (
    <section className="mt-6 md:mt-[114px]">
      <div className="font-case mx-auto flex max-w-[1200px] flex-col space-y-[48px] sm:flex-row-reverse sm:gap-2 md:flex-col lg:flex-row-reverse lg:gap-[20px] xl:gap-[48px]">
        <div className="flex flex-col justify-between text-[#D4D4D4]">
          <div>
            <h1 className="mb-6 text-[32px] leading-[40px] font-black md:text-[36px] lg:text-[44px] lg:leading-[56px] xl:text-[64px] xl:leading-[72px]">
              {header}
            </h1>
            <p className="mb-6 text-[16px] font-medium">სილაბუსი</p>
            <p className="text-[16px]">
              <span className="font-medium">ხელმძღვანელი</span>
              <span> : </span>
              <span className="font-black">{instructor}</span>
            </p>
          </div>
          <div className="mt-6 block">
            <Button />
          </div>
        </div>

        <div className="relative flex w-full max-w-[480px] shrink-0 items-center justify-center sm:max-w-[380px] md:max-w-[480px] lg:max-w-[400px] xl:max-w-[504px]">
          <Image
            src={ImageOne}
            alt="Graphic Design"
            priority
            className="object-contain"
          />
        </div>
      </div>
    </section>
  )
}

export default FeatureHero
