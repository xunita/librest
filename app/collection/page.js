"use client";
import AdvancedSearch from "../advancedsearch";
import Book from "../book";
import CollectionComponent from "../collectioncomponent";
import { Suspense, useState, useEffect } from "react";
import Link from "next/link";
import Filtre from "../filtre";
export default function Collection() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [genre, setGenre] = useState("");
  const [collection, setCollection] = useState("");

  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [advancedSearch, setAdvancedSearch] = useState(false);
  const resetType = (type) => {
    switch (type) {
      case "title":
        setTitle("");
        break;
      case "author":
        setAuthor("");
        break;
      case "isbn":
        setIsbn("");
        break;
      case "genre":
        setGenre("");
        break;
      case "collection":
        setCollection("");
        break;
      default:
        break;
    }
  };
  const resetFilter = () => {
    setTitle("");
    setAuthor("");
    setIsbn("");
    setGenre("");
    setCollection("");
    setAdvancedSearch(false);
  };
  const doSomething = (title, author, isbn, genre, collection) => {
    setTitle(title);
    setAuthor(author);
    setIsbn(isbn);
    setGenre(genre);
    setCollection(collection);
    if (
      title !== "" ||
      author !== "" ||
      isbn !== "" ||
      genre !== "" ||
      collection !== ""
    ) {
      setAdvancedSearch(true);
    } else {
      setAdvancedSearch(false);
    }
  };
  useEffect(() => {
    fetch("https://librest.azurewebsites.net/allcollections")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (
      title === "" &&
      author === "" &&
      isbn === "" &&
      genre === "" &&
      collection === ""
    ) {
      resetFilter();
    }
  }, [title, author, isbn, genre, collection]);
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
            <h1 className="font-bold text-2xl">Liste des collections</h1>
            <div className="py-5">
              {isLoading && (
                <p className="text-center">Chargement en cours...</p>
              )}
              {data?.length == 0 && !isLoading && (
                <p className="text-center">Aucun résutat</p>
              )}
            </div>
            {data?.length !== 0 && data?.length > 1 && advancedSearch && (
              <Filtre
                resetFilter={resetFilter}
                resetType={resetType}
                title={title}
                author={author}
                isbn={isbn}
                genre={genre}
                collection={collection}
              />
            )}
            <div className="flex lg:flex-row flex-col-reverse justify-between py-5">
              <div className="">
                <div className="flex flex-wrap">
                  {data?.filter((col) =>
                    collection !== ""
                      ? col.toLowerCase().includes(collection.toLowerCase())
                      : col.toLowerCase().includes("")
                  ).length == 0 && (
                    <p className="text-center w-full py-10">Aucun résutat</p>
                  )}
                  {data
                    ?.filter((col) =>
                      collection !== ""
                        ? col.toLowerCase().includes(collection.toLowerCase())
                        : col.toLowerCase().includes("")
                    )
                    .map((collection) => (
                      <CollectionComponent
                        key={
                          new Date().getTime().toString() +
                          Math.random().toString(36).substring(2, 8)
                        }
                        name={collection}
                      />
                    ))}
                </div>
              </div>
              {data?.length !== 0 && data?.length > 1 && (
                <div className="">
                  <AdvancedSearch sendData={doSomething} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
