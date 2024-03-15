import Image from "next/image";
import Link from "next/link";
import { fetchBlogs } from "../actions/fetchBlog";

export default async function Home() {
  const data = await fetchBlogs();
  console.log(data);
  return (
    <div className="flex flex-col gap-8">
      {data.items.map(
        (item: {
          id: String;
          date: String;
          title: String;
          content: String;
          person_image: String;
        }) => {
          return (
            <Link key={item.id} href={`/blogs/${item.date.slice(0, 10)}`}>
              <div
                className="w-full h-48 px-4 py-3 rounded-xl hover:shadow-gray-100 shadow-sm transition-all border-2 border-gray-300 flex"
              >
                <Image
                  className="rounded-xl"
                  alt="pfp"
                  height={180}
                  width={180}
                  src={`https://did-see.pockethost.io/api/files/blogs/${item.id}/${item.person_image}`}
                />
                <div className="pl-2 overflow-hidden">
                  <div
                    className="break-words font-normal md:text-base lg:text-sm text-gray-600"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                  <div
                    className="break-words font-normal md:text-base lg:text-sm text-gray-600"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                </div>
              </div>
            </Link>
          );
        }
      )}
    </div>
  );
}
