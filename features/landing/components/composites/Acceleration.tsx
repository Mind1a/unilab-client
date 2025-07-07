import { accelerationLinks } from "@features/landing/data/landingData"
import Link from "next/link"

const Acceleration = () => {
  return (
    <div className="mx-auto flex max-w-[1098px] flex-col items-center">
      <h2 className="font- mb-[88px] text-center text-[48px] font-[900]">
        აქსელერაცია
      </h2>
      <div className="flex max-w-[748px] flex-wrap justify-center gap-6">
        {accelerationLinks.map((eachElement) => (
          <div
            key={eachElement.id}
            className="flex items-center justify-center rounded-[24px] bg-[#0F0F10] px-6 py-3 text-[#D4D4D4] shadow-[0_0_8px_2px_#0080ff80] transition-all duration-500 hover:bg-[#0080ff]"
          >
            <Link className="text-[18px] font-[900]" href={eachElement.href}>
              {eachElement.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Acceleration
