export type QuestionProps = {
  title: string
  id: string
  children: React.ReactNode
  onToggle: () => void
  isOpen: boolean
}
export type FaqProps = {
  id: string
  question: string
  answer: string
}
