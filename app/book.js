"use client";
import { useState } from "react";
import "./globals.css";
export default function Book() {
  const [isShown, setIsShown] = useState(false);
  return (
    <div
      className="book shadow-md hover:shadow-2xl relative"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <div className="flex flex-col space-y-2">
        <div className="relative">
          <img
            src="/book.jpg"
            width={256}
            height={256}
            className="border relative"
          />
          {isShown && (
            <div className="absolute top-0 w-full h-full bg-black/25">
              <button className="bg-transparent p-2 absolute right-0">
                <svg
                  className="w-6 h-6 hover:text-red-500"
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
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
              <div className="flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center">
                <button className="bg-orange-500 hover:bg-orange-400 py-3 px-6 text-white z-10 text-xs">
                  Bientôt disponible
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col space-y-1 p-4">
          <div>
            <a
              href="/search-by/auteur/Sid Ali"
              className="text-sm text-gray-500 auth hover:text-orange-400"
            >
              Sid Ali
            </a>
          </div>
          <div>
            <span className="font-semibold title">
              Bonne année 2024
            </span>
          </div>
          <div>
            <span className="text-xs text-gray-500 italic isbn">
              2024585455455465
            </span>
          </div>
          <div>
            <a
              href="/search-by/genre/Roman"
              className="text-sm text-gray-500 italic genre hover:text-orange-400"
            >
              Roman
            </a>
          </div>
          <div>
            <a
              href="/search-by/collection/Ueve"
              className="text-sm text-gray-500 collection font-bold hover:text-orange-400"
            >
              Ueve
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
