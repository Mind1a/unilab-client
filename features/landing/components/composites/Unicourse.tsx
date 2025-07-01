import { uniCourseData } from "@features/landing/data/landingData"
import UnicourseCard from "@features/landing/components/primitives/UnicourseCard"
const Unicourse = () => {
  return (
    <section className="ml-auto w-[1068px]">
      <h2 className="font-case mb-[88px] text-center text-5xl leading-[56px] font-black text-[#EDFAFF]">
        უნიკურსი
      </h2>
      <div className="grid grid-cols-3 gap-6 px-[18px_!important]">
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
