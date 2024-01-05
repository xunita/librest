"use client";
import Book from "@/app/book";
import Tri from "@/app/tri";
import { useState, useEffect, Suspense } from "react";
import { useRouter, usePathname } from "next/navigation";
export default function Collection({ params }) {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [option, setOption] = useState("Title");
  const [isLoading, setLoading] = useState(true);
  const [needreload, setNeedReload] = useState(false);
  const deleteCollection = () => {
    const result = confirm("Voulez-vous vraiment supprimer cette collection ?");
    if (result) {
      fetch(
        "https://librest.azurewebsites.net/delCollection/" +
          params.slug.replaceAll("%20", " ").toLowerCase(),
        {
          method: "DELETE",
          body: JSON.stringify({ collection: params.slug }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then(() => {
          alert("Collection supprimée avec succès");
          router.push("/collection");
        })
        .catch((e) => {
          console.log(e);
          alert("Une erreur est survenue");
        });
    }
  };
  const needReload = (result) => {
    fetch(
      "https://librest.azurewebsites.net/allbooksCollection/" +
        params.slug.replaceAll("%20", " ").toLowerCase()
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  };
  const optioning = (option) => {
    setOption(option);
  };
  useEffect(() => {
    fetch(
      "https://librest.azurewebsites.net/allbooksCollection/" +
        params.slug.replaceAll("%20", " ").toLowerCase()
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
  return (
    <main className="min-h-screen">
      <div>
        <div className="w-full h-20 relative">
          <div className="w-full h-20 front bg-contain brightness-50"></div>
          <div className="flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center">
            <span className="text-lg font-bold text-white">
              Collection{" "}
              {params.slug
                .replaceAll("%20", " ")
                .replace(/\b\w/g, (match) => match.toUpperCase())}
            </span>
          </div>
          {!data?.error && (
            <button
              onClick={() => {
                deleteCollection();
              }}
              className="bg-transparent p-4 absolute top-0 right-0"
            >
              <svg
                className="w-6 h-6 text-white hover:text-red-500"
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
          )}
        </div>
        <div>
          {isLoading && (
            <p className="text-center w-full py-10">Chargement en cours...</p>
          )}
          {data?.allbooks?.length == 0 && !isLoading && (
            <p className="text-center w-full py-10">Aucun résutat</p>
          )}

          {data?.error && (
            <p className="text-center w-full py-10">
              Une erreur s'est produite, cette collection n'existe probablement
              pas
            </p>
          )}
        </div>
        {data?.allbooks && data?.allbooks?.length > 0 && (
          <div>
            <div className="flex items-center justify-between md:px-24 px-6 pt-20">
              <h1 className="font-bold text-2xl pb-6">Livres</h1>
              {data?.allbooks && data?.allbooks?.length > 1 && (
                <Tri sendOption={optioning} />
              )}
            </div>
            <div className="md:px-24 px-6">
              <div>
                <Suspense fallback={<p>Chargement en cours...</p>}>
                  <div className="flex flex-wrap">
                    {data.allbooks
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
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
