"use client"

export default function NewsDetailSkeleton() {
  return (
    <div className="mt-[24px] w-full max-w-[1068px] flex-1 space-y-[48px] lg:mt-[114px]">
      <div className="flex flex-col-reverse items-center justify-between gap-[24px] lg:flex-row lg:gap-[6px]">
        <div className="flex w-full max-w-[504px] justify-end lg:hidden">
          <div className="shimmer h-[16px] w-[80px] rounded-md bg-[#1C1C1E]" />
        </div>
        <div className="shimmer relative min-h-[380px] w-full max-w-[504px] overflow-hidden rounded-[8px] bg-[#1C1C1E]" />
        <div className="flex min-h-[84px] w-full max-w-[504px] flex-col justify-between gap-[24px] lg:min-h-[380px] lg:gap-[0px]">
          <div className="shimmer h-[32px] w-[90%] rounded-md bg-[#1C1C1E]" />
          <div className="mt-[24px] flex items-center justify-between">
            <div className="flex gap-[6px]">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="shimmer h-[32px] w-[70px] rounded-[16px] bg-[#1C1C1E]"
                />
              ))}
            </div>
            <div className="shimmer hidden h-[16px] w-[80px] rounded-md bg-[#1C1C1E] lg:flex" />
          </div>
        </div>
      </div>
      <div className="space-y-[10px]">
        <div className="shimmer h-[16px] w-full rounded-md bg-[#1C1C1E]" />
      </div>
    </div>
  )
}
