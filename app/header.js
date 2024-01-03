"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
export default function Header() {
  const [isShown, setIsShown] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (!ref.current?.contains(event.target)) {
        setIsShown(false);
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref]);
  return (
    <nav className="lg:px-24 px-6 py-6 border-b pb-4 z-10">
      <ul className="flex justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <Image src="/logo.svg" alt="LibRest" width={32} height={32} />
          <span className="font-semibold text-lg flex">
            LibRest{" "}
            <span title="Les données ne sont pas persistantes en mémoire côte serveur, car stockées en mémoire vive du serveur.">
              <svg
                className="w-4 h-4"
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
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                />
              </svg>
            </span>
          </span>
        </Link>
        <div className="lg:hidden block" ref={ref}>
          <button onMouseDown={() => setIsShown(!isShown)}>
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
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          {isShown && (
            <div className="p-10 bggg fixed top-0 right-0 bottom-0 w-fit z-30 over overflow-hidden">
              <button
                className="relative bottom-3"
                onMouseDown={() => setIsShown(false)}
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
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <li className="flex flex-col space-y-3">
                <Link
                  onClick={() => setIsShown(false)}
                  href="/all-books"
                  className="border-b-2 text-sm font-semibold border-transparent hover:border-orange-500 hover:border-b-2 pb-1"
                >
                  Tous les livres
                </Link>
                <Link
                  onClick={() => setIsShown(false)}
                  href="/collection"
                  className="border-b-2 text-sm font-semibold border-transparent hover:border-orange-500 hover:border-b-2 pb-1"
                >
                  Toutes les collections
                </Link>
                <Link
                  onClick={() => setIsShown(false)}
                  href="/book-add"
                  className="border-b-2 text-sm font-semibold border-transparent hover:border-orange-500 hover:border-b-2 pb-1"
                >
                  Ajouter un livre
                </Link>
                <Link
                  onClick={() => setIsShown(false)}
                  href="/collection/add"
                  className="border-b-2 text-sm font-semibold border-transparent hover:border-orange-500 hover:border-b-2 pb-1"
                >
                  Ajouter une collection
                </Link>
              </li>
            </div>
          )}
        </div>
        <div className="lg:block hidden">
          <li className="flex items-center space-x-5">
            <Link
              href="/all-books"
              className="border-b-2 text-sm font-semibold border-transparent hover:border-orange-500 hover:border-b-2 pb-1"
            >
              Tous les livres
            </Link>
            <Link
              href="/collection"
              className="border-b-2 text-sm font-semibold border-transparent hover:border-orange-500 hover:border-b-2 pb-1"
            >
              Toutes les collections
            </Link>
            <Link
              href="/book-add"
              className="border-b-2 text-sm font-semibold border-transparent hover:border-orange-500 hover:border-b-2 pb-1"
            >
              Ajouter un livre
            </Link>
            <Link
              href="/collection/add"
              className="border-b-2 text-sm font-semibold border-transparent hover:border-orange-500 hover:border-b-2 pb-1"
            >
              Ajouter une collection
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
