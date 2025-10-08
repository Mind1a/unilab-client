const NewsSkeleton = () => {
  return (
    <div className="flex flex-col gap-[48px]">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-[16px] lg:flex-row lg:gap-[24px]"
        >
          <div className="min-h-[249px] w-full max-w-[332px] animate-pulse rounded-[8px] bg-[#1E1E1F] lg:min-h-[180px] lg:max-w-[240px]" />
          <div className="flex min-h-[184px] w-full max-w-[804px] animate-pulse flex-col justify-between rounded-[16px] bg-[#0F0F10] p-[16px] lg:min-h-[180px]">
            <div className="flex justify-between">
              <div className="h-[20px] w-[60%] rounded bg-[#1E1E1F]" />
              <div className="hidden h-[16px] w-[80px] rounded bg-[#1E1E1F] lg:flex" />
            </div>
            <div className="flex flex-col-reverse gap-[24px] lg:flex-row lg:justify-between">
              <div className="flex w-full justify-between">
                <div className="h-[20px] w-[100px] rounded bg-[#1E1E1F]" />
                <div className="h-[16px] w-[70px] rounded bg-[#1E1E1F] lg:hidden" />
              </div>
              <div className="flex gap-[6px]">
                <div className="h-[28px] w-[60px] rounded-[16px] bg-[#1E1E1F]" />
                <div className="h-[28px] w-[60px] rounded-[16px] bg-[#1E1E1F]" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default NewsSkeleton
