"use client";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import "./globals.css";
import Link from "next/link";
import Collectionning from "./collectionning";
export default function Book({
  sendIt,
  isbn,
  title,
  author,
  genre,
  collection,
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [modifying, setModifying] = useState(false);
  const [result, setResult] = useState(false);
  const [collectionlisting, setCollectionlisting] = useState(false);
  const removeFromCollection = (isbn, collection) => {
    fetch(
      "https://librest.azurewebsites.net/delBookFromCollection/" +
        collection +
        "/" +
        isbn,
      {
        method: "DELETE",
        body: JSON.stringify({ isbn: isbn, collection: collection }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then(() => {
        alert("Livre supprimé avec succès");
        sendIt(true);
      })
      .catch((e) => {
        console.log(e);
        alert("Une erreur est survenue");
        sendIt(false);
      });
  };

  const removeFromBiblio = (isbn) => {
    fetch("https://librest.azurewebsites.net/delbook/" + isbn, {
      method: "DELETE",
      body: JSON.stringify({ isbn: isbn }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => {
        alert("Livre supprimé avec succès");
        sendIt(true);
      })
      .catch((e) => {
        console.log(e);
        sendIt(false);
        alert("Une erreur est survenue");
      });
  };
  const deleteBook = (isbn) => {
    console.log(pathname);
    const confirm = window.confirm("Voulez-vous vraiment supprimer ce livre ?");
    if (confirm) {
      if (!pathname.includes("collection")) {
        removeFromBiblio(isbn);
      } else {
        removeFromCollection(isbn, collection);
      }
    }
  };
  const resulting = (result) => {
    if (result === "ok") {
      setCollectionlisting(false);
    } else {
      alert("Une erreur est survenue");
    }
    sendIt(true);
  };
  const [option, setOption] = useState("Title");

  return (
    <div className="m-5">
      {collectionlisting && (
        <div className="w-full h-full fixed z-50 left-0 right-0 bottom-0 top-0 bg-black/75">
          <div
            onClick={() => {
              setCollectionlisting(false);
            }}
            className="w-full h-full"
          ></div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center">
            <div className="w-full">
              <Collectionning isbn={isbn} sendResult={resulting} />
            </div>
          </div>
        </div>
      )}

      <div className="book shadow-md hover:shadow-2xl relative">
        <div className="flex flex-col space-y-2">
          <div className="relative">
            <img
              src="/book.jpg"
              width={256}
              height={256}
              className="relative"
            />
          </div>
          <div className="relative">
            <div className="absolute bottom-4 right-2">
              <button
                onClick={() => {
                  deleteBook(isbn);
                }}
                className="p-2"
              >
                <svg
                  className="w-6 h-6 hover:text-red-400"
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
              {/* <div className="flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center">
                  <button className="bg-orange-500 hover:bg-orange-400 py-3 px-6 text-white z-10 text-xs">
                    Bientôt disponible
                  </button>
                </div> */}
            </div>
            <div className="flex flex-col space-y-1 p-4">
              <div>
                <span className="text-sm text-gray-500 auth">
                  {author
                    .replaceAll("%20", " ")
                    .replace(/\b\p{L}/gu, (match) => match.toUpperCase())}
                </span>
              </div>
              <div>
                <span className="font-semibold title">{title}</span>
              </div>
              <div>
                <span className="text-xs text-gray-500 italic isbn">
                  {isbn}
                </span>
              </div>
              <div>
                <span className="text-sm text-gray-500 italic genre">
                  {genre
                    .replaceAll("%20", " ")
                    .replace(/\b\p{L}/gu, (match) => match.toUpperCase())}
                </span>
              </div>
              <div>
                {collection === "" && (
                  <button
                    onClick={() => {
                      setCollectionlisting(true);
                    }}
                  >
                    <svg
                      className="w-6 h-6 font-bold hover:text-red-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                    </svg>
                  </button>
                )}
                {collection !== "" && (
                  <span className="text-sm text-gray-500 collection font-bold">
                    {collection
                      .replaceAll("%20", " ")
                      .replace(/\b\p{L}/gu, (match) => match.toUpperCase())}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
