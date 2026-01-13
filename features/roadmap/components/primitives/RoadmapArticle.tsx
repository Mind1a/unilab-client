import { RoadmapPageProps } from "@features/landing/types"

function RoadmapArticle({ title, content }: RoadmapPageProps) {
  return (
    <article>
      <h4 className="font-case mb-[8px] text-[16px] font-[500] text-[#0080FF]">
        {title}
      </h4>
      <p className="font-case flex flex-col gap-[16px] leading-[24px]">
        {content}
      </p>
    </article>
  )
}

export default RoadmapArticle
