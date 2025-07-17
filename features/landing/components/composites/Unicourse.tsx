import { uniCourseData } from "@features/landing/data/landingData"
import UnicourseCard from "@features/landing/components/primitives/UnicourseCard"
const Unicourse = () => {
  return (
    <section
      id="uniCourse"
      className="flex w-full flex-col gap-[48px] px-[31px] md:gap-[88px] md:px-[18px]"
    >
      <h2 className="font-case text-center text-[32px] leading-[56px] font-black text-[#EDFAFF] sm:text-[32px] md:text-5xl">
        უნიკურსი
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-6">
        {uniCourseData.map((course) => (
          <UnicourseCard
            key={course.id}
            title={course.title}
            image={course.image}
          />
        ))}
      </div>
    </section>
  )
}

export default Unicourse
