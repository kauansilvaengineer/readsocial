"use client"

import { useEffect, useState } from "react"

export default function BookSearchModal({ shelf, onClose, onBookAdded }) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [status, setStatus] = useState("")

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (query.length >= 2) {
        searchBooks()
      } else {
        setResults([])
      }
    }, 500)

    return () => clearTimeout(timeout)
  }, [query])

  async function searchBooks() {
    try {
      setLoading(true)
      setStatus("")

      const res = await fetch(`/api/books/search?q=${encodeURIComponent(query)}`)
      const data = await res.json()

      setResults(data)

      if (data.length === 0) {
        setStatus("Nenhum livro encontrado.")
      }
    } catch (err) {
      setStatus("Erro ao buscar livros.")
    } finally {
      setLoading(false)
    }
  }

  async function addBook(book) {
    try {
      setSaving(true)
      setStatus("Salvando livro...")

      const res = await fetch("/api/library/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          shelf,
          book,
        }),
      })

      if (!res.ok) {
        setStatus("Erro ao salvar.")
        setSaving(false)
        return
      }

      setStatus("Livro adicionado com sucesso.")

      setTimeout(() => {
        onBookAdded?.()
        onClose()
      }, 500)
    } catch (err) {
      setStatus("Erro ao salvar.")
      setSaving(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center px-4">
      <div className="bg-[#fcfaf8] w-[760px] max-h-[82vh] rounded-[32px] p-8 overflow-y-auto border border-[#eadfd7] shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-semibold">Adicionar livro à estante</h2>
            <p className="opacity-60 text-sm mt-1">
              Digite o nome do livro ou do autor para buscar automaticamente.
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-2xl opacity-50 hover:opacity-100"
          >
            ×
          </button>
        </div>

        <input
          type="text"
          placeholder="Ex: O Nome do Vento, George Orwell..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-white p-4 rounded-2xl outline-none border border-[#eadfd7]"
        />

        {loading && <p className="mt-5 opacity-60">Buscando livros...</p>}
        {saving && <p className="mt-5 opacity-60">Salvando...</p>}
        {status && !loading && <p className="mt-5 opacity-60">{status}</p>}

        {!loading && results.length > 0 && (
          <div className="mt-6 space-y-4">
            {results.map((book) => (
              <div
                key={book.googleBooksId}
                onClick={() => !saving && addBook(book)}
                className="flex gap-5 bg-white p-4 rounded-2xl border border-[#eadfd7] hover:border-[#d76f2c] hover:shadow cursor-pointer transition"
              >
                <img
                  src={book.cover || "https://via.placeholder.com/70x100?text=No+Cover"}
                  alt={book.title}
                  className="w-16 h-24 object-cover rounded-lg"
                />

                <div>
                  <h3 className="font-semibold text-lg">{book.title}</h3>
                  <p className="opacity-70 text-sm">{book.author}</p>
                  <p className="opacity-50 text-xs mt-1">{book.publishedYear}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}