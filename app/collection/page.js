"use client";
import AdvancedSearch from "../advancedsearch";
import Book from "../book";
import CollectionComponent from "../collectioncomponent";
import Link from "next/link";
export default function Collection() {
  return (
    <main className="min-h-screen">
      <div>
        <div className="md:px-24 px-6 py-8">
          <Link
            href="/collection/add"
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
            Ajouter une collection
          </Link>

          <div className="py-10">
            <h1 className="font-bold text-2xl">Collections</h1>
            <div className="flex lg:flex-row items-center flex-col space-y-2 lg:justify-between py-5">
              <div className="py-1 flex items-center flex-wrap space-x-4 space-y-3">
                <p className="text-sm">Filtre appliqué :</p>
                <div className="flex flex-wrap">
                  <p className="border rounded py-1 px-2 flex items-center space-x-1 text-xs m-2">
                    <span className="font-semibold">Genre:</span>
                    <span>Roman</span>
                    <button className="relative hover:text-orange-400">
                      <svg
                        className="w-5 h-5"
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
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </p>
                  <p className="border rounded py-1 px-2 flex items-center space-x-1 text-xs m-2">
                    <span className="font-semibold">Genre:</span>
                    <span>Roman</span>
                    <button className="relative hover:text-orange-400">
                      <svg
                        className="w-5 h-5"
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
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </p>
                  <p className="border rounded py-1 px-2 flex items-center space-x-1 text-xs m-2">
                    <span className="font-semibold">Genre:</span>
                    <span>Roman</span>
                    <button className="relative hover:text-orange-400">
                      <svg
                        className="w-5 h-5"
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
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </p>
                </div>
              </div>
              <button className="bg-blue-500 w-fit h-fit hover:bg-blue-400 py-2.5 rounded px-12 text-white text-xs">
                Réinitialiser le filtre
              </button>
            </div>
            <div className="flex lg:flex-row flex-col-reverse justify-between py-5">
              <div className="py-10">
                <div className="flex flex-wrap">
                  <CollectionComponent />
                  <CollectionComponent />
                  <CollectionComponent />
                  <CollectionComponent />
                  <CollectionComponent />
                  <CollectionComponent />
                  <CollectionComponent />
                  <CollectionComponent />
                  <CollectionComponent />
                  <CollectionComponent />
                </div>
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
