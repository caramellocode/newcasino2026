/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",          // ✅ wichtig für statisches Export-Build
  images: {
    // Damit <Image> ohne eigenes Image-Loader/CDN geht:
    unoptimized: true,
    // domains: ["example.com"], // falls du externe Bilder nutzt
  },
};

export default nextConfig;