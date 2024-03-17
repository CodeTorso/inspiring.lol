"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function todaysPost() {
  revalidatePath("/");
  revalidatePath("/explore");
  redirect("/explore");
}

export async function pastPost(formData: FormData) {
  const date = formData.get("date");
  revalidatePath(`/blogs/${date}`);
  revalidatePath("/explore");
  redirect("/explore");
}
