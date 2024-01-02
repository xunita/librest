"use client";
import { useState } from "react";
export default function Tri() {
  const [isShown, setIsShown] = useState(false);
  return (
    <div className="relative inline-block text-left z-20">
      <div className="flex items-center space-x-3">
        <p>Trier par</p>
        <div>
          <button
            onMouseDown={() => setIsShown(!isShown)}
            type="button"
            className="inline-flex w-full justify-center gap-x-1.5 rounded-md border px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            {" "}
            Numéro ISBN
            <svg
              className="-mr-1 h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      {isShown && (
        <div
          className="absolute right-0 z-20 mt-2 w-56 origin-top-right bggg rounded-md border shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="hover:bg-orange-200 block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-2"
            >
              Titre
            </a>
            <a
              href="#"
              className="hover:bg-orange-200 block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
            >
              Auteur
            </a>
            <a
              href="#"
              className="hover:bg-orange-200 block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-1"
            >
              Numéro ISBN
            </a>
            <a
              href="#"
              className="hover:bg-orange-200 block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-1"
            >
              Genre
            </a>
            <a
              href="#"
              className="hover:bg-orange-200 block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-2"
            >
              Collection
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
