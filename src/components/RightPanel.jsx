export default function RightPanel() {
  return (
    <aside className="w-[290px] min-h-screen px-4 py-8">
      <div className="bg-[#fcfaf8] border border-[#eadfd7] rounded-[28px] p-5 mb-6">
        <p className="text-sm text-[#9b7d70]">Meta anual</p>
        <h2 className="text-5xl font-semibold text-[#2f211d] mt-2">18 / 40</h2>
        <p className="text-sm text-[#8a6f63] mt-2">45% concluído</p>
      </div>

      <div className="bg-[#fcfaf8] border border-[#eadfd7] rounded-[28px] p-5 mb-6">
        <p className="text-sm text-[#9b7d70] mb-3">Sugestões para você</p>
        <ul className="space-y-2 text-[#46332d]">
          <li>• O Nome do Vento</li>
          <li>• Flores para Algernon</li>
          <li>• A Revolução dos Bichos</li>
        </ul>
      </div>

      <div className="bg-[#fcfaf8] border border-[#eadfd7] rounded-[28px] p-5">
        <p className="text-sm text-[#9b7d70] mb-3">Atividade</p>
        <p className="text-[#46332d] text-sm leading-7">
          Você publicou 11 notas este mês e adicionou 4 livros à biblioteca.
        </p>
      </div>
    </aside>
  )
}