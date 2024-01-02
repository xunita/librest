"use client";

import CollectionComponent from "@/app/collectioncomponent";

export default function SearchByTerm({ params }) {
  return (
    <main className="min-h-screen">
      <div>
        <div className="md:px-24 px-6 py-8">
          <div className="py-10">
            <h1 className="font-bold text-2xl">
              Rechercher par {params.term}:{" "}
              <span className="font-semibold text-orange-500">
                {params.value.replaceAll("%20", " ").replace(/\b\w/g, (match) => match.toUpperCase())}
              </span>
            </h1>
            <div className="flex items-center space-between py-8">
              <CollectionComponent />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
