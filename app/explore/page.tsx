import Image from "next/image";
import Link from "next/link";
import { fetchBlogs } from "../../actions/fetchBlog";

function getRandomColor() {
  const colors = [
    "border-green-400",
    "border-yellow-400",
    "border-gray-500",
    "border-cyan-400",
    "border-violet-400",
    "border-red-400",
  ];

  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

export default async function Home() {
  const data = await fetchBlogs();
  return (
    <div className="flex flex-col gap-8">
      {data.items.map(
        (item: {
          id: string;
          person_image: string;
          person_name: string;
          date: string;
          info_blobs: string[];
        }) => {
          return (
            <Link key={item.id} href={`/blogs/${item.date.slice(0, 10)}`}>
              <div className="overflow-hidden w-full h-42 px-4 py-2 rounded-xl border-2 border-gray-300 dark:border-gray-800 flex">
                <Image
                  className="rounded-xl h-full"
                  alt="pfp"
                  height={180}
                  width={180}
                  src={`https://did-see.pockethost.io/api/files/explore/${item.id}/${item.person_image}`}
                />
                <div className="w-full flex flex-col gap-8">
                  <h2 className="text-center text-xl">{item.person_name}</h2>
                  <div className="flex gap-4 px-6 py-2">
                    {item.info_blobs.map((info) => {
                      return (
                        <div
                          key={info}
                          className={`py-2 px-4 border-2 rounded-xl ${getRandomColor()}`}
                        >
                          {info}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Link>
          );
        }
      )}
    </div>
  );
}
