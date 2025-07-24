"use client"

import SearchBar from "../SearchBar";
import { useRouter } from "next/navigation";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useSearch } from "@/context/SearchContext";

export default function Header() {
    const router = useRouter();
    const { setTerm } = useSearch();
    return (
      <header className="flex items-center gap-x-4 px-8 pt-1 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <button
            className="text-gray-400 hover:text-white px-2 py-1 rounded"
            onClick={() => router.back()}
            aria-label="Back"
          >
           <GrPrevious />
          </button>
          <button
            className="text-gray-400 hover:text-white px-2 py-1 rounded"
            onClick={() => router.forward()}
            aria-label="Next"
          >
            <GrNext />

          </button>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-2xl">
            <SearchBar onSearch={setTerm} />
          </div>
        </div>

      </header>
    );
  }