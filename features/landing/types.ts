
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

export type QuestionProps = {
  title: string
  id: string
  children: React.ReactNode
}
export type FaqProps = {
  id: string
  question: string
  answer: string
}
