import Link from "next/link"
import { BtnArrow } from "@features/landing/assets/icons"

type PracticeLinkProps = {
  title?: string
  href?: string
  className?: string
  target?: string
}

function PracticeLink({
  title = "პრაქტიკულ პროგრამებზე",
  href = "/practice",
  className = "",
  target = "_self",
}: PracticeLinkProps) {
  return (
    <Link href={href} target={target}>
      <p
        className={`font-case flex cursor-pointer items-center justify-between font-[900] ${className}`}
      >
        {title}
        <BtnArrow className="text-[16px]" />
      </p>
    </Link>
  )
}

export default PracticeLink
