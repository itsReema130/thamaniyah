"use client"

import "./globals.css";
import Sidebar from "../components/Sidebar";
import Header from "@/components/layout/header";
import { SearchProvider } from "@/context/SearchContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased overflow-x-hidden`}>
        <SearchProvider>
          <div className="flex w-full ">
            <div className=" hidden md:block">
            <Sidebar />
            </div>
            <div className="flex flex-col w-full">
              <Header />
              {children}
            </div>
          </div>
        </SearchProvider>
      </body>
    </html>
  );
}
