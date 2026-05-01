"use client"

import { useState } from "react"
import BookSearchModal from "./BookSearchModal"

export default function ProfileClient({ user, reading, read, want }) {
  const [modalShelf, setModalShelf] = useState(null)

  function renderShelf(title, shelfKey, books) {
    return (
      <div className="rounded-3xl border border-[#eadfd7] dark:border-[#322622] bg-[#fcfaf8] dark:bg-[#1a1412] p-6">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <button
            onClick={() => setModalShelf(shelfKey)}
            className="bg-[#d76f2c] text-white px-4 py-2 rounded-xl hover:opacity-90"
          >
            + Adicionar livro
          </button>
        </div>

        {books.length === 0 ? (
          <p className="opacity-60">Nenhum livro nesta estante ainda.</p>
        ) : (
          <div className="grid grid-cols-4 gap-4">
            {books.map((entry) => (
              <div key={entry.id}>
                <img
                  src={entry.book.cover || "https://via.placeholder.com/120x180?text=No+Cover"}
                  alt={entry.book.title}
                  className="w-full h-44 object-cover rounded-xl"
                />
                <p className="mt-2 text-sm font-medium line-clamp-2">{entry.book.title}</p>
                <p className="text-xs opacity-60">{entry.book.author}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <>
      <div className="rounded-[32px] border border-[#eadfd7] dark:border-[#322622] bg-[#fcfaf8] dark:bg-[#1a1412] p-10 mb-8">
        <div className="w-24 h-24 rounded-full bg-[#d76f2c] mb-6" />
        <h1 className="text-4xl font-semibold">{user.name || "Leitor"}</h1>
        <p className="mt-3 opacity-70 max-w-xl">
          {user.bio || "Construindo uma reputação literária no ReadSocial."}
        </p>

        <div className="grid grid-cols-3 gap-6 mt-10">
          <div>
            <h3 className="text-3xl font-semibold">{read.length}</h3>
            <p className="opacity-70">Livros lidos</p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold">{user.posts.length}</h3>
            <p className="opacity-70">Posts</p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold">{user.followers.length}</h3>
            <p className="opacity-70">Seguidores</p>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {renderShelf("📖 Lendo atualmente", "READING", reading)}
        {renderShelf("🕮 Quero ler", "WANT_TO_READ", want)}
        {renderShelf("✔ Já li", "READ", read)}
      </div>

      {modalShelf && (
        <BookSearchModal
          shelf={modalShelf}
          onClose={() => setModalShelf(null)}
          onBookAdded={() => window.location.reload()}
        />
      )}
    </>
  )
}