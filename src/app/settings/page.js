import Sidebar from "../../components/Sidebar"
import RightPanel from "../../components/RightPanel"

export default function SettingsPage() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 max-w-3xl mx-auto px-8 py-8">
        <div className="rounded-[32px] border border-[#eadfd7] dark:border-[#322622] bg-[#fcfaf8] dark:bg-[#1a1412] p-10">
          <h1 className="text-4xl font-semibold mb-8">Configurações</h1>

          <div className="space-y-6 text-lg">
            <p>• Editar perfil</p>
            <p>• Preferências de leitura</p>
            <p>• Privacidade</p>
            <p>• Notificações</p>
          </div>
        </div>
      </main>
      <RightPanel />
    </div>
  )
}