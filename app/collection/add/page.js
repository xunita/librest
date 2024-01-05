"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function AddCollection() {
  const router = useRouter();
  const [collection, setCollection] = useState("");
  const addToCollection = async () => {
    if (collection === "") {
      alert("Veuillez remplir tous les champs");
      return;
    } else {
      try {
        fetch(
          "https://librest.azurewebsites.net/createCollection/" +
            collection.replaceAll("%20", " ").toLowerCase(),
          {
            method: "POST",
            body: JSON.stringify({
              collection: collection,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data?.error) {
              alert(data.error);
            } else {
              alert("Collection ajoutée avec succès");
              router.push("/collection");
            }
          })
          .catch((e) => {
            alert("Une erreur est survenue");
          });
      } catch (e) {
        alert("Une erreur est survenue");
      }
    }
  };
  return (
    <main className="min-h-screen">
      <div>
        <div className="md:px-24 px-6 py-10 flex flex-col space-y-4 items-center ">
          <h1 className="font-bold text-2xl">Ajouter une collection</h1>
          <div className="py-8 px-5 border-2 rounded md:w-2/4 w-full">
            <div className="flex lg:flex-row flex-col lg:space-y-0 space-y-5 items-center justify-center">
              <input
                type="text"
                onChange={(e) => setCollection(e.target.value)}
                value={collection}
                placeholder="Nom de la collection"
                className="w-full py-2 mx-auto border px-4 rounded text-sm"
              />
              <button
                onClick={() => {
                  addToCollection();
                }}
                className="bg-orange-500 lg:ml-4 hover:bg-orange-400 py-2.5  rounded px-6 text-white text-xs"
              >
                Ajouter
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
