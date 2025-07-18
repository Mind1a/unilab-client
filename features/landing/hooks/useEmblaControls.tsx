import { useCallback, useEffect, useState } from "react"

import type { EmblaOptions } from "@features/landing/types"
import useEmblaCarousel from "embla-carousel-react"

function useEmblaControls(
  options: EmblaOptions = { loop: false, skipSnaps: false }
) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [prevDisabled, setPrevDisabled] = useState(true)
  const [nextDisabled, setNextDisabled] = useState(false)

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    const updateDisabledStates = () => {
      setPrevDisabled(!emblaApi.canScrollPrev())
      setNextDisabled(!emblaApi.canScrollNext())
    }

    updateDisabledStates()
    emblaApi.on("select", updateDisabledStates)
    emblaApi.on("reInit", updateDisabledStates)

    return () => {
      emblaApi.off("select", updateDisabledStates)
      emblaApi.off("reInit", updateDisabledStates)
    }
  }, [emblaApi])

  return {
    emblaRef,
    emblaApi,
    prevDisabled,
    nextDisabled,
    scrollNext,
    scrollPrev,
  }
}

export default useEmblaControls
