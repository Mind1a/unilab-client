"use client"
import { useState, useEffect } from "react"

const HeightCheck = (screenHeight = 800): boolean => {
  const [isShort, setIsShort] = useState(false)

  useEffect(() => {
    const checkHeight = () => {
      setIsShort(window.innerHeight < screenHeight)
    }

    checkHeight()
    window.addEventListener("resize", checkHeight)
    return () => window.removeEventListener("resize", checkHeight)
  }, [screenHeight])

  return isShort
}

export default HeightCheck
