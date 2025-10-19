import { useState } from "react";
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Users,
  Home,
  ChevronRight,
  ChevronLeft,
  Search,
  Filter,
  Bell,
  DollarSign,
  TrendingUp,
  Clock,
  CheckCircle,
  Eye,
  Mail,
  Download,
  Moon,
  BarChart3,
  MoreVertical
} from "lucide-react";
import { StatsCard } from "@/components/StatsCard";
import CartFiltersContainer from "@/components/CartFiltersContainer";
import { CartDetailsDrawer } from "@/components/CartDetailsDrawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { mockCarts } from "@/data/mockData";
import { toast } from "sonner";

const Index = () => {
  const [selectedCart, setSelectedCart] = useState<any>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const stats = {
    totalCarts: 5,
    totalValue: "R$ 3.879,94",
    recoveryRate: "33,5%",
    inRecoveryValue: "R$ 3.000",
    recoveredValue: "R$ 8.635,98"
  };

  const handleViewDetails = (cart: any) => {
    setSelectedCart(cart);
    setDetailsOpen(true);
  };

  const handleSendEmail = (cart: any) => {
    toast.success("E-mail de recuperação enviado com sucesso!");
  };

  const getStatusBadge = (status: string, statusColor: string) => {
    const variants: Record<string, string> = {
      warning: "bg-yellow-50 text-yellow-700 border-yellow-200 hover:bg-yellow-50",
      info: "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-50",
      success: "bg-green-50 text-green-700 border-yellow-200 hover:bg-green-50"
    };

    return (
      <Badge variant="outline" className={`${variants[statusColor]} text-xs font-medium`}>
        {status}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
                  <rect width="32" height="32" rx="6" fill="url(#logo-gradient)"/>
                  <path d="M9 12L16 8L23 12V20L16 24L9 20V12Z" fill="white" opacity="0.95"/>
                  <defs>
                    <linearGradient id="logo-gradient" x1="0" y1="0" x2="32" y2="32">
                      <stop stopColor="#84cc16"/>
                      <stop offset="1" stopColor="#65a30d"/>
                    </linearGradient>
                  </defs>
                </svg>
                <span className="text-lg font-bold text-foreground">Lynxy</span>
              </div>
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Pesquise por cliente, carrinho..."
                  className="pl-9 pr-4 py-1.5 w-64 text-sm border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="gap-2 text-sm hidden md:flex">
                <TrendingUp className="h-4 w-4" />
                Pontos
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Moon className="h-4 w-4" />
              </Button>
              <div className="flex items-center gap-2 pl-2 border-l">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Crystal" />
                  <AvatarFallback>CS</AvatarFallback>
                </Avatar>
                <div className="text-xs hidden lg:block">
                  <div className="font-medium">Crystal Silva</div>
                  <div className="text-muted-foreground text-[10px]">Administrador</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b bg-card">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-1 overflow-x-auto">
            <Button variant="ghost" size="sm" className="gap-2 rounded-none border-b-2 border-transparent hover:border-transparent text-muted-foreground hover:text-foreground whitespace-nowrap">
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Button>
            <Button variant="ghost" size="sm" className="gap-2 rounded-none border-b-2 border-transparent hover:border-transparent text-muted-foreground hover:text-foreground whitespace-nowrap">
              <ShoppingCart className="h-4 w-4" />
              Checkout
            </Button>
            <Button variant="ghost" size="sm" className="gap-2 rounded-none border-b-2 border-primary text-primary font-medium whitespace-nowrap">
              <Package className="h-4 w-4" />
              Produtos
            </Button>
            <Button variant="ghost" size="sm" className="gap-2 rounded-none border-b-2 border-transparent hover:border-transparent text-muted-foreground hover:text-foreground whitespace-nowrap">
              <Users className="h-4 w-4" />
              Clientes
            </Button>
            <Button variant="ghost" size="sm" className="gap-2 rounded-none border-b-2 border-transparent hover:border-transparent text-muted-foreground hover:text-foreground whitespace-nowrap">
              <BarChart3 className="h-4 w-4" />
              Relatórios
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
          <Home className="h-3.5 w-3.5" />
          <ChevronRight className="h-3.5 w-3.5" />
          <span>Voltar</span>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground font-medium">Carrinhos abandonados</span>
        </div>

        {/* Page Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <ChevronLeft className="h-5 w-5 text-muted-foreground" />
            <h1 className="text-2xl font-bold">Carrinhos abandonados</h1>
          </div>
          <p className="text-sm text-muted-foreground">Visualize as tentativas de compra não finalizadas</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 mb-6">
          <StatsCard
            icon={ShoppingCart}
            title="Total de carrinhos"
            value={stats.totalCarts.toString()}
            iconBg="bg-blue-50"
            iconColor="text-blue-500"
          />
          <StatsCard
            icon={DollarSign}
            title="Valor total"
            value={stats.totalValue}
            iconBg="bg-green-50"
            iconColor="text-green-500"
          />
          <StatsCard
            icon={TrendingUp}
            title="Taxa de Recuperação"
            value={stats.recoveryRate}
            iconBg="bg-purple-50"
            iconColor="text-purple-500"
          />
          <StatsCard
            icon={Clock}
            title="Valor em Recuperação"
            value={stats.inRecoveryValue}
            iconBg="bg-orange-50"
            iconColor="text-orange-500"
          />
          <StatsCard
            icon={CheckCircle}
            title="Valor Recuperado"
            value={stats.recoveredValue}
            iconBg="bg-cyan-50"
            iconColor="text-cyan-500"
          />
        </div>

        {/* Search and Filters */}
        <div className="flex gap-2 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Busque por cliente, e-mail ou ID do carrinho"
              className="pl-10 h-9 text-sm"
            />
          </div>
          <CartFiltersContainer />
          <Button variant="outline" size="sm" className="h-9 w-9 p-0">
            <Download className="h-4 w-4" />
          </Button>
        </div>

        {/* Table */}
        {mockCarts.length > 0 ? (
          <div className="bg-card rounded-xl border overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/30">
                  <tr>
                    <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">Cliente</th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">Itens</th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">Valor</th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">Origem</th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">Status</th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">Data</th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {mockCarts.map((cart, index) => (
                    <tr key={cart.id} className={`border-t hover:bg-muted/20 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-muted/5'}`}>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-9 w-9">
                            <AvatarImage src={cart.customer.avatar} />
                            <AvatarFallback className="text-xs">{cart.customer.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-sm">{cart.customer.name}</p>
                            <p className="text-xs text-muted-foreground">{cart.customer.id}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <div className="flex -space-x-2">
                            {cart.items.slice(0, 2).map((item: any, idx: number) => (
                              <img
                                key={idx}
                                src={item.image}
                                alt={item.name}
                                className="w-8 h-8 rounded border-2 border-card object-cover"
                              />
                            ))}
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {cart.items[0]?.name.length > 15 ? cart.items[0]?.name.substring(0, 15) + '...' : cart.items[0]?.name}
                          </p>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <p className="font-semibold text-sm">{cart.total}</p>
                      </td>
                      <td className="px-4 py-3">
                        <Badge variant="outline" className="text-xs font-normal">{cart.origin}</Badge>
                      </td>
                      <td className="px-4 py-3">
                        {getStatusBadge(cart.status, cart.statusColor)}
                      </td>
                      <td className="px-4 py-3">
                        <p className="text-xs text-muted-foreground">{cart.lastActivity}</p>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex gap-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleViewDetails(cart)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleSendEmail(cart)}
                          >
                            <Mail className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="border-t bg-muted/10 px-4 py-3 flex items-center justify-between">
              <p className="text-xs text-muted-foreground">
                Mostrando 4 de 4-198 carrinhos
              </p>
              <div className="flex gap-1">
                <Button variant="outline" size="sm" className="h-8 w-8 p-0" disabled>
                  <ChevronLeft className="h-3.5 w-3.5" />
                </Button>
                <Button size="sm" className="h-8 w-8 p-0 bg-primary hover:bg-primary/90">1</Button>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">2</Button>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">3</Button>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  <ChevronRight className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-card rounded-xl border p-16 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-64 h-64 flex items-center justify-center">
                <ShoppingCart className="w-32 h-32 text-muted-foreground/20" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Nenhuma tentativa de recuperação ainda</h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Todos os carrinhos de clientes que ainda não receberem uma tentativa aparecerão aqui.
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t mt-12 bg-card">
        <div className="container mx-auto px-6 py-4 text-center">
          <p className="text-xs text-muted-foreground">
            © 2025 Sistema Lynxy/Lunay Brasil. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Modals */}
      <CartDetailsDrawer
        open={detailsOpen}
        onOpenChange={setDetailsOpen}
        cart={selectedCart}
      />
    </div>
  );
};

export default Index;
