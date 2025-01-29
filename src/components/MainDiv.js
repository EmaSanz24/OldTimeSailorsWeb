"use client";

import { useLoader } from "@/context/LoaderContext";

const MainDiv = ({ children, className }) => {
  const defaultSettings = { loader: 1, photos: true };
  const settings = useLoader() || defaultSettings;

  return (
    <main
      className={`relative flex flex-col ${className} main-scroll-wrapper`}
      style={{
        opacity: settings?.loader,
        pointerEvents: settings?.photos ? "auto" : "none",
      }}
    >
      <div className="flex-1 flex flex-col justify-center items-center h-full relative">{children}</div>
    </main>
  );
};

export default MainDiv;
