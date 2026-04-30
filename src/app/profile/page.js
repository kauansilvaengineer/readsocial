import Sidebar from "../../components/Sidebar"
import RightPanel from "../../components/RightPanel"

export default function ProfilePage() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 max-w-3xl mx-auto px-8 py-8">
        <div className="rounded-[32px] border border-[#eadfd7] dark:border-[#322622] bg-[#fcfaf8] dark:bg-[#1a1412] p-10">
          <div className="w-24 h-24 rounded-full bg-[#d76f2c] mb-6" />
          <h1 className="text-4xl font-semibold">Kauan Silva Dev</h1>
          <p className="mt-3 opacity-70 max-w-xl">
            Leitor focado em ficção psicológica, fantasia densa e clássicos existenciais.
          </p>

          <div className="grid grid-cols-3 gap-6 mt-10">
            <div>
              <h3 className="text-3xl font-semibold">18</h3>
              <p className="opacity-70">Livros lidos</p>
            </div>
            <div>
              <h3 className="text-3xl font-semibold">11</h3>
              <p className="opacity-70">Notas</p>
            </div>
            <div>
              <h3 className="text-3xl font-semibold">29</h3>
              <p className="opacity-70">Amigos</p>
            </div>
          </div>
        </div>
      </main>
      <RightPanel />
    </div>
  )
}