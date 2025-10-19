import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { X, Calendar, DollarSign, User, MapPin, Tag } from "lucide-react";

interface CartFiltersProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;

  produto: string;
  setProduto: (value: string) => void;

  metodoPagamento: string;
  setMetodoPagamento: (value: string) => void;

  status: string[];
  toggleStatus: (status: string) => void;

  origemUtm: string;
  setOrigemUtm: (value: string) => void;

  origem: string;
  setOrigem: (value: string) => void;

  periodo: { inicio: string; fim: string };
  setPeriodo: (value: { inicio: string; fim: string }) => void;

  valorMin: string;
  setValorMin: (value: string) => void;

  valorMax: string;
  setValorMax: (value: string) => void;

  cliente: string;
  setCliente: (value: string) => void;

  onClear: () => void;
  onApply: () => void;
}

export const CartFilters = ({
  open,
  onOpenChange,
  produto,
  setProduto,
  metodoPagamento,
  setMetodoPagamento,
  status,
  toggleStatus,
  origemUtm,
  setOrigemUtm,
  origem,
  setOrigem,
  periodo,
  setPeriodo,
  valorMin,
  setValorMin,
  valorMax,
  setValorMax,
  cliente,
  setCliente,
  onClear,
  onApply,
}: CartFiltersProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Tag className="h-5 w-5" />
            Filtros Avançados
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Produto */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Tag className="h-4 w-4" />
              Produto
            </Label>
            <Select value={produto} onValueChange={setProduto}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o nome do produto ou código interno" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos os produtos</SelectItem>
                <SelectItem value="produto1">Produto 1</SelectItem>
                <SelectItem value="produto2">Produto 2</SelectItem>
                <SelectItem value="produto3">Produto 3</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Método de Pagamento */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              Método de pagamento
            </Label>
            <RadioGroup value={metodoPagamento} onValueChange={setMetodoPagamento}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="todos" id="all" />
                <Label htmlFor="all" className="font-normal cursor-pointer">Todos</Label>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Cartão de crédito", "Pix", "Boleto"].map((method) => (
                  <Badge
                    key={method}
                    variant={metodoPagamento === method ? "default" : "outline"}
                    className="cursor-pointer hover:bg-primary/10"
                    onClick={() => setMetodoPagamento(metodoPagamento === method ? "" : method)}
                  >
                    {method}
                    {metodoPagamento === method && <X className="ml-1 h-3 w-3" />}
                  </Badge>
                ))}
              </div>
            </RadioGroup>
          </div>

          {/* Status do Carrinho */}
          <div className="space-y-2">
            <Label>Status do carrinho</Label>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "Aguardando", color: "bg-yellow-100 text-yellow-800 border-yellow-200" },
                { label: "Em andamento", color: "bg-blue-100 text-blue-800 border-blue-200" },
                { label: "Recuperado", color: "bg-green-100 text-green-800 border-green-200" }
              ].map(({ label, color }) => (
                <Badge
                  key={label}
                  variant={status.includes(label) ? "default" : "outline"}
                  className={`cursor-pointer hover:bg-primary/10 ${status.includes(label) ? color : ""}`}
                  onClick={() => toggleStatus(label)}
                >
                  {label}
                </Badge>
              ))}
            </div>
          </div>

          {/* Origem Tráfego / UTM */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Origem tráfego / UTM
            </Label>
            <Input
              type="text"
              value={origemUtm}
              onChange={(e) => setOrigemUtm(e.target.value)}
              placeholder="Digite o nome da origem, UTM ou outro atributo"
            />
          </div>

          {/* Origem */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Origem
            </Label>
            <Input
              type="text"
              value={origem}
              onChange={(e) => setOrigem(e.target.value)}
              placeholder="Digite a origem"
            />
          </div>

          {/* Período */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Período
            </Label>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label className="text-xs text-muted-foreground">Data inicial</Label>
                <Input
                  type="date"
                  value={periodo.inicio}
                  onChange={(e) => setPeriodo({ ...periodo, inicio: e.target.value })}
                />
              </div>
              <div>
                <Label className="text-xs text-muted-foreground">Data final</Label>
                <Input
                  type="date"
                  value={periodo.fim}
                  onChange={(e) => setPeriodo({ ...periodo, fim: e.target.value })}
                />
              </div>
            </div>
          </div>

          {/* Valores */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Valor Mínimo (R$)
              </Label>
              <Input
                type="number"
                value={valorMin}
                onChange={(e) => setValorMin(e.target.value)}
                placeholder="0,00"
              />
            </div>
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Valor Máximo (R$)
              </Label>
              <Input
                type="number"
                value={valorMax}
                onChange={(e) => setValorMax(e.target.value)}
                placeholder="9999,99"
              />
            </div>
          </div>

          {/* Cliente */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Cliente
            </Label>
            <Input
              type="text"
              value={cliente}
              onChange={(e) => setCliente(e.target.value)}
              placeholder="Digite o nome do cliente"
            />
          </div>
        </div>

        <DialogFooter className="gap-2 border-t pt-4">
          <Button variant="outline" onClick={onClear}>
            Limpar Filtros
          </Button>
          <Button onClick={onApply}>
            Aplicar Filtros
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
