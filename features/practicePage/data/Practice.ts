import AiIcon from "@features/landing/assets/icons/ai.svg"
import FigmaIcon from "@features/landing/assets/icons/figma.svg"
import XdIcon from "@features/landing/assets/icons/xd.svg"
import { CardItem, ToolItem } from "../type"

export const cards: CardItem[] = [
  {
    id: "author-1",
    title: "სახელი გვარი",
    description: "როლი",
  },
  {
    id: "author-2",
    title: "სახელი გვარი",
    description: "როლი",
  },
  { id: "author-3", title: "სახელი გვარი", description: "როლი" },
]

// SVGR imports

export const tools: ToolItem[] = [
  {
    id: "ai",
    Icon: AiIcon,
  },
  {
    id: "figma",
    Icon: FigmaIcon,
  },
  {
    id: "xd",
    Icon: XdIcon,
  },
]
