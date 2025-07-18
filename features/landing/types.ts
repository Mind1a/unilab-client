import { StaticImageData } from "next/image"

// Unicourse card component props types
export type UniCourseCardProps = {
  title: string
  image: StaticImageData
}

// Stats section props types
export type StatsProps = {
  num: number
  text: string
  decimals?: number
}

// News card props types
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

// re-usable arrow component props types
export type ArrowProps = {
  isDisabled: boolean
  direction: "left" | "right"
}

// Quetion Component props types
export type QuestionProps = {
  title: string
  id: string
  children: React.ReactNode
}

// AccelerationItem component props types
export type AccelerationLink = {
  id: number
  label: string
  href: string
}

// FAQ section props types
export type FaqProps = {
  id: string
  question: string
  answer: string
}

// Sidebar header props types
export type SideBarProps = {
  id: string
  src: string
  alt: string
  href?: string
}

// Sidebar menu props types
export type SideBarMenuProps = {
  CloseBurgerMenu?: () => void
}

// Sidebar logos sizes data
export type LogoSizesProps = {
  unilab: string
  slash: string
  iliauni: string
}

// Header icon props types
export type HeaderIconProps = {
  logo: SideBarProps
  logoSizes: Record<string, string>
}

// Burger menu icon props types
export type BurgerMenuIconProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

// Section nav item props types
export type SectionNavItemProps = {
  item: {
    section: string
    href: string
  }
  onClick?: () => void
  isActive?: boolean
}

// Our projects section props types
export type ourProjectSlideProps = {
  id?: number
  img: StaticImageData
  title: string
  href?: string
}

// Embla carousel custom hook types
export type EmblaOptions = {
  loop?: boolean
  skipSnaps?: boolean
}
