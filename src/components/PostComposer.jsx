"use client"

import { useState } from "react"

export default function PostComposer() {
  const [text, setText] = useState("")

  return (
    <div className="bg-white border border-[#e8e6df] rounded-3xl p-5 shadow-sm">
      <div className="flex gap-4 items-start">
        <div className="w-11 h-11 rounded-full bg-[#d8d2c6] flex items-center justify-center text-[#403b33] font-semibold">
          K
        </div>

        <div className="flex-1">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="O que você está lendo hoje?"
            className="w-full resize-none outline-none text-[15px] text-[#2e2a26] placeholder:text-[#8b8578] min-h-[90px]"
          />

          <div className="flex items-center justify-between mt-4">
            <span className="text-sm text-[#8b8578]">
              Compartilhe pensamentos, trechos ou progresso.
            </span>

            <button className="bg-[#1f1f1c] text-white px-5 py-2 rounded-2xl text-sm hover:opacity-90 transition-opacity">
              Publicar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}