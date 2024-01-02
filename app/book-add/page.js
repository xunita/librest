"use client";
export default function AddBook() {
  return (
    <main className="min-h-screen">
      <div>
        <div className="md:px-24 px-6 py-10 flex flex-col space-y-4 items-center ">
          <h1 className="font-bold text-2xl">Ajouter un livre</h1>
          <div className="py-8 px-5 border-2 rounded md:w-2/4 w-full">
            <div className="flex flex-col space-y-5 justify-center">
              <div className="flex flex-col space-y-7 justify-center">
                <input
                  type="text"
                  placeholder="Titre du livre"
                  className="lg:w-2/3 w-full py-2 mx-auto border px-4 rounded text-sm"
                />
                <input
                  type="text"
                  placeholder="Auteur du livre"
                  className="lg:w-2/3 w-full py-2 mx-auto border px-4 rounded text-sm"
                />
                <input
                  type="text"
                  placeholder="Numéro ISBN"
                  className="lg:w-2/3 w-full py-2 mx-auto border px-4 rounded text-sm"
                />
                <input
                  type="text"
                  placeholder="Genre du livre"
                  className="lg:w-2/3 w-full py-2 mx-auto border px-4 rounded text-sm"
                />
              </div>
              <button className="bg-orange-500 mx-auto hover:bg-orange-400 py-2.5 rounded px-12 text-white text-xs">
                Ajouter
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
