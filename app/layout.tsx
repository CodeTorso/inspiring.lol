import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Navigation from "../components/navigation";
import { ThemeProvider } from "@/components/themeProvider";
export const metadata: Metadata = {
  title: "inspiring.wtf",
  description: "Listen to daily talks of developers around the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.className} w-screen overflow-x-hidden flex justify-center`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="hidden sticky top-0 sm:flex flex-col pr-2 md:pr-4 lg:pr-8 justify-center h-screen">
            <div className="border-r-[1px] border-gray-300 dark:border-gray-700 h-[98vh] px-[0.35rem] lg:px-6">
              <Navigation />
            </div>
          </div>
          <div className="py-20 pl-2 pr-6 w-[90%] md:w-[70%] lg:w-[52rem] relative">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
