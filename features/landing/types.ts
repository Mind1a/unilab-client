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

export type NewsCardProps = {
  id: number
  image: {
    src: string
  }
  title: string
  paragraph: string
  date: string
  href: string
}

export type ArrowProps = {
  isDisabled: boolean
  direction: "left" | "right"
}
export type QuestionProps = {
  title: string
  id: string
  children: React.ReactNode
}

export type AccelerationLink = {
  id: number
  label: string
  href: string
}

export type FaqProps = {
  id: string
  question: string
  answer: string
}
export type SideBarProps = {
  id: string
  src: string
  alt: string
  href?: string
}
export type SideBarMenuProps = {
  CloseBurgerMenu?: () => void
}
