import Link from "next/link"
import { BtnArrow } from "@features/landing/assets/icons/index"
import { LinkItem } from "../../types"

type LinkListProps = {
  items: LinkItem[]
  ulClassName?: string
  linkClassName?: string
  labelClassName?: string
  arrowClassName?: string
}

const LinkList = ({
  items,
  ulClassName = "",
  linkClassName = "",
  labelClassName = "",
  arrowClassName = "h-[12px] w-[12px]",
}: LinkListProps) => {
  return (
    <ul className={ulClassName}>
      {items.map((item) => (
        <li key={item.id}>
          <Link href={item.href} target="_blank" className={linkClassName}>
            <span className={labelClassName}>{item.label}</span>
            <BtnArrow className={arrowClassName} />
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default LinkList
