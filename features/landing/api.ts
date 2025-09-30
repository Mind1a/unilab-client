export const News = async (page: string) => {
  const res = await fetch(
    `https://67ae22f99e85da2f020c8b73.mockapi.io/registration?page=${page}&limit=5`,
    { cache: "no-store" }
  )
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
  return res.json()
}

export const NewsById = async (id: string) => {
  const res = await fetch(
    `https://67ae22f99e85da2f020c8b73.mockapi.io/registration/${id}`,
    { cache: "no-store" }
  )
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
  return res.json()
}
