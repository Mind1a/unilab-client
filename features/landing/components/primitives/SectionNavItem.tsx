import { SectionNavItemProps } from "@features/landing/types"
import Link from "next/link"

const SectionNavItem = ({
  item,
  onClick,
  isActive = false,
}: SectionNavItemProps) => (
  <li
    className={`cursor-pointer transition-all duration-300 ease-in-out ${
      isActive ? "font-black" : "font-medium"
    }`}
  >
    <Link href={`#${item.href}`} onClick={onClick}>
      {item.section}
    </Link>
  </li>
)

export default SectionNavItem
