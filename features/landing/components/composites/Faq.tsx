"use client"

import { FaqProps } from "@features/landing/types"
import { Faqs } from "@features/landing/data/landingData"
import Question from "../primitives/Question"

const Faq = () => {
  return (
    <div id="faq" className="space-y-6 lg:space-y-22">
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
