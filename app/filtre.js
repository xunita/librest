"use client";
export default function Filtre({
  title = "",
  author = "",
  isbn = "",
  genre = "",
  collection = "",
  resetFilter,
  resetType,
}) {
  const reset = () => {
    resetFilter();
  };
  const resetT = (type) => {
    resetType(type);
  };
  return (
    <div className="flex lg:flex-row items-center flex-col space-y-2 lg:justify-between py-5">
      <div className="py-1 flex items-center flex-wrap space-x-4 space-y-3">
        <p className="text-sm">Filtre appliqué :</p>
        <div className="flex flex-wrap">
          {title !== "" && (
            <p className="border rounded py-1 px-2 flex items-center space-x-1 text-xs m-2">
              <span className="font-semibold">Titre:</span>
              <span>{title}</span>
              <button
                onClick={() => {
                  resetT("title");
                }}
                className="relative hover:text-orange-400"
              >
                <svg
                  className="w-5 h-5"
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
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </p>
          )}
          {author !== "" && (
            <p className="border rounded py-1 px-2 flex items-center space-x-1 text-xs m-2">
              <span className="font-semibold">Auteur:</span>
              <span>{author}</span>
              <button
                onClick={() => {
                  resetT("author");
                }}
                className="relative hover:text-orange-400"
              >
                <svg
                  className="w-5 h-5"
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
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </p>
          )}
          {isbn !== "" && (
            <p className="border rounded py-1 px-2 flex items-center space-x-1 text-xs m-2">
              <span className="font-semibold">ISBN:</span>
              <span>{isbn}</span>
              <button
                onClick={() => {
                  resetT("isbn");
                }}
                className="relative hover:text-orange-400"
              >
                <svg
                  className="w-5 h-5"
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
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </p>
          )}
          {genre !== "" && (
            <p className="border rounded py-1 px-2 flex items-center space-x-1 text-xs m-2">
              <span className="font-semibold">Genre:</span>
              <span>{genre}</span>
              <button
                onClick={() => {
                  resetT("genre");
                }}
                className="relative hover:text-orange-400"
              >
                <svg
                  className="w-5 h-5"
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
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </p>
          )}
          {collection !== "" && (
            <p className="border rounded py-1 px-2 flex items-center space-x-1 text-xs m-2">
              <span className="font-semibold">Collection:</span>
              <span>{collection}</span>
              <button
                onClick={() => {
                  resetT("collection");
                }}
                className="relative hover:text-orange-400"
              >
                <svg
                  className="w-5 h-5"
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
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </p>
          )}
        </div>
      </div>
      <button
        onClick={() => reset()}
        className="bg-blue-500 w-fit h-fit hover:bg-blue-400 py-2.5 rounded px-12 text-white text-xs"
      >
        Réinitialiser le filtre
      </button>
    </div>
  );
}
