"use client";
export default function AddCollection() {
  return (
    <main className="min-h-screen">
      <div>
        <div className="md:px-24 px-6 py-10 flex flex-col space-y-4 items-center ">
          <h1 className="font-bold text-2xl">Ajouter une collection</h1>
          <div className="py-8 px-5 border-2 rounded md:w-2/4 w-full">
            <div className="flex lg:flex-row flex-col items-center justify-center">
              <input
                type="text"
                placeholder="Nom de la collection"
                className="lg:w-2/3 w-full py-2 border px-4 rounded lg:m-4 m-0 mb-4 text-sm"
              />
              <button className="bg-orange-500 lg:ml-4 hover:bg-orange-400 py-2.5  rounded px-6 text-white text-xs">
                Ajouter
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
