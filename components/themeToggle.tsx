"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggler() {
  const { setTheme, theme } = useTheme();
  return (
    <button
      className="p-2 flex justify-center items-center relative"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="h-[1.6rem] text-gray-500 w-[1.6rem] scale-100 transition-all dark:scale-0" />
      <Moon className="h-[1.6rem] text-gray-500 w-[1.6rem] absolute top-1/2 -translate-y-1/2  scale-0 transition-all dark:scale-100" />
    </button>
  );
}
