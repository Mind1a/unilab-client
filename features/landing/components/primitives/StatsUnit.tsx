"use client"

import { animate, useInView } from "motion/react"
import { useEffect, useRef, useState } from "react"

import { StatsProps } from "@features/landing/types"

const StatsUnit = ({ num, text, decimals = 0 }: StatsProps) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true })
  const [displayValue, setDisplayValue] = useState("0")

  useEffect(() => {
    if (!isInView) return

    animate(0, num, {
      duration: 1,
      onUpdate(value) {
        const formatted = value.toFixed(decimals)
        setDisplayValue(formatted)
      },
    })
  }, [num, decimals, isInView])

  return (
    <div className="flex flex-col gap-6 lg:gap-9">
      <div ref={ref} className="text-5xl sm:text-7xl md:text-8xl">
        {displayValue}
      </div>
      <span className="text-sm sm:text-base md:text-lg">{text}</span>
    </div>
  )
}

export default StatsUnit
