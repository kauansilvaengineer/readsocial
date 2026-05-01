import Sidebar from "../../components/Sidebar"
import RightPanel from "../../components/RightPanel"
import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"
import ProfileClient from "../../components/ProfileClient"

export default async function ProfilePage() {
  const session = await auth()

  if (!session?.user?.email) {
    return <div className="p-10">Faça login.</div>
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: {
      books: {
        include: {
          book: true,
        },
      },
      posts: true,
      followers: true,
    },
  })

  const reading = user.books.filter((b) => b.shelf === "READING")
  const read = user.books.filter((b) => b.shelf === "READ")
  const want = user.books.filter((b) => b.shelf === "WANT_TO_READ")

  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 max-w-4xl mx-auto px-8 py-8">
        <ProfileClient
          user={user}
          reading={reading}
          read={read}
          want={want}
        />
      </main>

      <RightPanel />
    </div>
  )
}