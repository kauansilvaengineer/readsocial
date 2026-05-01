"use client"

import { useEffect, useState } from "react"

export default function BookSearchModal({ shelf, onClose, onBookAdded }) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [addingId, setAddingId] = useState(null)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (query.trim().length >= 2) {
        searchBooks(query)
      } else {
        setResults([])
      }
    }, 500)

    return () => clearTimeout(timeout)
  }, [query])

  async function searchBooks(searchTerm) {
    try {
      setLoading(true)

      console.log("BUSCANDO:", searchTerm)

      const res = await fetch(`/api/books/search?q=${encodeURIComponent(searchTerm)}`)
      const data = await res.json()

      console.log("RESULTADO API:", data)

      if (Array.isArray(data)) {
        setResults(data)
      } else {
        setResults([])
      }
    } catch (err) {
      console.error("ERRO AO BUSCAR LIVROS:", err)
      setResults([])
    } finally {
      setLoading(false)
    }
  }

  async function addBook(book) {
    try {
      setAddingId(book.googleBooksId)

      const res = await fetch("/api/library/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ shelf, book }),
      })

      const data = await res.json()
      console.log("RETORNO ADD:", data)

      onBookAdded?.()
      onClose()
    } catch (err) {
      console.error("ERRO AO ADICIONAR:", err)
    } finally {
      setAddingId(null)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
      <div className="bg-[#fcfaf8] text-[#2b1d18] w-[720px] max-h-[80vh] rounded-3xl p-8 overflow-y-auto shadow-2xl">
        <div className="flex justify-between items-center mb-5">
          <div>
            <h2 className="text-2xl font-bold">Adicionar livro à estante</h2>
            <p className="opacity-60">
              Digite o nome do livro ou do autor para buscar automaticamente.
            </p>
          </div>

          <button onClick={onClose} className="text-2xl opacity-50 hover:opacity-100">
            ×
          </button>
        </div>

        <input
          type="text"
          placeholder="Ex: O Poder do Hábito"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full border border-[#eadfd7] rounded-2xl p-4 outline-none"
        />

        {loading && <p className="mt-4 opacity-60">Buscando livros...</p>}

        {!loading && results.length === 0 && query.trim().length >= 2 && (
          <p className="mt-4 opacity-50">Nenhum livro encontrado.</p>
        )}

        <div className="mt-5 space-y-3">
          {results.map((book) => (
            <div
              key={book.googleBooksId}
              onClick={() => addBook(book)}
              className="flex gap-4 p-3 rounded-2xl hover:bg-[#f2ece8] cursor-pointer transition border border-transparent hover:border-[#eadfd7]"
            >
              <img
                src={book.cover || "https://via.placeholder.com/60x90"}
                alt={book.title}
                className="w-14 h-20 object-cover rounded"
              />

              <div className="flex-1">
                <h3 className="font-semibold">{book.title}</h3>
                <p className="text-sm opacity-70">{book.author}</p>
                <p className="text-xs opacity-50">{book.publishedYear}</p>
              </div>

              <div className="flex items-center">
                {addingId === book.googleBooksId ? (
                  <span className="text-sm opacity-50">Adicionando...</span>
                ) : (
                  <span className="text-sm font-medium text-[#d76f2c]">Adicionar</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}