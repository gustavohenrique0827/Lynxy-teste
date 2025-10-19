import React, { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";

export default function FilterModal({ isOpen = false, onClose, onApplyFilters }) {
  const [produto, setProduto] = useState("");
  const [metodoPagamento, setMetodoPagamento] = useState("");
  const [status, setStatus] = useState([]);
  const [origemUtm, setOrigemUtm] = useState("");
  const [origem, setOrigem] = useState("");
  const [periodo, setPeriodo] = useState({ inicio: "", fim: "" });
  const [valorMin, setValorMin] = useState("");
  const [valorMax, setValorMax] = useState("");
  const [cliente, setCliente] = useState("");
  const [errors, setErrors] = useState({});

  const toggleStatus = (s) => {
    setStatus((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));
  };

  const handleClear = () => {
    setProduto("");
    setMetodoPagamento("");
    setStatus([]);
    setOrigemUtm("");
    setOrigem("");
    setPeriodo({ inicio: "", fim: "" });
    setValorMin("");
    setValorMax("");
    setCliente("");
    setErrors({});
  };

  const handleApply = () => {
    const newErrors = {};
    if (periodo.inicio && periodo.fim && new Date(periodo.fim) < new Date(periodo.inicio)) {
      newErrors.periodo = "Data de fim deve ser posterior à data de início.";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      onApplyFilters({ produto, metodoPagamento, status, origemUtm, origem, periodo, valorMin, valorMax, cliente });
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-md w-[95%] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl 
                   max-h-[85vh] overflow-y-auto animate-in fade-in-50 zoom-in-90 duration-200"
      >
        <DialogHeader>
          <DialogTitle className="text-lg font-bold text-gray-900 dark:text-gray-100">
            Filtrar resultados
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-500 dark:text-gray-400">
            Use os filtros abaixo para refinar os resultados dos carrinhos abandonados.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-5 mt-3">
          {/* Produto */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Produto</label>
            <Select value={produto} onValueChange={setProduto}>
              <SelectTrigger className="w-full h-10 border-gray-300 dark:border-gray-700 focus:ring-blue-500">
                <SelectValue placeholder="Selecione o nome do produto ou código interno" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Todos os produtos</SelectItem>
                <SelectItem value="Tênis Nike Air Max">Tênis Nike Air Max</SelectItem>
                <SelectItem value="Samsung A2">Samsung A2</SelectItem>
                <SelectItem value="Tênis Adidas">Tênis Adidas</SelectItem>
                <SelectItem value="Fone Apple">Fone Apple</SelectItem>
                <SelectItem value="Camiseta Básica">Camiseta Básica</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Método de pagamento */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Método de pagamento</label>
            <Select value={metodoPagamento} onValueChange={setMetodoPagamento}>
              <SelectTrigger className="w-full h-10 border-gray-300 dark:border-gray-700 focus:ring-blue-500">
                <SelectValue placeholder="Todos" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Todos</SelectItem>
                <SelectItem value="Cartão de crédito">Cartão de crédito</SelectItem>
                <SelectItem value="Pix">Pix</SelectItem>
                <SelectItem value="Boleto">Boleto</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Status do carrinho</label>
            <div className="space-y-2 bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
              {["Aguardando", "Em andamento", "Recuperado"].map((s) => (
                <div key={s} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={`status-${s}`}
                    checked={status.includes(s)}
                    onChange={() => toggleStatus(s)}
                    className="w-4 h-4 accent-blue-600 cursor-pointer"
                  />
                  <label htmlFor={`status-${s}`} className="text-sm text-gray-700 dark:text-gray-300">
                    {s}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Origem */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Origem tráfego / UTM</label>
            <input
              type="text"
              value={origemUtm}
              onChange={(e) => setOrigemUtm(e.target.value)}
              placeholder="Digite o nome da origem ou UTM"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-900"
            />
          </div>

          {/* Cliente */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Cliente</label>
            <input
              type="text"
              value={cliente}
              onChange={(e) => setCliente(e.target.value)}
              placeholder="Digite o nome do cliente"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-900"
            />
          </div>

          {/* Valor */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Valor (R$)</label>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="valorMin" className="text-xs text-gray-500 dark:text-gray-400 block mb-1">Mínimo</label>
                <input
                  id="valorMin"
                  type="number"
                  value={valorMin}
                  onChange={(e) => setValorMin(e.target.value)}
                  placeholder="0,00"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg 
                             focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-900"
                />
              </div>
              <div>
                <label htmlFor="valorMax" className="text-xs text-gray-500 dark:text-gray-400 block mb-1">Máximo</label>
                <input
                  id="valorMax"
                  type="number"
                  value={valorMax}
                  onChange={(e) => setValorMax(e.target.value)}
                  placeholder="9999,99"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg 
                             focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-900"
                />
              </div>
            </div>
          </div>

          {/* Período */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Período</label>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="inicio" className="text-xs text-gray-500 dark:text-gray-400 block mb-1">Início</label>
                <input
                  id="inicio"
                  type="date"
                  value={periodo.inicio}
                  onChange={(e) => setPeriodo((p) => ({ ...p, inicio: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg 
                             focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-900"
                />
              </div>
              <div>
                <label htmlFor="fim" className="text-xs text-gray-500 dark:text-gray-400 block mb-1">Fim</label>
                <input
                  id="fim"
                  type="date"
                  value={periodo.fim}
                  onChange={(e) => setPeriodo((p) => ({ ...p, fim: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg 
                             focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-900"
                />
              </div>
            </div>
            {errors.periodo && <p className="text-red-500 text-sm mt-1">{errors.periodo}</p>}
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex justify-end gap-3 sticky bottom-0 bg-white dark:bg-gray-900 py-2">
          <button
            onClick={handleClear}
            className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg 
                       text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 
                       transition-all"
          >
            Limpar
          </button>
          <button
            onClick={handleApply}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg 
                       shadow-sm transition-all"
          >
            Aplicar Filtros
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
