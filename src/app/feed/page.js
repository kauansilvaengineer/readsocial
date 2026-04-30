export default function FeedPage() {
  const posts = [
    {
      id: 1,
      user: "Ana Martins",
      avatar: "A",
      book: "1984",
      content:
        "Terminei hoje 1984 e fiquei impressionada como Orwell continua atual. A sensação de vigilância constante no livro é sufocante.",
      likes: 18,
      comments: 4,
      time: "há 12 min",
    },
    {
      id: 2,
      user: "Lucas Ribeiro",
      avatar: "L",
      book: "Dom Casmurro",
      content:
        "Cada releitura me faz desconfiar de Capitu de um jeito diferente. Machado realmente brinca com a nossa percepção.",
      likes: 31,
      comments: 9,
      time: "há 34 min",
    },
    {
      id: 3,
      user: "Fernanda Souza",
      avatar: "F",
      book: "A Revolução dos Bichos",
      content:
        "É assustador como um livro tão curto consegue condensar uma crítica política tão poderosa.",
      likes: 22,
      comments: 7,
      time: "há 1 h",
    },
  ]

  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-6">
      <div className="bg-white border border-[#e8e6df] rounded-3xl p-6 shadow-sm">
        <h1 className="text-3xl font-semibold tracking-tight text-[#1f1f1c]">
          Feed de Leituras
        </h1>
        <p className="text-[#6b665c] mt-2">
          Descubra o que outros leitores estão pensando.
        </p>
      </div>

      {posts.map((post) => (
        <article
          key={post.id}
          className="bg-white border border-[#e8e6df] rounded-3xl p-6 shadow-sm hover:shadow-md transition-all"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 rounded-full bg-[#d9d3c7] flex items-center justify-center font-semibold text-[#403b33]">
              {post.avatar}
            </div>

            <div>
              <h2 className="font-medium text-[#1f1f1c]">{post.user}</h2>
              <p className="text-sm text-[#7b756a]">
                lendo <span className="italic">{post.book}</span> • {post.time}
              </p>
            </div>
          </div>

          <p className="text-[15px] leading-7 text-[#2e2a26] mb-5">
            {post.content}
          </p>

          <div className="flex gap-6 text-sm text-[#7b756a]">
            <button className="hover:text-black transition-colors">
              ❤️ {post.likes}
            </button>
            <button className="hover:text-black transition-colors">
              💬 {post.comments}
            </button>
            <button className="hover:text-black transition-colors">
              ↗ Compartilhar
            </button>
          </div>
        </article>
      ))}
    </div>
  )
}