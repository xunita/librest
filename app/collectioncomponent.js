"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import "./globals.css";
export default function CollectionComponent() {
  const router = useRouter()
  const [isShown, setIsShown] = useState(false);
  return (
    <div className="m-5">
      <div
        onClick={() => router.push('/collection/Ueve')}
        className="book shadow-md hover:shadow-2xl cursor-pointer relative"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <div className="bg-black/25">
          <div className="relative">
            <img
              src="/collection.jpg"
              width={256}
              height={256}
              className="border relative"
            />
            <div className="absolute top-0 w-full h-full bg-black/25">
              <div className="flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center">
                <span className="font-semibold text-white text-2xl">UEVE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
