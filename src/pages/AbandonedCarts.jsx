import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import SummaryCard from '../components/SummaryCard'
import CartTable from '../components/CartTable'
import DrawerDetails from '../components/DrawerDetails'
import FilterModal from '../components/FilterModal'
import Footer from '../components/Footer'
import Toast from '../components/Toast'
import Chart from '../components/Chart'
import { RefreshCw, Download } from 'lucide-react'

const AbandonedCarts = () => {
  const [selectedCart, setSelectedCart] = useState(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)
  const [appliedFilters, setAppliedFilters] = useState({})
  const [toastMessage, setToastMessage] = useState({ type: 'success', message: '' })
  const [isToastVisible, setIsToastVisible] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 150)
  }, [])

  const handleViewDetails = (cart) => {
    setSelectedCart(cart)
    setIsDrawerOpen(true)
  }

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false)
    setSelectedCart(null)
  }

  const showToast = (message) => {
    setToastMessage(message)
    setIsToastVisible(true)
    setTimeout(() => setIsToastVisible(false), 3000)
  }

  const handleSendEmail = (cart) => {
    showToast({ type: 'success', message: `E-mail de recuperação enviado para ${cart.email}` })
  }

  const handleSendSMS = (cart) => {
    showToast({ type: 'info', message: `SMS enviado para ${cart.cliente}` })
  }

  const handleSendWhatsApp = (cart) => {
    showToast({ type: 'success', message: `Mensagem WhatsApp enviada para ${cart.cliente}` })
  }

  const handleCallWhatsApp = (cart) => {
    showToast({ type: 'info', message: `Chamada WhatsApp iniciada para ${cart.cliente}` })
  }

  const handleOpenFilter = () => {
    setIsFilterModalOpen(true)
  }

  const handleApplyFilters = (filters) => {
    console.log('Aplicando filtros:', filters)
    setAppliedFilters(filters)
    setIsFilterModalOpen(false)
  }

  const summaryData = [
    { title: 'Total de carrinhos', value: '5', icon: '🛒' },
    { title: 'Valor total', value: 'R$ 3.879,94', icon: '💰' },
    { title: 'Taxa de recuperação', value: '33,5%', icon: '📈' },
    { title: 'Valor em recuperação', value: 'R$ 0,000', icon: '💰' },
    { title: 'Valor recuperado', value: 'R$ 0,000', icon: '💰' }
  ]

  const chartData = [
    { name: 'Jan', value: 400 },
    { name: 'Fev', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Abr', value: 800 },
    { name: 'Mai', value: 500 }
  ]

  const pieData = [
    { name: 'Novo', value: 2 },
    { name: 'Em recuperação', value: 2 },
    { name: 'Recuperado', value: 1 }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">

      {/* Drawers, Modals, Toasts */}
      <DrawerDetails
        cart={selectedCart}
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
        onSendEmail={handleSendEmail}
        onSendSMS={handleSendSMS}
        onSendWhatsApp={handleSendWhatsApp}
        onCallWhatsApp={handleCallWhatsApp}
      />

      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        onApplyFilters={handleApplyFilters}
      />

      <Footer />
      <Toast
        type={toastMessage.type}
        message={toastMessage.message}
        isVisible={isToastVisible}
        onClose={() => setIsToastVisible(false)}
      />

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideInUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes staggerIn {
            from { opacity: 0; transform: scale(0.98); }
            to { opacity: 1; transform: scale(1); }
          }
          @keyframes bounceIn {
            0% { transform: scale(0.8); opacity: 0; }
            50% { transform: scale(1.05); }
            70% { transform: scale(0.97); }
            100% { transform: scale(1); opacity: 1; }
          }
          button {
            transition: all 0.2s ease;
          }
          button:active {
            transform: scale(0.97);
          }
        `}
      </style>
    </div>
  )
}

export default AbandonedCarts
