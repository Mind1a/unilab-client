import { SectionNavItemProps } from "@features/landing/types"

const SectionNavItem = ({
  item,
  onClick,
  isActive = false,
}: SectionNavItemProps) => {
  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault()

    const target = document.getElementById(item.href)
    if (target) {
      const isMobile = window.innerWidth <= 768
      const offset = isMobile ? -100 : -160
      const marginTop =
        target.getBoundingClientRect().top + window.scrollY + offset
      window.scrollTo({ top: marginTop, behavior: "smooth" })
    }

    if (onClick) onClick()
  }

  return (
    <li
      className={`cursor-pointer transition-all duration-300 ease-in-out ${
        isActive ? "font-black" : "font-medium"
      }`}
    >
      <a href={`#${item.href}`} onClick={handleClick}>
        {item.section}
      </a>
    </li>
  )
}

export default SectionNavItem
