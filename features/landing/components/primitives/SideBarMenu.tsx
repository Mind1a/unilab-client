"use client"
import { SideBarList } from "@features/landing/data/landingData"
import { SideBarMenuProps } from "@features/landing/types"
import SectionNavItem from "./SectionNavItem"
import useHeightCheck from "./useHeightCheck"

const SideBarMenu = ({ CloseBurgerMenu }: SideBarMenuProps) => {
  const isMediumScreen = useHeightCheck(845)
  const isSmallScreen = useHeightCheck(650)

  const gapValue = !isMediumScreen ? "68px" : isSmallScreen ? "28px" : "45px"

  const scrollHeight = !isMediumScreen
    ? "697px"
    : isSmallScreen
      ? "397px"
      : "497px"

  return (
    <div className="w-full max-w-[228px] px-[24px] 2xl:pr-0 2xl:pl-12">
      <div className="flex gap-[24px]">
        <div
          className="w-[2px] blur-[1px] filter"
          style={{
            background:
              "linear-gradient(0deg,rgba(237, 250, 255, 0) 2%, rgba(237, 250, 255, 1) 6%, rgba(237, 250, 255, 1) 15%, rgba(237, 250, 255, 0.8) 92%, rgba(237, 250, 255, 0) 98%)",
            height: scrollHeight,
          }}
        ></div>
        <ul className="flex flex-col justify-center" style={{ gap: gapValue }}>
          {SideBarList.map((eachElement) => (
            <SectionNavItem
              key={eachElement.id}
              item={eachElement}
              onClick={CloseBurgerMenu}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SideBarMenu
