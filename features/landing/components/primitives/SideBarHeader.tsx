"use client"
import { logos } from "@features/landing/data/sideBarData"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import SideBarMenu from "./SideBarMenu"
import { LogoSizesProps } from "@features/landing/types"

const logoSizes: LogoSizesProps = {
  unilab: "h-[32px] w-[24px] 2xl:h-[64px] 2xl:w-[50px]",
  slash: "h-[48px] w-[13px] 2xl:h-[64px] 2xl:w-[16px]",
  iliauni: "h-[32px] w-[32px] 2xl:h-[64px] 2xl:w-[64px]",
}

const SideBarHeader = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1536) setIsOpen(false)
    }

    window.addEventListener("resize", onResize)
    onResize()

    return
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <div>
      <div className="relative z-[20] flex justify-between bg-[#090707] px-[24px] py-[30px] 2xl:py-12 2xl:pr-0 2xl:pl-12">
        <div className="flex items-center gap-x-3 2xl:gap-x-5">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className={`relative ${logoSizes[logo.id as "unilab" | "slash" | "iliauni"]}`}
            >
              {logo.href ? (
                <Link href={logo.href}>
                  <Image src={logo.src} alt={logo.alt} fill />
                </Link>
              ) : (
                <Image src={logo.src} alt={logo.alt} fill />
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
              isOpen
                ? "/HeaderIcon/CloseIcon.svg"
                : "/HeaderIcon/BurgerMenu.svg"
            }
            alt={isOpen ? "BurgerMenuButton" : "CloseButton"}
            width={32}
            height={32}
          />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="burger-menu"
            className="fixed inset-0 z-[10] mt-[102px] w-screen overflow-y-auto bg-[#090707]"
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5 }}
          >
            <SideBarMenu CloseBurgerMenu={() => setIsOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default SideBarHeader
