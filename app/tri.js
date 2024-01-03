"use client";
import { useState, useEffect, useRef } from "react";
export default function Tri() {
  const [isShown, setIsShown] = useState(false);
  const reff = useRef(null);

  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (reff.current && !reff.current.contains(event.target)) {
        setIsShown(false);
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [reff]);
  return (
    <div className="relative inline-block text-left z-20 text-sm" ref={reff}>
      <div className="flex items-center space-x-3 z-20">
        <p>Trier par</p>
        <div>
          <button
            onMouseDown={() => setIsShown(!isShown)}
            type="button"
            className="flex items-center w-full justify-center rounded-md border px-3 py-2 text-xs font-semibold shadow-sm ring-1 ring-inset ring-gray-300"
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
          className="absolute right-0 text-xs z-20 mt-2 w-56 origin-top-right bggg rounded-md border shadow-lg ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            <button className="hover:bg-orange-300 block w-full px-4 py-2 text-sm text-left">
              Titre
            </button>
            <button className="hover:bg-orange-300 block w-full px-4 py-2 text-sm text-left">
              Auteur
            </button>
            <button className="hover:bg-orange-300 block w-full px-4 py-2 text-sm text-left">
              Genre
            </button>
            <button className="hover:bg-orange-300 block w-full px-4 py-2 text-sm text-left">
              Collection
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
