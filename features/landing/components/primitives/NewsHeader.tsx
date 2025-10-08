import Image from "next/image"
import FilterButton from "./FilterButton"

const NewsHeader = () => {
  return (
    <div className="mt-[24px] flex flex-col items-center gap-[48px] lg:mt-[28px] lg:items-start">
      <p className="hidden text-[64px] font-bold lg:flex">სიახლეები</p>
      <div className="flex w-full max-w-[1068px] flex-col items-center justify-center gap-[16px] lg:flex-row lg:justify-between">
        <div className="relative w-full max-w-[311px] lg:max-w-[648px]">
          <input
            type="search "
            className="w-full max-w-[311px] rounded-[8px] border border-[#3B3B3E] bg-[#0F0F10] py-[8px] pr-[8px] pl-[36px] text-[12px] text-[#84858C] outline-none lg:max-w-[648px]"
            placeholder="ძიება"
          />
          <Image
            src="/newsIcon/image/svg/searchIcon.svg"
            alt="searchIcon"
            width={24}
            height={24}
            className="absolute top-1/2 left-[8px] -translate-y-1/2"
          />
        </div>
        <div className="flex items-center justify-start gap-[16px]">
          <p className="text-[14px] text-[#D4D4D4]">ფილტრი:</p>
          <FilterButton />
        </div>
      </div>
    </div>
  )
}

export default NewsHeader
