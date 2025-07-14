"use client"
import HeightCheck from "./HeightCheck"

const HeightStyles = () => {
  const isMediumScreen = HeightCheck(845)
  const isSmallScreen = HeightCheck(650)

  const gapValue = !isMediumScreen ? "68px" : isSmallScreen ? "28px" : "45px"

  const gapValueIndicator = !isMediumScreen ? 68 : isSmallScreen ? 28 : 45

  const scrollHeight = !isMediumScreen
    ? "697px"
    : isSmallScreen
      ? "397px"
      : "497px"
  const indicator = !isMediumScreen ? "60px" : isSmallScreen ? "30px" : "40px"
  const indicatorMarginTop = !isMediumScreen
    ? "42px"
    : isSmallScreen
      ? "27px"
      : "24px"

  return {
    gapValue,
    scrollHeight,
    indicator,
    indicatorMarginTop,
    gapValueIndicator,
  }
}

export default HeightStyles
