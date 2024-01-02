"use client";
import Image from "next/image";
export default function Header() {
  return (
    <nav className="md:px-24 px-6 py-6 border-b pb-4 z-10">
      <ul className="flex justify-between">
        <a href="/" className="flex items-center space-x-2">
          <Image src="/logo.svg" alt="LibRest" width={32} height={32} />
          <span className="font-semibold text-lg">LibRest</span>
        </a>
        <li className="flex items-center space-x-5">
          <a
            href="/all-books"
            className="border-b-2 text-sm font-semibold border-transparent hover:border-orange-500 hover:border-b-2 pb-1"
          >
            Tous les livres
          </a>
          <a
            href="/collection"
            className="border-b-2 text-sm font-semibold border-transparent hover:border-orange-500 hover:border-b-2 pb-1"
          >
            Toutes les collections
          </a>
          <a
            href="/book-add"
            className="border-b-2 text-sm font-semibold border-transparent hover:border-orange-500 hover:border-b-2 pb-1"
          >
            Ajouter un livre
          </a>
          <a
            href="/collection/add"
            className="border-b-2 text-sm font-semibold border-transparent hover:border-orange-500 hover:border-b-2 pb-1"
          >
            Ajouter une collection
          </a>
        </li>
      </ul>
    </nav>
  );
}
