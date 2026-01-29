import React from "react"
import Paragraph from "./Paragraph"

interface ParagraphListProps {
  items: string[]
}

const ParagraphList = ({ items }: ParagraphListProps) => {
  return (
    <div className="space-y-[15px] lg:space-y-[30px]">
      {items.map((text, index) => (
        <Paragraph text={text} key={index} />
      ))}
    </div>
  )
}

export default ParagraphList
