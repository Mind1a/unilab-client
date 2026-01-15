import React from "react"
import RoadmapHeroArticle from "../primitives/RoadmapHeroArticle"
import roadmapDataJson from "@features/roadmap/data/roadmapData.json"
import type { RoadmapAtricle as RoadmapAtricleType } from "@features/landing/types"
import RoadmapArticle from "../primitives/RoadmapArticle"

function RoadmapPage() {
  const RoadMapArticlesList = roadmapDataJson as RoadmapAtricleType[]

  return (
    <div className="mt-[29px] flex max-w-[1068px] flex-col">
      <RoadmapHeroArticle />

      <section className="flex flex-col gap-[40px]">
        {RoadMapArticlesList.map((article) => (
          <RoadmapArticle
            key={article.id}
            title={article.title}
            content={article.content}
          />
        ))}
      </section>
    </div>
  )
}

export default RoadmapPage
