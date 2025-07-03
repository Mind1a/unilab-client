"use client"
import { Faqs } from "@features/landing/data/landingData"
import Question from "../primitives/Question"
import { FaqProps } from "@features/landing/types"
import { useState } from "react"

const Faq = () => {
  const [openQuestionId, setOpenQuestionId] = useState<string | null>(null)

  return (
    <div className="m-auto max-w-[1068px] space-y-[24px] lg:space-y-[88px]">
      <div className="space-y-[16px] lg:space-y-[24px]">
        <h2 className="text-[24px] font-black text-[#EDFAFF] lg:text-[48px]">
          FAQ
        </h2>
        <p className="text-align:justify w-full max-w-[782px] text-justify text-[#D4D4D4] lg:text-start">
          თუკი უნილაბის ციფრული სამყაროს კარის შემოღებამდე კითხვის ნიშნების
          კორიანტელი გიტრიალებს გონებაში მათი გაფანტვა ჩვენ მოგვანდე
        </p>
      </div>
      <div>
        {Faqs.map((faq: FaqProps) => (
          <Question
            key={faq.id}
            title={faq.question}
            id={faq.id}
            isOpen={openQuestionId === faq.id}
            onToggle={() =>
              setOpenQuestionId((prev) => (prev === faq.id ? null : faq.id))
            }
          >
            {faq.answer}
          </Question>
        ))}
      </div>
    </div>
  )
}

export default Faq
