import { Flyout, NavigationItem } from "../types"

export const navigation: NavigationItem[] = [
  { id: 1, name: "თარიღი", href: "/", dropDown: true },
  { id: 2, name: "თეგი", href: "/", dropDown: true },
]

export const flyout: Flyout = {
  1: [
    { id: 1, name: "ავეჯი", href: "/" },
    { id: 2, name: "საძინებელი", href: "/" },
  ],
  2: [
    { id: 1, name: "კატალოგი", href: "/" },
    { id: 2, name: "კატალოგი", href: "/" },
  ],
}
