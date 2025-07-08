import { SideBarList } from "@features/landing/data/landingData"
import { SideBarMenuProps } from "@features/landing/types"
import Link from "next/link"
import React from "react"

const SideBarMenu = ({ CloseBurgerMenu }: SideBarMenuProps) => {
  return (
    <div className="w-full max-w-[228px] px-[24px] 2xl:pr-0 2xl:pl-12">
      <div className="flex gap-[24px]">
        <div
          className="min-h-[696px] w-[2px] blur-[1px] filter"
          style={{
            background:
              "linear-gradient(0deg,rgba(237, 250, 255, 0) 2%, rgba(237, 250, 255, 1) 6%, rgba(237, 250, 255, 1) 15%, rgba(237, 250, 255, 0.8) 92%, rgba(237, 250, 255, 0) 98%)",
          }}
        ></div>
        <ul className="flex flex-col justify-center gap-[68px]">
          {SideBarList.map((eachElement) => (
            <li
              className="cursor-pointer font-medium text-[#D4D4D4] transition-all duration-300 ease-in-out hover:font-black"
              key={eachElement.id}
            >
              <Link onClick={CloseBurgerMenu} href={eachElement.href}>
                {eachElement.section}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SideBarMenu
