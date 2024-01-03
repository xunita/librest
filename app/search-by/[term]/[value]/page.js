"use client";

import Book from "@/app/book";
import CollectionComponent from "@/app/collectioncomponent";
import Tri from "@/app/tri";

export default function SearchByTerm({ params }) {
  return (
    <main className="min-h-screen">
      <div>
        <div className="md:px-24 px-6 py-8">
          <div className="py-10">
            <div className="flex sm:flex-row flex-col sm:space-y-0 space-y-5 items-center justify-between">
              <h1 className="font-bold text-2xl">
                Rechercher par {params.term}:{" "}
                <span className="font-semibold text-orange-500">
                  {params.value
                    .replaceAll("%20", " ")
                    .replace(/\b\w/g, (match) => match.toUpperCase())}
                </span>
              </h1>
              <div>
                <Tri />
              </div>
            </div>
            <div className="py-10">
              <div className="flex flex-wrap">
                <Book className="" />
                <Book className="" />
                <Book className="" />
                <Book className="" />
                <Book className="" />
                <Book className="" />
                <Book className="" />
                <Book className="" />
                <Book className="" />
                <Book className="" />
                <Book className="" />
                <Book className="" />
                <Book className="" />
                <Book className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
