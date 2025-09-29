export const News = async () => {
  const res = await fetch(
    "https://67ae22f99e85da2f020c8b73.mockapi.io/registration"
  )
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
  return res.json()
}
