"use client"
import { Faqs } from "@features/landing/data/landingData"
import Question from "../primitives/Question"
import { FaqProps } from "@features/landing/types"

const Faq = () => {
  return (
    <div
      id="faq"
      className="m-auto w-full max-w-[1152px] space-y-6 px-[26px] lg:space-y-22 lg:pr-12 lg:pl-9"
    >
      <div className="space-y-4 lg:space-y-6">
        <h2 className="text-[24px] font-black text-[#EDFAFF] lg:ml-0 lg:text-[48px]">
          FAQ
        </h2>
        <p className="text-align:justify w-full max-w-[782px] text-justify text-[12px] text-[#D4D4D4] lg:text-start lg:text-[16px]">
          თუკი უნილაბის ციფრული სამყაროს კარის შემოღებამდე კითხვის ნიშნების
          კორიანტელი გიტრიალებს გონებაში მათი გაფანტვა ჩვენ მოგვანდე
        </p>
      </div>
      <div>
        {Faqs.map((faq: FaqProps) => (
          <Question key={faq.id} title={faq.question} id={faq.id}>
            {faq.answer}
          </Question>
        ))}
      </div>
    </div>
  )
}

export default Faq
