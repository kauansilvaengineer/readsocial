"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import ThemeToggle from "./ThemeToggle"

export default function Sidebar() {
  const pathname = usePathname()

  const links = [
    { name: "Início", href: "/" },
    { name: "Meu Feed", href: "/feed" },
    { name: "Biblioteca", href: "/library" },
    { name: "Explorar", href: "/explore" },
    { name: "Perfil", href: "/profile" },
    { name: "Configurações", href: "/settings" },
  ]

  return (
    <aside className="w-[260px] min-h-screen border-r border-[#eadfd7] dark:border-[#322622] bg-[#fcfaf8] dark:bg-[#140f0d] px-6 py-8 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 rounded-full bg-[#d76f2c]" />
          <h1 className="text-3xl font-semibold tracking-tight text-[#2f211d] dark:text-[#f2e7df]">
            ReadSocial
          </h1>
        </div>

        <nav className="flex flex-col gap-2">
          {links.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`px-4 py-3 rounded-2xl text-[17px] transition-all ${
                pathname === item.href
                  ? "bg-[#f1e4dc] dark:bg-[#2a211e] text-[#2f211d] dark:text-white font-medium"
                  : "text-[#5b463f] dark:text-[#b89f94] hover:bg-[#f4ebe5] dark:hover:bg-[#211917]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <ThemeToggle />
      </div>

      <div className="rounded-3xl border border-[#eadfd7] dark:border-[#322622] bg-white dark:bg-[#1c1614] p-4">
        <p className="text-sm text-[#8a6f63] dark:text-[#9f8477]">Leitor ativo</p>
        <h3 className="text-lg font-semibold text-[#2f211d] dark:text-white mt-1">Kauan Silva Dev</h3>
        <p className="text-sm text-[#8a6f63] dark:text-[#9f8477] mt-1">18 livros este ano</p>
      </div>
    </aside>
  )
}