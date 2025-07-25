"use client"

import HeightCheck from "./HeightCheck"

const HeightStyles = () => {
  const isMediumScreen = HeightCheck(845)
  const isSmallScreen = HeightCheck(650)

  const gapValue = !isMediumScreen ? "48px" : isSmallScreen ? "20px" : "35px"

  const gapValueIndicator = !isMediumScreen ? 48 : isSmallScreen ? 20 : 35

  const scrollHeight = !isMediumScreen
    ? "620px"
    : isSmallScreen
      ? "397px"
      : "497px"
  const indicator = !isMediumScreen ? "60px" : isSmallScreen ? "30px" : "55px"
  const indicatorMarginTop = !isMediumScreen
    ? "28px"
    : isSmallScreen
      ? "30px"
      : "15px"

  return {
    gapValue,
    scrollHeight,
    indicator,
    indicatorMarginTop,
    gapValueIndicator,
  }
}

export default HeightStyles
