"use client";
import "./globals.css";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
export default function Collectionning({ isbn, sendResult }) {
  const resulting = (result) => {
    sendResult(result);
  };
  const [data, setData] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [haserror, setHaserror] = useState(false);
  const [option, setOption] = useState("");
  const reff = useRef(null);
  const [isLoading, setLoading] = useState(true);

  const addToCollection = (isbn, collection) => {
    fetch(
      "https://librest.azurewebsites.net/addBookToCollection/" +
        collection +
        "/" +
        isbn,
      {
        method: "POST",
        body: JSON.stringify({ isbn: isbn, collection: collection }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        resulting("ok");
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
        resulting("error");
        setHaserror(true);
      });
  };

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
  useEffect(() => {
    fetch("https://librest.azurewebsites.net/allcollections")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setOption(data?.length > 0 ? data[0] : "");
        setLoading(false);
      });
  }, []);
  return (
    <div className="p-10 border bg-white w-full rounded bggg">
      {isLoading && (
        <p className="text-center w-full py-10">Chargement en cours...</p>
      )}
      {data?.length == 0 && !isLoading && (
        <p className="text-center w-full py-10">Aucune collection trouvée</p>
      )}
      {data?.length > 0 && !isLoading && (
        <p className="text-center text-sm">
          <span className="font-semibold">ISBN:</span> <span>{isbn}</span>
        </p>
      )}
      {data?.length > 0 && !isLoading && (
        <p className="text-center py-6 text-sm">
          Choisissez une collection dans la liste
        </p>
      )}
      {data?.length > 0 && !isLoading && (
        <div className="flex flex-col space-y-4">
          <div
            className="relative inline-block text-left z-20 text-sm"
            ref={reff}
          >
            <div className="flex flex-col space-y-6 items-center z-20 w-full">
              <div>
                <button
                  onMouseDown={() => setIsShown(!isShown)}
                  className="flex items-center truncate w-full justify-center rounded-md border px-3 py-2 text-xs font-semibold shadow-sm ring-1 ring-inset ring-gray-300"
                >
                  {" "}
                  {option.length > 20
                    ? option.substring(0, 20) + "..."
                    : option}
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
              <div className="absolute text-xs sm:w-64 mt-1 bggg rounded-md border shadow-lg">
                <div className="py-1" role="none">
                  {data?.map((collection) => (
                    <button
                      title={collection}
                      key={
                        new Date().getTime().toString() +
                        Math.random().toString(36).substring(2, 8)
                      }
                      onClick={() => {
                        setOption(collection);
                        setIsShown(false);
                      }}
                      className="hover:bg-orange-300 block w-full px-4 py-2 text-sm text-left text-clip overflow-hidden"
                    >
                      {collection.length > 20
                        ? collection.substring(0, 20) + "..."
                        : collection}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => {
              addToCollection(isbn, option);
            }}
            className="bg-orange-500 w-full mx-auto hover:bg-orange-400 py-2.5 rounded px-12 text-white text-xs"
          >
            Ajouter à cette collection
          </button>
          {haserror && (
            <span className="text-red-500 text-xs text-center">
              Opps une erreur est arrivée!
            </span>
          )}
        </div>
      )}
    </div>
  );
}
