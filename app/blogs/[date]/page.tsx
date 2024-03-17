import { fetchBlog } from "@/actions/fetchBlog";
import Blog from "@/components/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Listen to daily talks of developers around the world",
};

export default async function Home({ params }: any) {
  const data = await fetchBlog(params.date);

  return (
      <Blog data={data} />
  );
}
