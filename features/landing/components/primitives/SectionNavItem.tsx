import { SectionNavItemProps } from "@features/landing/types"
import Link from "next/link"

const SectionNavItem = ({ item, onClick }: SectionNavItemProps) => (
  <li className="cursor-pointer font-medium text-[#D4D4D4] transition-all duration-300 ease-in-out hover:font-black">
    <Link href={item.href} onClick={onClick}>
      {item.section}
    </Link>
  </li>
)

export default SectionNavItem
