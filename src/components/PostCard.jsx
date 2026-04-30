"use client"

import { useState } from "react"

export default function PostCard({ post }) {
  const [likes, setLikes] = useState(post.likes)
  const [liked, setLiked] = useState(false)

  function handleLike() {
    if (liked) {
      setLikes(likes - 1)
    } else {
      setLikes(likes + 1)
    }

    setLiked(!liked)
  }

  return (
    <article className="bg-white border border-[#e8e6df] rounded-3xl p-6 shadow-sm hover:shadow-md transition-all">
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
        <button
          onClick={handleLike}
          className={`${liked ? "text-black" : ""} hover:text-black transition-colors`}
        >
          ❤️ {likes}
        </button>

        <button className="hover:text-black transition-colors">
          💬 {post.comments}
        </button>

        <button className="hover:text-black transition-colors">
          ↗ Compartilhar
        </button>
      </div>
    </article>
  )
}