"use client";

export default function ContactBreadcrumb({ title }) {
  return (
    <div className="h-[280px] flex items-center justify-center bg-black">
      <h1 className="text-4xl md:text-5xl font-Garamond text-[#c9a24d]">
        {title}
      </h1>
    </div>
  );
}