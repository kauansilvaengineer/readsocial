"use client"

import Link from "next/link"
import { useSession, signOut } from "next-auth/react"

export default function Navbar() {
  const { data: session } = useSession()

  return (
    <header className="sticky top-0 z-50 border-b border-[#E9DFD8] bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-10">

        <Link href="/" className="flex items-center gap-3">
          <div className="h-7 w-7 rounded-lg bg-[#D5662D] shadow-sm"></div>
          <span className="text-[19px] font-semibold tracking-[-0.03em] text-[#241A15]">
            ReadSocial
          </span>
        </Link>

        <nav className="flex items-center gap-10 text-[15px] font-medium text-[#6E625C]">
          <Link href="/feed" className="hover:text-[#241A15] transition-colors">
            Feed
          </Link>
          <Link href="/library" className="hover:text-[#241A15] transition-colors">
            Biblioteca
          </Link>
          <Link href="/profile" className="hover:text-[#241A15] transition-colors">
            Perfil
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          {session ? (
            <>
              <img
                src={session.user.image}
                alt={session.user.name}
                className="h-10 w-10 rounded-full object-cover ring-2 ring-[#F3E5DC]"
              />

              <button
                onClick={() => signOut()}
                className="rounded-xl border border-[#E8D8CF] px-4 py-2 text-sm font-medium text-[#5E514B] hover:bg-[#FAF5F1] transition"
              >
                Sair
              </button>
            </>
          ) : (
            <Link
              href="/api/auth/signin"
              className="rounded-xl bg-[#D5662D] px-5 py-2.5 text-sm font-medium text-white"
            >
              Entrar
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}