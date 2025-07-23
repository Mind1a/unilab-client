"use client"
import { SideBarList } from "@features/landing/data/landingData"
import { SideBarMenuProps } from "@features/landing/types"
import SectionNavItem from "./SectionNavItem"
import ScrollTracking from "./ScrollTracking"
import HeightStyles from "@features/landing/components/primitives/HeightStyles"

const SideBarMenu = ({ CloseBurgerMenu }: SideBarMenuProps) => {
  const sectionIds = SideBarList.map((item) => item.href)

  const activeSection = ScrollTracking(sectionIds)

  const getIndicatorPosition = () => {
    const activeIndex = SideBarList.findIndex(
      (item) => item.href === activeSection
    )

    if (activeIndex === -1) return 0

    const gapNumeric = gapValueIndicator

    const itemHeight = 24

    const totalOffset = activeIndex * (itemHeight + gapNumeric)

    return totalOffset
  }

  const {
    gapValue,
    scrollHeight,
    indicator,
    indicatorMarginTop,
    gapValueIndicator,
  } = HeightStyles()

  return (
    <div className="w-full max-w-[228px] px-4 md:px-0 2xl:pr-0">
      <div className="flex items-center gap-[24px]">
        <div
          className="relative w-[2px] flex-shrink-0 blur-[1px] filter"
          style={{
            background:
              "linear-gradient(0deg,rgba(237, 250, 255, 0) 2%, rgba(237, 250, 255, 1) 6%, rgba(237, 250, 255, 1) 15%, rgba(237, 250, 255, 0.8) 92%, rgba(237, 250, 255, 0) 98%)",
            height: scrollHeight,
          }}
        >
          <div
            className="absolute left-0 w-[2px] rounded-full transition-all duration-300 ease-in-out"
            style={{
              top: `${getIndicatorPosition()}px`,
              opacity: activeSection ? 1 : 0,
              background:
                "linear-gradient(0deg,rgba(0, 128, 255, 0.22) 10%, rgba(7, 131, 255, 1) 35%, rgba(7, 131, 255, 1) 65%, rgba(8, 132, 255, 0.22) 90%)",
              height: indicator,
              marginTop: indicatorMarginTop,
            }}
          />
        </div>
        <ul
          className="flex flex-1 flex-col justify-start"
          style={{ gap: gapValue }}
        >
          {SideBarList.map((eachElement) => (
            <SectionNavItem
              key={eachElement.id}
              item={eachElement}
              onClick={CloseBurgerMenu}
              isActive={eachElement.href === activeSection}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SideBarMenu
