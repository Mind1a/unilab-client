import { RoadmapPageProps } from "@features/landing/types"
import RoadmapArticleHeader from "./RoadmapArticleHeader"

function RoadmapArticle({ title, content }: RoadmapPageProps) {
  if (content.contentType === "primitive") {
    return (
      <article>
        <RoadmapArticleHeader title={title}></RoadmapArticleHeader>
        <p className="font-case leading-[24px] tracking-[0.8px]">
          {content.text}
        </p>
      </article>
    )
  }

  return (
    <article>
      <RoadmapArticleHeader title={title} />

      <p className="font-case flex flex-col gap-[16px] leading-[24px]">
        {content.elements.map((el) => {
          if (title === "იდეები და აქტივობები") {
            return (
              <span
                className="flex flex-col gap-[8px]"
                key={el.highlightedText}
              >
                <span>{el.text}</span>
                <b>{el.highlightedText} </b>
              </span>
            )
          }

          return (
            <span key={el.highlightedText}>
              <b>{el.highlightedText} </b> <span>{el.text}</span>
            </span>
          )
        })}
      </p>
    </article>
  )
}

export default RoadmapArticle
