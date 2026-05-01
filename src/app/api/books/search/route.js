import { NextResponse } from "next/server"

export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const q = searchParams.get("q")

  if (!q || q.length < 2) {
    return NextResponse.json([])
  }

  try {
    console.log("Consultando OpenLibrary:", q)

    const res = await fetch(
      `https://openlibrary.org/search.json?q=${encodeURIComponent(q)}&limit=8`,
      {
        cache: "no-store",
      }
    )

    const data = await res.json()

    const books = (data.docs || []).map((item) => ({
      googleBooksId: item.key,
      title: item.title || "Sem título",
      author: item.author_name?.join(", ") || "Autor desconhecido",
      cover: item.cover_i
        ? `https://covers.openlibrary.org/b/id/${item.cover_i}-L.jpg`
        : null,
      description: "",
      publishedYear: item.first_publish_year || "",
    }))

    return NextResponse.json(books)
  } catch (error) {
    console.log("ERRO OPENLIBRARY:", error)
    return NextResponse.json([])
  }
}