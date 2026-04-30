import { NextResponse } from "next/server"

export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const q = searchParams.get("q")

  if (!q || q.length < 2) {
    return NextResponse.json([])
  }

  try {
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(q)}&maxResults=8`
    )

    const data = await res.json()

    const books = (data.items || []).map((item) => ({
      googleBooksId: item.id,
      title: item.volumeInfo.title || "Sem título",
      author: item.volumeInfo.authors?.join(", ") || "Autor desconhecido",
      cover: item.volumeInfo.imageLinks?.thumbnail || null,
      description: item.volumeInfo.description || "",
      publishedYear: item.volumeInfo.publishedDate || "",
    }))

    return NextResponse.json(books)
  } catch (error) {
    return NextResponse.json([])
  }
}