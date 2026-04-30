"use client"

import { useTheme } from "next-themes"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-full mt-4 px-4 py-3 rounded-2xl border border-[#eadfd7] dark:border-[#3a2c28] bg-white dark:bg-[#1c1614] text-left text-[#5b463f] dark:text-[#d8c7be] hover:bg-[#f4ebe5] dark:hover:bg-[#2a211e] transition-all"
    >
      {theme === "dark" ? "☀️ Modo Claro" : "🌙 Modo Escuro"}
    </button>
  )
}