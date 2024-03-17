import Image from "next/image";
import Rapidfire from "./rapidfire";

type item = {
  id: string;
  person: string;
  date: string;
  content: string;
  person_image: string;
  things_image: string;
  rapidfire: { q: string; a: string }[];
};

type items = {
  items: item[];
};

function Blog({ data }: { data: items }) {
  console.log(data.items[0].rapidfire)
  return (
    <div>
      <div className="pb-8">
        <Image
          className="rounded-xl xl:absolute -left-[26%]"
          alt="pfp"
          height={200}
          width={200}
          src={`https://did-see.pockethost.io/api/files/blogs/${data.items[0].id}/${data.items[0].person_image}`}
        />
      </div>
      <Rapidfire rapidFire={data.items[0].rapidfire} />
      <div
        className="break-words font-normal md:text-base lg:text-lg text-gray-600 dark:text-gray-100  flex flex-col gap-5"
        dangerouslySetInnerHTML={{ __html: data.items[0].content }}
      />
    </div>
  );
}

export default Blog;
