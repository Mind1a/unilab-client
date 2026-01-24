interface ParagraphProps {
  text: string
}

const Paragraph = ({ text }: ParagraphProps) => {
  return (
    <p className="font-case space-y-5 text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] lg:font-[500]">
      {text}
    </p>
  )
}

export default Paragraph
