// types/course.ts

export type DescriptionBlock =
  | { type: "paragraph"; content: string }
  | { type: "list"; items: string[] }

export interface Instructor {
  name: string
  bio: string[] // Array of strings for paragraph blocks
}

export interface CourseData {
  slug: string
  title: string
  instructor: Instructor
  description: DescriptionBlock[]
}
