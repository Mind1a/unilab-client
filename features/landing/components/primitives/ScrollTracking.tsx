"use client"

import { useEffect, useState } from "react"

const ScrollTracking = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting)
        if (visibleEntries.length === 0) return

        const mostVisible = visibleEntries.reduce((prev, current) =>
          prev.intersectionRatio > current.intersectionRatio ? prev : current
        )
        setActiveSection(mostVisible.target.id)
      },
      {
        rootMargin: "-50% 0px -50% 0px",
      }
    )

    sectionIds.forEach((id) => {
      const targetElement = document.getElementById(id)
      if (targetElement) observer.observe(targetElement)
    })

    return () => observer.disconnect()
  }, [sectionIds])

  return activeSection
}

export default ScrollTracking
