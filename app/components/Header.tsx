"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-[#0d0d0d]">
          RENDA INTELIGENTE
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-6 text-[#0d0d0d]">
          <Link href="/" className="hover:text-gray-500">
            Home
          </Link>
          <Link href="/blog" className="hover:text-gray-500">
            Blog
          </Link>
          <Link href="/sobre" className="hover:text-gray-500">
            Sobre
          </Link>
          <Link href="/contato" className="hover:text-gray-500">
            Contato
          </Link>
        </nav>

        {/* Botão Mobile */}
        <button className="md:hidden" onClick={() => setOpen(true)}>
          ☰
        </button>
      </div>

      {/* Menu lateral Mobile */}
      {open && (
        <div className="fixed inset-0 bg-black/50 z-50">
          <div className="w-64 bg-white h-full p-6">
            <button className="mb-6" onClick={() => setOpen(false)}>
              ✕
            </button>

            <nav className="flex flex-col gap-4">
              <Link href="/" onClick={() => setOpen(false)}>
                Home
              </Link>
              <Link href="/blog" onClick={() => setOpen(false)}>
                Blog
              </Link>
              <Link href="/sobre" onClick={() => setOpen(false)}>
                Sobre
              </Link>
              <Link href="/contato" onClick={() => setOpen(false)}>
                Contato
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
