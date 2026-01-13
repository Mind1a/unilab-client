import { RoadMapArticlesList } from "@features/landing/data/roadmapData"
import React from "react"
import RoadmapArticle from "../primitives/RoadmapArticle"
import RoadmapHeroArticle from "../primitives/RoadmapHeroArticle"

function RoadmapPage() {
  return (
    <div className="mt-[29px] flex flex-col">
      <RoadmapHeroArticle></RoadmapHeroArticle>

      <section className="flex flex-col gap-[40px]">
        {RoadMapArticlesList.map((article) => {
          return (
            <RoadmapArticle
              key={article.id}
              title={article.title}
              content={article.content}
            ></RoadmapArticle>
          )
        })}
      </section>
    </div>
  )
}

export default RoadmapPage
