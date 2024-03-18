"use client";

import { MdOutlineExplore } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { RiHome4Line } from "react-icons/ri";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggler } from "@/components/themeToggle";

function Navigation() {
  const pathname = usePathname();
  return (
    <div className="h-full flex sm:flex-col sm:justify-end lg:justify-center gap-6 lg:gap-2">
      <Link href="/search">
        <IoMdSearch
          size={46}
          className={`${
            pathname === "/search"
              ? "sm:hover:bg-blue-100 sm:dark:hover:bg-gray-900 fill-blue-400"
              : "sm:hover:bg-gray-200 sm:dark:hover:bg-gray-900 fill-gray-500"
          } p-2 rounded-full transition-all`}
        />
      </Link>
      <Link href="/explore">
        <MdOutlineExplore
          size={44}
          className={`${
            pathname === "/explore"
              ? "sm:hover:bg-blue-100 sm:dark:hover:bg-gray-900 fill-blue-400"
              : "sm:hover:bg-gray-200 sm:dark:hover:bg-gray-900 fill-gray-500"
          } p-2 rounded-full transition-all`}
        />
      </Link>
      <Link href="/">
        <RiHome4Line
          size={46}
          className={`${
            pathname.slice(0, 6) === "/"
              ? "sm:hover:bg-blue-100 sm:dark:hover:bg-gray-900 fill-blue-400"
              : "sm:hover:bg-gray-200 sm:dark:hover:bg-gray-900 fill-gray-500"
          } p-2 rounded-full transition-all`}
        />
      </Link>
      <ThemeToggler />
    </div>
  );
}

export default Navigation;
