"use client";
import "./globals.css";
import Book from "./book";
import { Suspense, useState, useEffect } from "react";
export default function Home() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://librest.azurewebsites.net/allbooks")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
  return (
    <main className="min-h-screen">
      <div>
        <div className="w-full h-96 relative">
          <div className="w-full h-96 front bg-contain brightness-50"></div>
          <div className="flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center">
            <button className="bg-orange-500 hover:bg-orange-400 py-3 px-6 text-white z-10 text-sm">
              Bientot disponible
            </button>
          </div>
        </div>
        <div className="md:px-24 px-6 py-10">
          {isLoading && <p className="text-center">Chargement en cours...</p>}
          {data?.error && !isLoading && (
            <p className="text-center">Aucun résutat</p>
          )}

          {data?.books && (
            <div>
              <h1 className="font-bold text-2xl">Livres du moment</h1>
              <div className="py-10">
                <Suspense fallback={<p>Chargement en cours...</p>}>
                  <div className="flex flex-wrap">
                    {data.books.map((book) => (
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
                      />
                    ))}
                  </div>
                </Suspense>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
