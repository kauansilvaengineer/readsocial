import Sidebar from "../../components/Sidebar"
import RightPanel from "../../components/RightPanel"

export default function ExplorePage() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 max-w-3xl mx-auto px-8 py-8">
        <h1 className="text-5xl font-semibold mb-8">Explorar</h1>

        <div className="space-y-6">
          {["Livros em alta", "Autores recomendados", "Clássicos literários"].map((item) => (
            <div
              key={item}
              className="rounded-[28px] border border-[#eadfd7] dark:border-[#322622] bg-[#fcfaf8] dark:bg-[#1a1412] p-8"
            >
              <h2 className="text-2xl font-medium">{item}</h2>
              <p className="mt-3 opacity-70">Descobertas selecionadas para expandir seu repertório.</p>
            </div>
          ))}
        </div>
      </main>
      <RightPanel />
    </div>
  )
}