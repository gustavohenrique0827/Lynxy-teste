import React, { useState, useMemo } from "react";
import { Eye, Mail, CreditCard } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

const MOCK = [
  { id: 1, cliente: "Ana Silva", clienteId: "733735937a", email:"ana.silva@email.com", clienteImg:"https://randomuser.me/api/portraits/women/1.jpg", item:"Tênis Nike Air Max", itemImg:"https://images.unsplash.com/photo-1549298916-b41d501d3772?w=60&h=60&fit=crop", valor:"R$ 399,97", origem:"WEBSITE", status:"Aguardando", data:"2024-01-15", metodoPagamento:"Cartão de crédito" },
  { id: 2, cliente: "Carlos Santos", clienteId: "0871343719", email:"carlos.santos@email.com", clienteImg:"https://randomuser.me/api/portraits/men/2.jpg", item:"Samsung A2", itemImg:"https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=60&h=60&fit=crop", valor:"R$ 599,99", origem:"ORGÂNICO", status:"Em andamento", data:"2024-01-14", metodoPagamento:"Pix" },
  { id: 3, cliente: "Maria Oliveira", clienteId: "333444555", email:"maria.oliveira@email.com", clienteImg:"https://randomuser.me/api/portraits/women/3.jpg", item:"Tênis Adidas", itemImg:"https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=60&h=60&fit=crop", valor:"R$ 2.579,98", origem:"MÍDIAS", status:"Recuperado", data:"2024-01-13", metodoPagamento:"Boleto" },
  { id: 4, cliente: "João Pedro", clienteId: "555666777", email:"joao.pedro@email.com", clienteImg:"https://randomuser.me/api/portraits/men/4.jpg", item:"Fone Apple", itemImg:"https://images.unsplash.com/photo-1484704849700-f032a568e944?w=60&h=60&fit=crop", valor:"R$ 1.199,00", origem:"SOCIAL MÍDIA", status:"Em andamento", data:"2024-01-12", metodoPagamento:"Cartão de crédito" },
  { id: 5, cliente: "Lucas Souza", clienteId: "999888777", email:"lucas.souza@email.com", clienteImg:"https://randomuser.me/api/portraits/men/5.jpg", item:"Camiseta Básica", itemImg:"https://images.unsplash.com/photo-1520975918316-8fba9b9df0f6?w=60&h=60&fit=crop", valor:"R$ 79,90", origem:"WEBSITE", status:"Aguardando", data:"2024-01-10", metodoPagamento:"Pix" }
];

