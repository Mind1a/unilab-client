const HeroTop = ({
  selectedIndex,
  scrollToArrow,
}: {
  selectedIndex: number
  scrollToArrow: () => void
}) => {
  return (
    <div className="flex items-center justify-between">
      <span className="text-5xl font-black md:text-8xl">{`0${selectedIndex + 1}`}</span>
      <button
        className="h-[38px] w-[42px] cursor-pointer bg-[url(/Arrow.png)] bg-cover md:h-[63px] md:w-[74px]"
        onClick={scrollToArrow}
      />
    </div>
  )
}

export default HeroTop
