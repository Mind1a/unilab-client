import React from "react"
import FeatureHero from "./FeatureHero"
import { UnicourseHeroData } from "../../data/unicourseData"
const UnicoursePage = () => {
  return (
    <>
      <FeatureHero
        header={UnicourseHeroData.title}
        instructor={UnicourseHeroData.instructor}
      />
    </>
  )
}

export default UnicoursePage
