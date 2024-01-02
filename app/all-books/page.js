"use client";

import AdvancedSearch from "../advancedsearch";
import Book from "../book";
import Tri from "../tri";

export default function AllBooks() {
  return (
    <main className="min-h-screen">
      <div>
        <div className="md:px-24 px-6 py-6">
          <a
            href="/book-add"
            className="bg-orange-500 flex items-center text-xs hover:bg-orange-400 py-2 px-4 text-white text-sm w-fit"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeWidth={1.5}
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Ajouter un livre
          </a>
          <div className="py-10">
            <div className="flex items-center justify-between">
              <h1 className="font-bold text-2xl">Livres</h1>
              <Tri />
            </div>
            <div className="flex justify-between py-5">
              <div className="flex items-center space-between py-8">
                <Book />
              </div>
              <div className="">
                <AdvancedSearch />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
