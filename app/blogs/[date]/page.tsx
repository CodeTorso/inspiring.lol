import Image from "next/image";
import { fetchBlog } from "@/app/actions/fetchBlog";

export default async function Home({ params }: any) {
  const data = await fetchBlog(params.date);
  return (
    <div>
      <Image
        className="rounded-xl xl:absolute -left-[26%]"
        alt="pfp"
        height={200}
        width={200}
        src={`https://did-see.pockethost.io/api/files/blogs/${data.items[0].id}/${data.items[0].person_image}`}
      />
      <div
        className="break-words font-normal md:text-base lg:text-lg text-gray-600 flex flex-col gap-5"
        dangerouslySetInnerHTML={{ __html: data.items[0].content }}
      />
    </div>
  );
}
