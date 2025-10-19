export const mockCarts = [
  {
    id: "CART001",
    customer: {
      name: "Ana Silva",
      email: "ana.silva@email.com",
      phone: "(11) 98765-4321",
      id: "12345678",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana"
    },
    items: [
      {
        name: "Tênis Nike Air Max",
        quantity: 1,
        size: "40",
        price: "R$ 899,97",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400"
      }
    ],
    total: "R$ 899,97",
    origin: "ORGÂNICO",
    status: "Aguardando",
    lastActivity: "2h",
    statusColor: "warning"
  },
  {
    id: "CART002",
    customer: {
      name: "Carlos Santos",
      email: "carlos.s@email.com",
      phone: "(21) 91234-5678",
      id: "23456789",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos"
    },
    items: [
      {
        name: "Camisa Básica",
        quantity: 2,
        size: "M",
        price: "R$ 149,98",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400"
      },
      {
        name: "Calça Jeans",
        quantity: 1,
        size: "42",
        price: "R$ 249,90",
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400"
      }
    ],
    total: "R$ 399,88",
    origin: "ORGÂNICO",
    status: "Em andamento",
    lastActivity: "23min",
    statusColor: "info"
  },
  {
    id: "CART003",
    customer: {
      name: "Maria Oliveira",
      email: "m.oliveira@email.com",
      phone: "(31) 99876-5432",
      id: "34567890",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria"
    },
    items: [
      {
        name: "Mouse Logitech",
        quantity: 1,
        size: "Único",
        price: "R$ 279,98",
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400"
      }
    ],
    total: "R$ 279,98",
    origin: "META ADS",
    status: "Recuperado",
    lastActivity: "35min",
    statusColor: "success"
  },
  {
    id: "CART004",
    customer: {
      name: "João Pedro",
      email: "joao.pedro@email.com",
      phone: "(41) 98888-7777",
      id: "45678901",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Joao"
    },
    items: [
      {
        name: "Headset Gamer",
        quantity: 1,
        size: "Único",
        price: "R$ 499,90",
        image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=400"
      },
      {
        name: "Teclado Mecânico",
        quantity: 1,
        size: "Único",
        price: "R$ 699,00",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400"
      }
    ],
    total: "R$ 1.198,90",
    origin: "GOOGLE ADS",
    status: "Em andamento",
    lastActivity: "1d",
    statusColor: "info"
  }
];
