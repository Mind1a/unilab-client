"use client"

import { useEffect, useState } from "react"

import { logoSizes, logos } from "@features/landing/data/sideBarData"
import { AnimatePresence, motion } from "motion/react"

import BurgerMenuIcon from "./BurgerMenuIcon"
import HeaderIcons from "./HeaderIcons"
import SideBarMenu from "./SideBarMenu"

const SideBarHeader = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1536) setIsOpen(false)
    }

    window.addEventListener("resize", onResize)
    onResize()

    return () => {
      window.removeEventListener("resize", onResize)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <div>
      <div className="relative z-[20] flex justify-between bg-[#090707] px-[24px] py-[15px] 2xl:py-12 2xl:pr-0 2xl:pl-12">
        <div className="flex items-center gap-x-3 2xl:gap-x-5">
          {logos.map((logo) => (
            <HeaderIcons key={logo.id} logo={logo} logoSizes={logoSizes} />
          ))}
        </div>
        <div className="flex cursor-pointer items-center justify-center 2xl:hidden">
          <BurgerMenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="burger-menu"
            className="fixed inset-0 z-[10] mt-[78px] w-screen overflow-y-auto bg-[#090707] 2xl:mt-[120px]"
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
