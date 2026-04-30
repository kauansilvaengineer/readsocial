import Sidebar from "../components/Sidebar"
import PostComposer from "../components/PostComposer"
import PostCard from "../components/PostCard"

export default function FeedPage() {
  const posts = [
    {
      id: 1,
      user: "Kauan Silva",
      avatar: "K",
      book: "1984",
      text: "Terminei 1984 e sinceramente... Orwell estava assustadoramente certo.",
      likes: 24,
      comments: 8,
      time: "há 2h",
    },
    {
      id: 2,
      user: "Ana Beatriz",
      avatar: "A",
      book: "Dom Casmurro",
      text: "Capitu traiu ou não? preciso de terapia depois desse final.",
      likes: 31,
      comments: 14,
      time: "há 5h",
    },
  ]

  return (
    <div className="grid grid-cols-[260px_1fr] gap-8">
      <Sidebar />

      <section className="flex flex-col gap-6">
        <PostComposer />

        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>
    </div>
  )
}