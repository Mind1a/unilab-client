"use client"
import { motion } from "motion/react"
import Image from "next/image"
import useMeasure from "react-use-measure"
import { QuestionProps } from "@features/landing/types"
import { useState } from "react"

const Question = ({ title, children, id }: QuestionProps) => {
  const [ref, { height }] = useMeasure()
  const [open, setOpen] = useState(false)

  return (
    <motion.div animate={open ? "open" : "closed"}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="mb-3 flex w-full cursor-pointer items-center justify-between gap-4 lg:mb-6"
      >
        <div className="flex items-center gap-4 text-[#EDFAFF] lg:text-[#D4D4D4]">
          <p className="text-4 lg:text-6 font-normal lg:font-medium">{id}</p>
          <p className="text-start text-[14px] font-bold lg:text-[18px] lg:font-medium">
            {title}
          </p>
        </div>
        <motion.div
          className="cursor-pointer"
          variants={{
            open: { rotate: "-90deg" },
            closed: { rotate: "0deg" },
          }}
        >
          <div className="h-4 w-4">
            <Image
              src="/isOpenIcon.svg"
              alt="isOpenArrow"
              width={16}
              height={16}
            />
          </div>
        </motion.div>
      </button>
      <div className="mb-3 h-[1px] w-full bg-[#D4D4D4] lg:mb-[26px]"></div>
      <motion.div
        initial={false}
        animate={{
          height: open ? height : "0px",
          marginBottom: open ? "24px" : "0px",
        }}
        className="overflow-hidden"
      >
        <p
          ref={ref}
          className="mb-4 pr-[21px] pl-[33px] text-start text-[#D4D4D4] lg:mb-6 lg:px-11"
        >
          {children}
        </p>
      </motion.div>
    </motion.div>
  )
}

export default Question
