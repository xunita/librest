"use client";
import { useState } from "react";
import "./globals.css";
export default function CollectionComponent() {
  const [isShown, setIsShown] = useState(false);
  return (
    <div
      className="book shadow-md hover:shadow-2xl relative"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <div className="bg-black/50">
        <div className="relative">
          <img
            src="/collection.jpg"
            width={256}
            height={256}
            className="border relative"
          />
          <div className="absolute top-0 w-full h-full bg-black/50">
            <div className="flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center">
              <span className="font-semibold text-white text-2xl">UEVE</span>
            </div>
          </div>
          {isShown && (
            <div className="absolute top-0 w-full h-full bg-black/50">
              <div className="flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center">
                <a
                  href="/collection/ueve"
                  className="bg-orange-500 hover:bg-orange-400 py-3 px-6 text-white z-10 text-sm"
                >
                  Voir UEVE
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
