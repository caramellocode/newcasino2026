"use client";

import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function AppShell({ children }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const onLoad = () => setReady(true);
    window.addEventListener("load", onLoad);

    return () => window.removeEventListener("load", onLoad);
  }, []);

  return (
    <>
      {!ready && <Loader />}
      {ready && children}
    </>
  );
}