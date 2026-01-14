import Image from "next/image"
import React from "react"

const Button = () => {
  return (
    <button className="flex cursor-pointer items-center gap-1 rounded-lg bg-[#0080FF] px-6 py-3 leading-[24px] font-medium">
      დარეგისტრირდით
      <Image src="/Btn.Arrow.svg" alt="button arrow" width={16} height={16} />
    </button>
  )
}

export default Button