export default function CartTable({ onOpenFilter, onViewDetails, onSendEmail, appliedFilters = {} }) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  const filtered = useMemo(() => {
    return MOCK.filter(c => {
      const s = search.toLowerCase();
      if (s && !(
        c.cliente.toLowerCase().includes(s) ||
        c.email.toLowerCase().includes(s) ||
        c.item.toLowerCase().includes(s) ||
        c.clienteId.includes(s)
      )) return false;

      // filtros de produto
      if (appliedFilters.produto && appliedFilters.produto !== c.item) return false;

      // filtros de método de pagamento
      if (appliedFilters.metodoPagamento && appliedFilters.metodoPagamento !== c.metodoPagamento) return false;

      // filtros de status
      if (appliedFilters.status && appliedFilters.status.length && !appliedFilters.status.includes(c.status)) return false;

      // filtros de origem UTM
      if (appliedFilters.origemUtm && !c.origem.toLowerCase().includes(appliedFilters.origemUtm.toLowerCase())) return false;

      // filtros de cliente
      if (appliedFilters.cliente && !c.cliente.toLowerCase().includes(appliedFilters.cliente.toLowerCase())) return false;

      // filtros de valor mínimo
      if (appliedFilters.valorMin && parseFloat(c.valor.replace('R$ ', '').replace(',', '.')) < parseFloat(appliedFilters.valorMin)) return false;

      // filtros de valor máximo
      if (appliedFilters.valorMax && parseFloat(c.valor.replace('R$ ', '').replace(',', '.')) > parseFloat(appliedFilters.valorMax)) return false;

      // filtros de período
      if (appliedFilters.periodo && appliedFilters.periodo.inicio && appliedFilters.periodo.fim) {
        const cartDate = new Date(c.data);
        const start = new Date(appliedFilters.periodo.inicio);
        const end = new Date(appliedFilters.periodo.fim);
        if (cartDate < start || cartDate > end) return false;
      }

      return true;
    });
  }, [search, appliedFilters]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / itemsPerPage));
  const pageItems = filtered.slice((page-1)*itemsPerPage, page*itemsPerPage);

  const statusClass = (s) => {
    if (s === "Aguardando") return "bg-blue-50 text-blue-700";
    if (s === "Em andamento") return "bg-yellow-50 text-yellow-700";
    if (s === "Recuperado") return "bg-green-50 text-green-700";
    return "bg-gray-50 text-gray-700";
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <div className="text-sm text-gray-500">Total de carrinhos</div>
          <div className="font-semibold text-lg">{MOCK.length}</div>
        </div>

        <div className="flex items-center gap-3">
          <input
            value={search}
            onChange={(e)=>{ setSearch(e.target.value); setPage(1); }}
            placeholder="Buscar por cliente, e-mail ou ID..."
            className="px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 outline-none transition"
          />
          <button onClick={onOpenFilter} className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 transition-all duration-200">Filtrar</button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-xs text-gray-500 uppercase bg-gray-50">
            <tr>
              <th className="py-4 px-4 text-left font-semibold">Cliente</th>
              <th className="py-4 px-4 text-left font-semibold">Itens</th>
              <th className="py-4 px-4 text-left font-semibold">Valor</th>
              <th className="py-4 px-4 text-left font-semibold">Origem</th>
              <th className="py-4 px-4 text-left font-semibold">Status</th>
              <th className="py-4 px-4 text-left font-semibold">Data</th>
              <th className="py-4 px-4 text-right font-semibold">Ações</th>
            </tr>
          </thead>
          <tbody>
            {pageItems.length === 0 && (
              <tr>
                <td colSpan="7" className="py-14 text-center text-gray-400">
                  Nenhuma tentativa de recuperação ainda
                </td>
              </tr>
            )}
            {pageItems.map(cart => (
              <tr key={cart.id} className="border-t hover:bg-gray-50 transition-colors duration-150">
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <img src={cart.clienteImg} alt="" className="w-10 h-10 rounded-full object-cover border-2 border-gray-200" />
                    <div>
                      <div className="font-medium text-gray-900">{cart.cliente}</div>
                      <div className="text-xs text-gray-500">{cart.email}</div>
                      <div className="text-xs text-gray-400">ID: {cart.clienteId}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <img src={cart.itemImg} alt="" className="w-12 h-12 rounded-lg object-cover border border-gray-200" />
                    <div className="text-gray-700 font-medium">{cart.item}</div>
                  </div>
                </td>
                <td className="py-4 px-4 font-semibold text-gray-900">{cart.valor}</td>
                <td className="py-4 px-4 text-xs text-gray-500 font-medium">{cart.origem}</td>
                <td className="py-4 px-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusClass(cart.status)}`}>{cart.status}</span>
                </td>
                <td className="py-4 px-4 text-gray-500 font-medium">{new Date(cart.data).toLocaleDateString('pt-BR')}</td>
                <td className="py-4 px-4 text-right">
                  <div className="inline-flex gap-2">
                    <button title="Ver detalhes" onClick={() => onViewDetails(cart)} className="p-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 transition-colors duration-200">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button title="Enviar e-mail" onClick={() => onSendEmail(cart)} className="p-2 rounded-lg bg-green-50 hover:bg-green-100 text-green-600 transition-colors duration-200">
                      <Mail className="w-4 h-4" />
                    </button>
                    <Select value={cart.metodoPagamento} onValueChange={(value) => console.log(`Mudar método de pagamento para ${value} no carrinho ${cart.id}`)}>
                      <SelectTrigger className="w-32 h-8 text-xs">
                        <CreditCard className="w-3 h-3 mr-1" />
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Cartão de crédito">Cartão</SelectItem>
                        <SelectItem value="Pix">Pix</SelectItem>
                        <SelectItem value="Boleto">Boleto</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer - Paginação */}
      <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
        <div>Mostrando {(page-1)*itemsPerPage + 1}-{Math.min(page*itemsPerPage, filtered.length)} de {filtered.length}</div>
        <div className="flex gap-2">
          {Array.from({length: totalPages}).map((_,i)=>(
            <button key={i} onClick={()=>setPage(i+1)} className={`px-3 py-1 rounded-md border ${page===i+1 ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-200 hover:bg-gray-50'}`}>{i+1}</button>
          ))}
        </div>
      </div>
    </div>
  );
}
