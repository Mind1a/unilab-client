import { LogoSizesProps, SideBarProps } from "../types"

// Sidebar header data
export const logos: SideBarProps[] = [
  {
    id: "unilab",
    src: "/HeaderIcon/UniLabLogo.svg",
    alt: "UniLab Logo",
    href: "https://unilab.iliauni.edu.ge/",
  },
  {
    id: "slash",
    src: "/HeaderIcon/slash.svg",
    alt: "slash",
  },
  {
    id: "iliauni",
    src: "/HeaderIcon/IliaUniLogo.svg",
    alt: "IliaUni Logo",
    href: "https://iliauni.edu.ge/ge",
  },
]

// Sidebar logos sizes data
export const logoSizes: LogoSizesProps = {
  unilab: "h-[32px] w-[24px] md:h-[64px] md:w-[50px]",
  slash: "h-[48px] w-[13px] md:h-[64px] md:w-[16px]",
  iliauni: "h-[32px] w-[32px] md:h-[64px] md:w-[64px]",
}
