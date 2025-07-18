import Image from "next/image"
import Link from "next/link"

import { HeaderIconProps } from "@features/landing/types"

const HeaderIcons = ({ logo, logoSizes }: HeaderIconProps) => {
  return (
    <div
      className={`relative ${logoSizes[logo.id as "unilab" | "slash" | "iliauni"]}`}
    >
      {logo.href ? (
        <Link href={logo.href}>
          <Image src={logo.src} alt={logo.alt} fill />
        </Link>
      ) : (
        <Image src={logo.src} alt={logo.alt} fill />
      )}
    </div>
  )
}

export default HeaderIcons
