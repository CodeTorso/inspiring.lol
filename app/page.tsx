import { fetchBlog } from "../actions/fetchBlog";
import Blog from "@/components/blog";
export default async function Home() {
  const date = new Date();
  const argument = `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate()}`;
  const data = await fetchBlog(argument);

  return (
      <Blog data={data}></Blog>
  );
}
