"use client"
import { motion } from "motion/react"
import Image from "next/image"
import useMeasure from "react-use-measure"
import { QuestionProps } from "@features/landing/types"

const Question = ({ title, children, id, isOpen, onToggle }: QuestionProps) => {
  const [ref, { height }] = useMeasure()

  return (
    <motion.div animate={isOpen ? "open" : "closed"}>
      <button
        onClick={onToggle}
        className="mb-[12px] flex w-full cursor-pointer items-center justify-between gap-4 lg:mb-[24px]"
      >
        <div className="flex items-center gap-[16px] text-[#EDFAFF] lg:text-[#D4D4D4]">
          <p className="text-[16px] font-normal lg:text-[24px] lg:font-medium">
            {id}
          </p>
          <p className="text-start text-[14px] font-bold lg:text-[18px] lg:font-medium">
            {title}
          </p>
        </div>
        <motion.div
          className="hidden cursor-pointer lg:flex"
          variants={{
            open: { rotate: "-90deg" },
            closed: { rotate: "0deg" },
          }}
        >
          <Image
            src="/isOpenIcon.svg"
            alt="isOpenArrow"
            width={16}
            height={16}
          />
        </motion.div>

        <motion.div
          className="flex cursor-pointer lg:hidden"
          variants={{
            open: { rotate: "180deg" },
            closed: { rotate: "90deg" },
          }}
        >
          <div className="flex h-[24px] w-[24px] items-center justify-center">
            {isOpen ? (
              <Image src="/minus.svg" alt="closeButton" width={15} height={1} />
            ) : (
              <Image
                src="/pluse.svg"
                alt="closeButton"
                width={15}
                height={15}
              />
            )}
          </div>
        </motion.div>
      </button>
      <div className="mb-[12px] h-[1px] w-full bg-[#D4D4D4] lg:mb-[26px]"></div>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? height : "0px",
          marginBottom: isOpen ? "24px" : "0px",
        }}
        className="overflow-hidden"
      >
        <p
          ref={ref}
          className="mb-[16px] pr-[21px] pl-[33px] text-start text-[#D4D4D4] lg:mb-[24px] lg:px-[44px]"
        >
          {children}
        </p>
      </motion.div>
    </motion.div>
  )
}

export default Question
