"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
export default function AdvancedSearch({ sendData }) {
  function sendDataToParent() {
    sendData(title, author, isbn, genre, collection);
  }
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [genre, setGenre] = useState("");
  const [collection, setCollection] = useState("");

  const [filter, setFilter] = useState([]);

  const [isShown, setIsShown] = useState(false);
  const pathname = usePathname();
  return (
    <div className="lg:w-80 md:w-1/2 w-full">
      <h1 className="font-bold text-lg mb-5">Recherche avancée</h1>
      <div className="py-8 px-5 border-2 rounded w-full">
        <div className="flex flex-col space-y-5 justify-center">
          <div className="flex flex-col space-y-7 justify-center">
            {pathname.includes("/all-books") && (
              <div className="flex flex-col space-y-7 justify-center">
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Titre"
                  className="w-full py-2 mx-auto border px-4 rounded text-sm"
                />
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="Auteur"
                  className="w-full py-2 mx-auto border px-4 rounded text-sm"
                />
                <input
                  type="text"
                  value={isbn}
                  onChange={(e) => {
                    if (+e.target.value) {
                      setIsbn(e.target.value);
                    } else setIsbn("");
                  }}
                  placeholder="Numéro ISBN"
                  className="w-full py-2 mx-auto border px-4 rounded text-sm"
                />
                <input
                  type="text"
                  onChange={(e) => setGenre(e.target.value)}
                  value={genre}
                  placeholder="Genre"
                  className="w-full py-2 mx-auto border px-4 rounded text-sm"
                />
              </div>
            )}

            <input
              type="text"
              value={collection}
              onChange={(e) => setCollection(e.target.value)}
              placeholder="Nom de la collection"
              className="w-full py-2 mx-auto border px-4 rounded text-sm"
            />
          </div>
          <button
            onClick={() => {
              sendDataToParent(title, author, isbn, genre, collection);
            }}
            className="bg-orange-500 w-full mx-auto hover:bg-orange-400 py-2.5 rounded px-12 text-white text-xs"
          >
            Rechercher
          </button>
        </div>
      </div>
    </div>
  );
}
