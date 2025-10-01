"use client"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "motion/react"
import { flyout, navigation } from "@features/landing/data/filtration"

const FilterButton = () => {
  const [openId, setOpenId] = useState<number | null>(null)

  return (
    <ul className="relative flex justify-start gap-[8px]">
      {navigation.map((navigationElement) => (
        <div
          key={navigationElement.id}
          className="cursor-pointer"
          onClick={() =>
            setOpenId(
              openId === navigationElement.id ? null : navigationElement.id
            )
          }
        >
          <li className="flex items-center text-[#000000CC]">
            <div className="flex w-[108px] cursor-pointer items-center justify-between gap-[8px] rounded-[8px] border border-[#3B3B3E] bg-[#0F0F10] px-[8px] py-[5px]">
              <p className="text-[12px] text-[#D4D4D4]">
                {navigationElement.name}
              </p>

              {navigationElement.dropDown && (
                <motion.button
                  animate={openId === navigationElement.id ? "open" : "closed"}
                  variants={{
                    open: { rotate: 180 },
                    closed: { rotate: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={"/newsIcon/image/svg/chervon-down.svg"}
                    alt="chevronDown"
                    width={10}
                    height={5}
                  />
                </motion.button>
              )}
            </div>
            <AnimatePresence>
              {openId === navigationElement.id &&
                navigationElement.dropDown && (
                  <motion.ul
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute top-[50px] flex min-h-[34px] flex-col gap-[37px] border border-[#3B3B3E] bg-[#0F0F10] px-[18px] py-[18px] shadow-[0px_0px_4px_0px_#00000040]"
                  >
                    {flyout[openId]?.map((flyoutElement) => (
                      <li key={flyoutElement.id}>
                        <Link href={flyoutElement.href}>
                          {flyoutElement.name}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
            </AnimatePresence>
          </li>
        </div>
      ))}
    </ul>
  )
}

export default FilterButton
