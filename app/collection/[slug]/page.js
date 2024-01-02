"use client";
import Book from "@/app/book";
export default function Collection() {
  return (
    <main className="min-h-screen">
      <div>
        <div className="w-full h-20 relative">
          <div className="w-full h-20 front bg-contain brightness-50"></div>
          <div className="flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center">
            <span className="text-lg font-bold text-white">
              Collection UEVE
            </span>
          </div>
          <button className="bg-transparent p-4 absolute top-0 right-0">
            <svg
              className="w-6 h-6 text-white hover:text-red-500"
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
        </div>
        <div className="md:px-24 px-6 py-8">
          <button className="bg-orange-500 flex items-center text-xs hover:bg-orange-400 py-2 px-4 text-white text-sm">
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
            Ajouter des livres
          </button>
          <div className="flex items-center space-between py-10">
            <Book />
          </div>
        </div>
      </div>
    </main>
  );
}
