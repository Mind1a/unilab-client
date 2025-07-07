"use client"
import { logos } from "@features/landing/data/sideBarData"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const SideBarHeader = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className="flex justify-between">
      <div className="flex items-center">
        {logos.map((logo) => (
          <div
            key={logo.id}
            className="relative h-[32px] w-[32px] md:h-[64px] md:w-[64px]"
          >
            {logo.href ? (
              <Link href={logo.href}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                />
              </Link>
            ) : (
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
              />
            )}
          </div>
        ))}
      </div>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="cursor-pointer items-center justify-center 2xl:hidden"
      >
        <Image
          src={
            isOpen ? "/HeaderIcon/CloseIcon.svg" : "/HeaderIcon/BurgerMenu.svg"
          }
          alt={isOpen ? "BurgerMenuButton" : "CloseButton"}
          width={32}
          height={32}
        />
      </button>
    </div>
  )
}

export default SideBarHeader
