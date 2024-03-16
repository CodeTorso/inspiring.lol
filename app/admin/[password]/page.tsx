import { pastPost, todaysPost } from "@/app/actions/adminPresent";
import { redirect } from "next/navigation";

function Home({ params }: any) {
  const password = params.password;
  const realPassword = process.env.PASSWORD;
  if (password !== realPassword) {
    redirect("/explore");
  }

  return (
    <div className="flex flex-col gap-20 items-center justify-center h-[50vh]">
      <form action={todaysPost}>
        <button
          className="py-2 px-4 rounded-md border-2 border-gray-400 dark:border-gray-700"
          type="submit"
        >
          Revalidate Today&apos;s
        </button>
      </form>
      <form className="flex flex-col gap-5 items-center" action={pastPost}>
        <input
          className="px-4 py-2 border-gray-400 dark:border-gray-500 border-2 rounded-sm"
          name="date"
          placeholder="2024-03-14"
          type="text"
        />
        <div>
          <button
            className="py-2 px-4 rounded-md border-2 border-gray-400 dark:border-gray-700"
            type="submit"
          >
            Revalidate
          </button>
        </div>
      </form>
    </div>
  );
}

export default Home;
