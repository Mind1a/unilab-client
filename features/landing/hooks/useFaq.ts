import { useQuery } from "@tanstack/react-query"
import { FaqProps } from "@features/landing/types"

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_API_URL || "https://unilab.onrender.com/api/faqs"

const fetchFaq = async (): Promise<FaqProps[]> => {
  const res = await fetch(BASE_URL)

  if (!res.ok) {
    throw new Error("Could not get Faq")
  }

  return res.json()
}

export const useFaq = () => {
  return useQuery({
    queryKey: ["Faqs"],
    queryFn: fetchFaq,
  })
}
