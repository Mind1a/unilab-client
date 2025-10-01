import { Flyout, NavigationItem } from "../types"

export const filterButton: NavigationItem[] = [
  { id: 1, name: "თარიღი", href: "/", dropDown: true },
  { id: 2, name: "თეგი", href: "/", dropDown: true },
]

export const flyout: Flyout = {
  1: [
    { id: 1, name: "example", href: "/" },
    { id: 2, name: "example", href: "/" },
  ],
  2: [
    { id: 1, name: "example", href: "/" },
    { id: 2, name: "example", href: "/" },
    { id: 3, name: "example", href: "/" },
  ],
}
