"use server";

const DB_URL = process.env.DB_URL;

export async function fetchBlogs(page: Number = 1) {
  const res = await fetch(
    `${DB_URL}/api/collections/explore/records?page=1&perPage=12&sort=-date`
  );
  const data = await res.json();
  return data;
}

export async function fetchBlog(argument: String) {
  const res = await fetch(
    `${DB_URL}/api/collections/blogs/records?filter=(date=%27${argument}%2000:00:00.000Z%27)`
  );
  const data = await res.json();
  return data;
}
