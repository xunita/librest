"use client";
import Image from "next/image";
import "./globals.css";
import Book from "./book";
import Footer from "./footer";
import Header from "./header";
export default function Home() {
  return (
    <main className="min-h-screen">
      <div>
        <div className="w-full h-96 relative">
          <div className="w-full h-96 front bg-contain brightness-50"></div>
          <div className="flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center">
            <button className="bg-orange-500 hover:bg-orange-400 py-3 px-6 text-white z-10 text-sm">
              Bientot disponible
            </button>
          </div>
        </div>
        <div className="md:px-24 px-6 py-10">
          <h1 className="font-bold text-2xl">Livres du moment</h1>
          <div className="py-10">
            <div className="flex flex-wrap">
              <Book className="" />
              <Book className="" />
              <Book className="" />
              <Book className="" />
              <Book className="" />
              <Book className="" />
              <Book className="" />
              <Book className="" />
              <Book className="" />
              <Book className="" />
              <Book className="" />
              <Book className="" />
              <Book className="" />
              <Book className="" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
