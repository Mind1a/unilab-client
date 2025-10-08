const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL

export const NewsApi = async (page: string) => {
  const res = await fetch(`${baseUrl}/registration?page=${page}&limit=4`, {
    cache: "no-store",
  })
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
  return res.json()
}

export const NewsById = async (id: string) => {
  const res = await fetch(`${baseUrl}/registration/${id}`, {
    cache: "no-store",
  })
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
  return res.json()
}
