import { useQuery } from "@tanstack/react-query"
import News from "./News"

const NewsPage = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["cards"],
    queryFn: News,
  })
  return <div></div>
}

export default NewsPage
