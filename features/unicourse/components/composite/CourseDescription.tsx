import React from "react"
import { Paragraph } from "../primitive/Paragraph"
import { List } from "../primitive/List"
import { DescriptionBlock } from "@features/unicourse/types"

const CourseDescription = ({ blocks }: { blocks: DescriptionBlock[] }) => {
  return (
    <section>
      <article className="mt-[32px] space-y-6 lg:mt-[48px]">
        {blocks.map((block, index) => {
          if (block.type === "paragraph") {
            return <Paragraph key={index}>{block.content}</Paragraph>
          }

          if (block.type === "list") {
            return <List key={index} items={block.items} />
          }

          return null
        })}
      </article>
    </section>
  )
}

export default CourseDescription
