"use client";
import "./globals.css";
export default function Footer() {
  return (
    <footer className="md:px-24 px-6 text-sm flex items-center justify-center py-4 space-x-2 border-t">
      <span>Développé par</span>{" "}
      <a
        href="https://www.linkedin.com/in/sopoude/"
        _target="blank"
        className="text-sm font-bold border-b border-transparent hover:border-orange-500"
      >
        Yaya Sopegue Soro
      </a>{" "}
      <span>avec</span>{" "}
      <a
        href="https://nextjs.org/"
        _target="blank"
        className="text-sm font-bold border-b border-transparent hover:border-orange-500"
      >
        React.js(Next.Js)
      </a>
    </footer>
  );
}
