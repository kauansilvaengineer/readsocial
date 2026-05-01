"use client"

import { useEffect, useState } from "react"

export default function BookSearchModal({ shelf, onClose, onBookAdded }) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (query.length >= 2) {
        searchBooks()
      } else {
        setResults([])
      }
    }, 400)

    return () => clearTimeout(timeout)
  }, [query])

  async function searchBooks() {
    setLoading(true)
    const res = await fetch(`/api/books/search?q=${encodeURIComponent(query)}`)
    const data = await res.json()
    setResults(data)
    setLoading(false)
  }

  async function addBook(book) {
    await fetch("/api/library/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        shelf,
        book,
      }),
    })

    onBookAdded?.()
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
      <div className="bg-zinc-900 w-[700px] max-h-[80vh] rounded-2xl p-6 overflow-y-auto border border-zinc-700">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl font-bold text-white">Adicionar livro</h2>
          <button onClick={onClose} className="text-zinc-400 hover:text-white">✕</button>
        </div>

        <input
          type="text"
          placeholder="Digite nome do livro ou autor..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-zinc-800 text-white p-3 rounded-xl outline-none border border-zinc-700"
        />

        {loading && <p className="text-zinc-400 mt-4">Buscando livros...</p>}

        <div className="mt-5 space-y-3">
          {results.map((book) => (
            <div
              key={book.googleBooksId}
              className="flex gap-4 bg-zinc-800 p-3 rounded-xl hover:bg-zinc-700 cursor-pointer"
              onClick={() => addBook(book)}
            >
              <img
                src={book.cover || "https://via.placeholder.com/60x90?text=No+Cover"}
                alt={book.title}
                className="w-14 h-20 object-cover rounded"
              />

              <div>
                <h3 className="text-white font-semibold">{book.title}</h3>
                <p className="text-zinc-400 text-sm">{book.author}</p>
                <p className="text-zinc-500 text-xs">{book.publishedYear}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}