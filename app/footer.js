"use client";
import "./globals.css";
export default function Footer() {
  return (
    <footer className="md:px-24 px-6 text-sm flex md:flex-row flex-col items-center justify-center py-4 md:space-x-2 md:space-y-0 space-y-1 border-t">
      <span>Développé par</span>{" "}
      <a
        href="https://www.linkedin.com/in/sopoude/"
        target="_blank"
        className="text-sm font-bold border-b border-transparent hover:border-orange-500"
      >
        Yaya Sopegue Soro
      </a>{" "}
      <span>avec</span>{" "}
      <a
        href="https://nextjs.org/"
        target="_blank"
        className="text-sm font-bold border-b border-transparent hover:border-orange-500"
      >
        React.js(Next.Js)
      </a>
    </footer>
  );
}
