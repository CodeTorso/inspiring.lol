import { pastPost, todaysPost } from "@/app/actions/adminPresent";
import { redirect } from "next/navigation";

function Home({ params }: any) {
  const password = params.password;
  const realPassword = process.env.PASSWORD;
  if (password !== realPassword) {
    redirect("/explore");
  }

  return (
    <div>
      <form action={todaysPost}>
        <button type="submit">Change Todays</button>
      </form>
      <form action={pastPost}>
        <input name="date" placeholder="2024-03-14" type="text" />
        <button type="submit">Try</button>
      </form>
    </div>
  );
}

export default Home;
