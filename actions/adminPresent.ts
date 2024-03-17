"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function todaysPost() {
  revalidatePath("/");
  redirect("/explore");
}

export async function Explore() {
  revalidatePath("/explore");
  redirect("/explore");
}

export async function pastPost(formData: FormData) {
  const date = formData.get("date");
  revalidatePath(`/blogs/${date}`);
  redirect("/explore");
}
