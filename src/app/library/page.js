import Sidebar from "../../components/Sidebar"
import RightPanel from "../../components/RightPanel"

export default function LibraryPage() {
  const books = ["1984", "Flores para Algernon", "O Hobbit", "A Revolução dos Bichos", "Duna"]

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 max-w-3xl mx-auto px-8 py-8">
        <h1 className="text-5xl font-semibold mb-8">Minha Biblioteca</h1>

        <div className="grid grid-cols-2 gap-6">
          {books.map((book) => (
            <div
              key={book}
              className="rounded-[28px] border border-[#eadfd7] dark:border-[#322622] bg-[#fcfaf8] dark:bg-[#1a1412] p-8"
            >
              <div className="h-40 rounded-2xl bg-[#d76f2c] mb-4" />
              <h3 className="text-xl font-medium">{book}</h3>
              <p className="text-sm opacity-70 mt-2">Lendo atualmente</p>
            </div>
          ))}
        </div>
      </main>
      <RightPanel />
    </div>
  )
}