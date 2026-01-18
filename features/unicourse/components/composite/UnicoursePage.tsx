"use client"

import React from "react"
import { useParams, notFound } from "next/navigation"
import FeatureHero from "./FeatureHero"
import { COURSES } from "../../data/unicourseData"
import CourseDescription from "./CourseDescription"
import AboutHead from "./AboutHead"

const UnicoursePage = () => {
  const params = useParams()
  const slug = params?.slug

  const course = COURSES.find((c) => c.slug === slug)

  if (!course) {
    notFound()
  }

  return (
    <>
      <FeatureHero header={course.title} instructor={course.instructor.name} />
      <CourseDescription blocks={course.description} />
      <AboutHead
        instructor={course.instructor.name}
        bio={course.instructor.bio}
      />
    </>
  )
}

export default UnicoursePage
