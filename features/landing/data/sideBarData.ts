import { LogoSizesProps, SideBarProps } from "../types"

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
export const logoSizes: LogoSizesProps = {
  unilab: "h-[32px] w-[24px] 2xl:h-[64px] 2xl:w-[50px]",
  slash: "h-[48px] w-[13px] 2xl:h-[64px] 2xl:w-[16px]",
  iliauni: "h-[32px] w-[32px] 2xl:h-[64px] 2xl:w-[64px]",
}
