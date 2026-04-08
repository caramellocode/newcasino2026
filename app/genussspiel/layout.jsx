"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GenussspielIntro from "./components/GenussspielIntro";

export default function GenussspielLayout({ children }) {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      {!introDone && <GenussspielIntro onFinish={() => setIntroDone(true)} />}

      {introDone && (
        <>
          <Navbar />
          <main className="pt-[64px] bg-black text-white">
            {children}
          </main>
          <Footer />
        </>
      )}
    </>
  );
}