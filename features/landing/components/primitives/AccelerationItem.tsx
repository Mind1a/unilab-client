import { AccelerationLink } from "@features/landing/types"
import Link from "next/link"

const AccelerationItem = ({ id, label, href }: AccelerationLink) => {
  return (
    <Link
      key={id}
      className="flex items-center justify-center rounded-3xl bg-[#0F0F10] px-6 py-3 text-[#D4D4D4] shadow-[0_0_8px_2px_#0080ff80] transition-all duration-500 hover:bg-[#0080ff]"
      href={href}
    >
      <div className="text-[16px] font-[900] md:text-[18px]">{label}</div>
    </Link>
  )
}

export default AccelerationItem
