import React, { useState } from "react";
import { CartFilters } from "./CartFilters";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

const CartFiltersContainer = () => {
  // Dialog open state
  const [isOpen, setIsOpen] = useState(false);

  // Filter states
  const [produto, setProduto] = useState("");
  const [metodoPagamento, setMetodoPagamento] = useState("");
  const [status, setStatus] = useState([]);
  const [origemUtm, setOrigemUtm] = useState("");
  const [origem, setOrigem] = useState("");
  const [periodo, setPeriodo] = useState({ inicio: "", fim: "" });
  const [valorMin, setValorMin] = useState("");
  const [valorMax, setValorMax] = useState("");
  const [cliente, setCliente] = useState("");

  // Handlers for status toggle (multi-select)
  const toggleStatus = (s) => {
    setStatus((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));
  };

  // Clear all filters
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
  };

  // Apply filters (for example, could trigger a fetch or callback)
  const handleApply = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        className="h-9 w-9 p-0"
        onClick={() => setIsOpen(true)}
      >
        <Filter className="h-4 w-4" />
      </Button>

      <CartFilters
        open={isOpen}
        onOpenChange={setIsOpen}
        produto={produto}
        setProduto={setProduto}
        metodoPagamento={metodoPagamento}
        setMetodoPagamento={setMetodoPagamento}
        status={status}
        toggleStatus={toggleStatus}
        origemUtm={origemUtm}
        setOrigemUtm={setOrigemUtm}
        origem={origem}
        setOrigem={setOrigem}
        periodo={periodo}
        setPeriodo={setPeriodo}
        valorMin={valorMin}
        setValorMin={setValorMin}
        valorMax={valorMax}
        setValorMax={setValorMax}
        cliente={cliente}
        setCliente={setCliente}
        onClear={handleClear}
        onApply={handleApply}
      />
    </>
  );
};

export default CartFiltersContainer;
