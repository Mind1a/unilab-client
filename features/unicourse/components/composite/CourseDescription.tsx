import React from "react"
import { Paragraph } from "../primitive/Paragraph"
import { List } from "../primitive/List"
import { DescriptionBlock } from "@features/unicourse/types"

type Props = {
  blocks: DescriptionBlock[]
}

const CourseDescription = ({ blocks }: Props) => {
  return (
    <section>
      <article className="mt-[32px] space-y-6 lg:mt-[48px]">
        {blocks.map((block, index) =>
          block.type === "paragraph" ? (
            <Paragraph key={index}>{block.content}</Paragraph>
          ) : block.type === "list" ? (
            <List key={index} items={block.items} />
          ) : null
        )}
      </article>
    </section>
  )
}

export default CourseDescription
