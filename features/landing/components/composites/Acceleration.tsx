import { accelerationLinks } from "@features/landing/data/landingData"
import AccelerationItem from "../primitives/AccelerationItem"

const Acceleration = () => {
  return (
    <section id="accelerated" className="flex w-full flex-col items-center">
      <h2 className="font- mb-[88px] text-center text-[48px] font-[900]">
        აქსელერაცია
      </h2>
      <div className="flex max-w-[748px] flex-wrap justify-center gap-6">
        {accelerationLinks.map((eachElement) => (
          <AccelerationItem
            key={eachElement.id}
            id={eachElement.id}
            label={eachElement.label}
            href={eachElement.href}
          />
        ))}
      </div>
    </section>
  )
}

export default Acceleration
