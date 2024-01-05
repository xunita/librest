"use client";
import "./globals.css";
import Book from "./book";
import { Suspense, useState, useEffect } from "react";
export default function Home() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [needreload, setNeedReload] = useState(false);
  const needReload = (result) => {
    fetch("https://librest.azurewebsites.net/allbooks")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  };
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
          <div className="flex flex-col space-y-5 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center">
            <div className="font-semibold italic text-4xl text-white">
              Bienvenue sur Librest
            </div>
            <div className="font-semibold italic text-white">
              Projet individuel de classe pour le cours d'architectures
              orientées services (AOS) utilisant React, Next.js, Tailwind CSS et
              Flask comme outils de développement ainsi que Vercel, Azure comme
              plateforme de déploiement et Github pour le CI/CD.
            </div>
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
                    {data.books.slice(0, 4).map((book) => (
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
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
