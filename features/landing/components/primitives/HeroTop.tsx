const HeroTop = ({
  selectedIndex,
  scrollToArrow,
}: {
  selectedIndex: number
  scrollToArrow: () => void
}) => {
  return (
    <div className="flex items-center justify-between">
      <span className="text-8xl font-black">{`0${selectedIndex + 1}`}</span>
      <button
        className="h-[63px] w-[74px] cursor-pointer bg-[url(/Arrow.png)]"
        onClick={scrollToArrow}
      />
    </div>
  )
}

export default HeroTop
