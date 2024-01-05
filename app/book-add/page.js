"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function AddBook() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [genre, setGenre] = useState("");
  const [adding, setAdding] = useState(false);
  const resetFilter = () => {
    setTitle("");
    setAuthor("");
    setIsbn("");
    setGenre("");
    setAdding(false);
  };
  const addBooking = async () => {
    setAdding(true);
    if (title === "" || author === "" || isbn === "" || genre === "") {
      alert("Veuillez remplir tous les champs");
      setAdding(false);
      return;
    } else {
      try {
        fetch(
          "https://librest.azurewebsites.net/addbook/" +
            title +
            "/" +
            author +
            "/" +
            isbn +
            "/" +
            genre,
          {
            method: "POST",
            body: JSON.stringify({
              title: title,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data?.error) {
              alert(data.error + ", probablement un doublon de ISBN");
              setAdding(false);
            } else {
              alert("Livre ajouté avec succès");
              resetFilter();
              router.push("/all-books");
            }
          })
          .catch((e) => {
            alert("Une erreur est survenue");
            setAdding(false);
          });
      } catch (e) {
        alert("Une erreur est survenue");
        setAdding(false);
      }
    }
  };
  return (
    <main className="min-h-screen">
      <div>
        <div className="md:px-24 px-6 py-10 flex flex-col space-y-4 items-center ">
          <h1 className="font-bold text-2xl">Ajouter un livre</h1>
          <div className="py-8 px-5 border-2 rounded md:w-2/4 w-full">
            <div className="flex flex-col space-y-5 justify-center">
              <div className="flex flex-col space-y-7 justify-center lg:px-20">
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Titre du livre"
                  className="w-full py-2 mx-auto border px-4 rounded text-sm"
                />
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="Auteur"
                  className="w-full py-2 mx-auto border px-4 rounded text-sm"
                />
                <input
                  type="text"
                  value={isbn}
                  onChange={(e) => {
                    if (+e.target.value) {
                      setIsbn(e.target.value);
                    } else setIsbn("");
                  }}
                  placeholder="Numéro ISBN"
                  className="w-full py-2 mx-auto border px-4 rounded text-sm"
                />
                <input
                  type="text"
                  onChange={(e) => setGenre(e.target.value)}
                  value={genre}
                  placeholder="Genre du livre"
                  className="w-full py-2 mx-auto border px-4 rounded text-sm"
                />
              </div>
              <button
                disabled={adding}
                onClick={() => {
                  addBooking();
                }}
                className="bg-orange-500 mx-auto hover:bg-orange-400 py-2.5 rounded px-12 text-white text-xs"
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
