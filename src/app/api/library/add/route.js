import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"

export async function POST(req) {
  try {
    const session = await auth()

    if (!session?.user?.email) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 })
    }

    const body = await req.json()
    const { shelf, book } = body

    if (!shelf || !book?.googleBooksId) {
      return NextResponse.json({ error: "Dados inválidos" }, { status: 400 })
    }

    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    })

    if (!user) {
      return NextResponse.json({ error: "Usuário não encontrado" }, { status: 404 })
    }

    let existingBook = await prisma.book.findUnique({
      where: {
        googleBooksId: book.googleBooksId,
      },
    })

    if (!existingBook) {
      existingBook = await prisma.book.create({
        data: {
          googleBooksId: book.googleBooksId,
          title: book.title,
          author: book.author,
          cover: book.cover,
          description: book.description,
        },
      })
    }

    const userBook = await prisma.userBook.findFirst({
      where: {
        userId: user.id,
        bookId: existingBook.id,
      },
    })

    if (!userBook) {
      await prisma.userBook.create({
        data: {
          userId: user.id,
          bookId: existingBook.id,
          shelf,
        },
      })
    } else {
      await prisma.userBook.update({
        where: {
          id: userBook.id,
        },
        data: {
          shelf,
        },
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: "Erro interno" }, { status: 500 })
  }
}