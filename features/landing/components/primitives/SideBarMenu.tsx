import { SideBarList } from "@features/landing/data/landingData"
import Link from "next/link"
import React from "react"

const SideBarMenu = () => {
  return (
    <div className="hidden w-full max-w-[228px] 2xl:flex">
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
              className="cursor-pointer font-medium text-[#D4D4D4]"
              key={eachElement.id}
            >
              <Link href={eachElement.href}>{eachElement.section}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SideBarMenu
