import { heroData } from "@features/landing/data/landingData"

const Bullets = ({
  scrollToBullet,
  selectedIndex,
}: {
  scrollToBullet: (index: number) => void
  selectedIndex: number
}) => {
  return (
    <div className="flex justify-center gap-3">
      {heroData.map((item, index) => (
        <button
          key={item.id}
          onClick={() => scrollToBullet(index)}
          className={`cursor-pointer rounded-full p-1 md:p-1.5 ${
            index === selectedIndex ? "bg-gray-300" : "bg-neutral-800"
          }`}
        />
      ))}
    </div>
  )
}

export default Bullets
