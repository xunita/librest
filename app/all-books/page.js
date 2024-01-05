"use client";

import AdvancedSearch from "../advancedsearch";
import Link from "next/link";
import Book from "../book";
import Tri from "../tri";
import { Suspense, useState, useEffect } from "react";
import Filtre from "../filtre";

export default function AllBooks() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [genre, setGenre] = useState("");
  const [collection, setCollection] = useState("");
  const [option, setOption] = useState("Title");

  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [advancedSearch, setAdvancedSearch] = useState(false);
  const [needreload, setNeedReload] = useState(false);
  const needReload = (result) => {
    fetch("https://librest.azurewebsites.net/allbooks")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  };

  const optioning = (option) => {
    setOption(option);
  };

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
    fetch("https://librest.azurewebsites.net/allbooks")
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
        <div className="md:px-24 px-6 py-6">
          <Link
            href="/book-add"
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
            Ajouter un livre
          </Link>
          <div className="py-10">
            <div className="flex items-center justify-between">
              <h1 className="font-bold text-2xl">Listes des livres</h1>
              {data?.books && data.books?.length > 1 && (
                <Tri sendOption={optioning} />
              )}
            </div>
            {data?.books && data.books?.length > 1 && advancedSearch && (
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
            <div className="py-4">
              {isLoading && (
                <p className="text-center w-full">Chargement en cours...</p>
              )}
              {data?.error && !isLoading && (
                <p className="text-center w-full">Aucun résutat</p>
              )}
            </div>
            {data?.books && (
              <div className="flex lg:flex-row flex-col-reverse justify-between relative">
                <div>
                  <Suspense fallback={<p>Chargement en cours...</p>}>
                    <div className="flex flex-wrap">
                      {data.books.filter((book) =>
                        title !== ""
                          ? book.title.includes(title)
                          : author !== ""
                          ? book.author.includes(author)
                          : isbn !== ""
                          ? book.isbn === +isbn
                          : genre !== ""
                          ? book.genre.includes(genre)
                          : collection !== ""
                          ? book.collection.includes(collection)
                          : book.title.toLowerCase().includes("")
                      ).length == 0 && (
                        <p className="text-center w-full">Aucun résutat</p>
                      )}
                      {data.books
                        .filter((book) =>
                          title !== ""
                            ? book.title.includes(title)
                            : author !== ""
                            ? book.author.includes(author)
                            : isbn !== ""
                            ? book.isbn === +isbn
                            : genre !== ""
                            ? book.genre.includes(genre)
                            : collection !== ""
                            ? book.collection.includes(collection)
                            : book.title.toLowerCase().includes("")
                        )
                        .sort((a, b) =>
                          option === "Titre"
                            ? a.title.localeCompare(b.title)
                            : option === "Auteur"
                            ? a.author.localeCompare(b.author)
                            : option === "ISBN"
                            ? Number(a.isbn) - Number(b.isbn)
                            : option === "Genre"
                            ? a.genre.localeCompare(b.genre)
                            : a.title.localeCompare(b.title)
                        )
                        .map((book) => (
                          <Book
                            key={
                              new Date().getTime().toString() +
                              Math.random().toString(36).substring(2, 8)
                            }
                            isbn={book.isbn}
                            title={book.title}
                            author={book.author}
                            genre={book.genre}
                            collection={book.collection}
                            sendIt={needReload}
                          />
                        ))}
                    </div>
                  </Suspense>
                </div>
                {data?.books && data.books?.length > 1 && (
                  <div className="sticky top-0">
                    <AdvancedSearch sendData={doSomething} />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
