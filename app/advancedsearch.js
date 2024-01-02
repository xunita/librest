"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
export default function AdvancedSearch() {
  const [isShown, setIsShown] = useState(false);
  const pathname = usePathname();
  return (
    <div className="">
      <h1 className="font-bold text-lg mb-5">Recherche avancée</h1>
      <div className="py-8 px-5 border-2 rounded w-full">
        <div className="flex flex-col space-y-5 justify-center">
          <div className="flex flex-col space-y-7 justify-center">
            {pathname.includes("/all-books") && (
              <div className="flex flex-col space-y-7 justify-center">
                <input
                  type="text"
                  placeholder="Titre"
                  className="w-full py-2 mx-auto border px-4 rounded text-sm"
                />
                <input
                  type="text"
                  placeholder="Auteur"
                  className="w-full py-2 mx-auto border px-4 rounded text-sm"
                />
                <input
                  type="text"
                  placeholder="Numéro ISBN"
                  className="w-full py-2 mx-auto border px-4 rounded text-sm"
                />
                <input
                  type="text"
                  placeholder="Genre"
                  className="w-full py-2 mx-auto border px-4 rounded text-sm"
                />
              </div>
            )}

            <input
              type="text"
              placeholder="Nom de la collection"
              className="w-full py-2 mx-auto border px-4 rounded text-sm"
            />
          </div>
          <button className="bg-orange-500 w-full mx-auto hover:bg-orange-400 py-2.5 rounded px-12 text-white text-xs">
            Rechercher
          </button>
          <button className="bg-blue-500 w-full mx-auto hover:bg-blue-400 py-2.5 rounded px-12 text-white text-xs">
            Réinitialiser la recherche
          </button>
        </div>
      </div>
    </div>
  );
}
