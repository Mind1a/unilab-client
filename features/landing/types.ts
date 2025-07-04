import { StaticImageData } from "next/image"

export interface UniCourseCardProps {
  title: string
  image: StaticImageData
}

export interface StatsProps {
  num: number
  text: string
  decimals?: number
}
