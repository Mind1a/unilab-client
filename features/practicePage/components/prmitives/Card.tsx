type CardProps = {
  title: string
  description: string
}

const Card = ({ title, description }: CardProps) => {
  return (
    <div className="rounded-[8px] bg-[#0F0F10] p-6">
      <h3 className="font-case lg:text-[18px] lg:leading-[26px] lg:font-[900]">
        {title}
      </h3>
      <p className="font-case lg:mt-2 lg:text-[14px] lg:leading-[20px]">
        {description}
      </p>
    </div>
  )
}

export default Card
