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
    <section className="px-4 lg:px-0">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 lg:flex-row-reverse lg:gap-16">
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="mb-6 text-[32px] leading-[40px] font-black lg:text-[64px] lg:leading-[72px]">
              {header}
            </h1>

            <p className="mb-6 text-[16px] font-medium">სილაბუსი</p>

            <p className="text-[16px]">
              <span className="font-medium">ხელმძღვანელი</span>
              <span> : </span>
              <span>{instructor}</span>
            </p>
          </div>
          <div className="mt-6 hidden lg:block">
            <Button />
          </div>
        </div>

        <div className="relative flex w-full max-w-[480px] items-center justify-center lg:max-w-[560px]">
          <Image
            src={ImageOne}
            alt="Graphic Design"
            priority
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  )
}

export default FeatureHero
