import React from 'react'
import { X, Mail, MessageSquare, Phone, Clock } from 'lucide-react'

const DrawerDetails = ({ cart, isOpen, onClose, onSendEmail, onSendSMS, onSendWhatsApp, onCallWhatsApp }) => {
  if (!isOpen || !cart) return null

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black bg-opacity-50">
      <div className="w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 ease-in-out">
        <div className="p-6 h-full overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Detalhes do Carrinho</h2>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-4 mb-4">
              <img src={cart.clienteImg} alt={cart.cliente} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{cart.cliente}</h3>
                <p className="text-sm text-gray-600">ID: {cart.clienteId}</p>
              </div>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <p><strong>E-mail:</strong> {cart.email}</p>
              <p><strong>Telefone:</strong> (11) 99999-9999</p>
              <p><strong>Data:</strong> {new Date(cart.data).toLocaleDateString('pt-BR')}</p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold mb-3 text-gray-900">Itens do Carrinho</h4>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <img src={cart.itemImg} alt={cart.item} className="w-12 h-12 rounded-lg object-cover" />
                  <span className="font-medium text-gray-900">{cart.item}</span>
                </div>
                <span className="font-semibold text-gray-900">{cart.valor}</span>
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>{cart.valor}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Frete</span>
                  <span>R$ 0,00</span>
                </div>
                <div className="border-t border-gray-300 pt-2 flex justify-between font-semibold text-gray-900">
                  <span>Total</span>
                  <span>{cart.valor}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold mb-3 text-gray-900">Informações</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Origem:</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">{cart.origem}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Status:</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  cart.status === 'Novo' ? 'bg-blue-100 text-blue-800' :
                  cart.status === 'Em recuperação' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {cart.status}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Tempo de abandono:</span>
                <div className="flex items-center gap-1 text-orange-600">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs font-medium">23 minutos</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => onSendEmail(cart)}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4" />
              Enviar E-mail de Recuperação
            </button>
            <button
              onClick={() => onSendSMS(cart)}
              className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-200 transition-all duration-200 hover:shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              Enviar SMS
            </button>
            <button
              onClick={() => onSendWhatsApp(cart)}
              className="w-full bg-green-100 text-green-700 py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-green-200 transition-all duration-200 hover:shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              Enviar WhatsApp
            </button>
            <button
              onClick={() => onCallWhatsApp(cart)}
              className="w-full bg-green-100 text-green-700 py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-green-200 transition-all duration-200 hover:shadow-md"
            >
              <Phone className="w-4 h-4" />
              Ligar WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DrawerDetails
