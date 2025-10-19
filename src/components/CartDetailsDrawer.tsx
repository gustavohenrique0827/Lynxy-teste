import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Mail, MessageSquare, Phone } from "lucide-react";
import { toast } from "sonner";

interface CartDetailsDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  cart: any;
}

export const CartDetailsDrawer = ({ open, onOpenChange, cart }: CartDetailsDrawerProps) => {
  if (!cart) return null;

  const handleSendEmail = () => {
    toast.success("E-mail de recuperação enviado com sucesso!");
    onOpenChange(false);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Detalhes do Carrinho</SheetTitle>
        </SheetHeader>

        <div className="space-y-6 py-6">
          {/* Customer Info */}
          <div className="space-y-4">
            <h3 className="font-semibold flex items-center gap-2">
              <span>👤</span> Informações do Cliente
            </h3>
            <div className="flex items-start gap-3">
              <Avatar>
                <AvatarImage src={cart.customer.avatar} />
                <AvatarFallback>{cart.customer.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="space-y-1 text-sm">
                <p className="font-medium">{cart.customer.name}</p>
                <p className="text-muted-foreground">{cart.customer.email}</p>
                <p className="text-muted-foreground">{cart.customer.phone}</p>
                <p className="text-muted-foreground text-xs">ID: {cart.customer.id}</p>
              </div>
            </div>
          </div>

          {/* Cart Items */}
          <div className="space-y-4">
            <h3 className="font-semibold flex items-center gap-2">
              <span>🛒</span> Itens do Carrinho
            </h3>
            <div className="space-y-3">
              {cart.items.map((item: any, index: number) => (
                <div key={index} className="flex gap-3 p-3 bg-muted rounded-lg">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-16 h-16 rounded object-cover"
                  />
                  <div className="flex-1 space-y-1">
                    <p className="font-medium text-sm">{item.name}</p>
                    <p className="text-xs text-muted-foreground">
                      Qtd: {item.quantity} • Tam: {item.size}
                    </p>
                    <p className="font-semibold text-sm">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center pt-3 border-t">
              <span className="font-semibold">Total:</span>
              <span className="font-bold text-lg">{cart.total}</span>
            </div>
          </div>

          {/* Last Activity */}
          <div className="space-y-2">
            <h3 className="font-semibold flex items-center gap-2">
              <span>🕐</span> Última atividade
            </h3>
            <div className="p-3 bg-muted rounded-lg space-y-1">
              <p className="text-sm text-muted-foreground">Contato realizado</p>
              <p className="text-xs text-muted-foreground">
                Contato realizado às 13:02:20 do dia 30/12/2024, por meio do e-mail
              </p>
              <Badge variant="outline" className="mt-2">
                {cart.status}
              </Badge>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2 pt-4">
            <Button 
              className="w-full justify-start gap-2" 
              size="lg"
              onClick={handleSendEmail}
            >
              <Mail className="h-4 w-4" />
              Enviar Email de Recuperação
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2" size="lg">
              <MessageSquare className="h-4 w-4" />
              Enviar SMS
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2" size="lg">
              <Phone className="h-4 w-4" />
              Chamar via WhatsApp
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
