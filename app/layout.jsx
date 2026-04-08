import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "@/styles/floorfour.css";
import "@/styles/wsop.css";
import "@/styles/promotionen.css";

export const metadata = {
  title: "Grand Casino Liechtenstein",
  description: "Feel Grand",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className="bg-black text-white">
        <Navbar />
        <main className="pt-[64px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}