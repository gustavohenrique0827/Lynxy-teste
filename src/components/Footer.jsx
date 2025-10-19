import React from 'react'

const Footer = () => (
  <footer className="bg-gradient-to-r from-gray-50 to-white border-t border-gray-200 mt-12">
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">DropMais</h3>
          <p className="text-gray-600 text-sm">
            Plataforma completa para gestão de vendas e recuperação de carrinhos abandonados.
          </p>
        </div>
        <div>
          <h4 className="font-medium text-gray-900 mb-4">Produtos</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-gray-900 transition-colors duration-200">Checkout</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors duration-200">Recuperação</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors duration-200">Analytics</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors duration-200">Integrações</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-gray-900 mb-4">Suporte</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-gray-900 transition-colors duration-200">Central de Ajuda</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors duration-200">Documentação</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors duration-200">Contato</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors duration-200">Status</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-gray-900 mb-4">Empresa</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-gray-900 transition-colors duration-200">Sobre nós</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors duration-200">Blog</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors duration-200">Carreiras</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors duration-200">Imprensa</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-600 text-sm">© 2024 DropMais. Todos os direitos reservados.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200">Privacidade</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200">Termos</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
