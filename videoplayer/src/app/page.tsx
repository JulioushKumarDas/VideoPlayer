"use client";
import Image from "next/image";

export default function Home() {
  const handleButtonClick = () => {
    window.open("/video-player", "_self");
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 active:bg-blue-800 h-12 w-32" onClick={handleButtonClick}>Video Player</button>
    </div>
  );
}
