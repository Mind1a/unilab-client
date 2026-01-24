export type CardItem = {
  id: string
  title: string
  description: string
}

import { ComponentType, SVGProps } from "react"

export type ToolItem = {
  id: string
  Icon: ComponentType<SVGProps<SVGSVGElement>>
}
