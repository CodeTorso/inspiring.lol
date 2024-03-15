"use client";

import { MdOutlineExplore } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { RiHome4Line } from "react-icons/ri";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navigation() {
  const pathname = usePathname();
  return (
    <div className="h-full flex flex-col sm:justify-end lg:justify-center gap-6 lg:gap-2">
      <Link href="/search">
        <IoMdSearch
          size={46}
          className={`${
            pathname === "/search"
              ? "hover:bg-blue-100 fill-blue-400"
              : "hover:bg-gray-200 fill-gray-500"
          } p-2 rounded-full transition-all`}
        />
      </Link>
      <Link href="/explore">
        <MdOutlineExplore
          size={44}
          className={`${
            pathname === "/explore"
              ? "hover:bg-blue-100 fill-blue-400"
              : "hover:bg-gray-200 fill-gray-500"
          } p-2 rounded-full transition-all`}
        />
      </Link>
      <Link href="/">
        <RiHome4Line
          size={46}
          className={`${
            pathname.slice(0, 6) === "/"
              ? "hover:bg-blue-100 fill-blue-400"
              : "hover:bg-gray-200 fill-gray-500"
          } p-2 rounded-full transition-all`}
        />
      </Link>
    </div>
  );
}

export default Navigation;
