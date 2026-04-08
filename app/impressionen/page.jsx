"use client";

import { useState } from "react";
import ImpressionenHeader from "@/components/ImpressionenHeader";
import ImpressionenCategories from "@/components/ImpressionenCategories";
import ImpressionenGallery from "@/components/ImpressionenGallery";

export default function ImpressionenPage() {
  const [active, setActive] = useState("casino");

  return (
    <main className="bg-black min-h-screen text-white">
      <ImpressionenHeader />
      <ImpressionenCategories active={active} setActive={setActive} />
      <ImpressionenGallery active={active} />
    </main>
  );
}