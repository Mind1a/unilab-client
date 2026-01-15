import Link from "next/link"
import { BtnArrow } from "@features/landing/assets/icons"

type PracticeLinkProps = {
  title?: string
  href?: string
  className?: string
}

function PracticeLink({
  title = "პრაქტიკულ პროგრამებზე",
  href = "/practice",
  className = "",
}: PracticeLinkProps) {
  return (
    <Link href={href}>
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
