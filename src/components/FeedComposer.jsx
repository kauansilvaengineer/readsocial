"use client"

export default function FeedComposer() {
  return (
    <div className="bg-[#fcfaf8] border border-[#eadfd7] rounded-[32px] p-6 mb-8">
      <p className="text-sm text-[#9b7d70] mb-4">
        Compartilhe seu progresso literário
      </p>

      <textarea
        placeholder="Escreva uma resenha, uma frase marcante ou seu progresso..."
        className="w-full min-h-[120px] rounded-3xl border border-[#eadfd7] bg-white px-5 py-4 resize-none outline-none text-[#2f211d] placeholder:text-[#b49a8f]"
      />

      <div className="flex justify-end mt-4">
        <button className="px-7 py-3 rounded-full bg-[#d76f2c] text-white font-medium hover:opacity-90 transition-all">
          Publicar
        </button>
      </div>
    </div>
  )
}