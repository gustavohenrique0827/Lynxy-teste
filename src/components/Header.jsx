import React from 'react'
import { Moon, Sun, Bell, User } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const Header = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800 shadow-lg py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md">
            <span className="text-blue-600 font-bold text-lg">D</span>
          </div>
          <h1 className="text-xl font-bold text-white">DropMais</h1>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-white/90 hover:text-white transition-colors duration-200 font-medium hover:scale-105 transform">Dashboard</a>
          <a href="#" className="text-white/90 hover:text-white transition-colors duration-200 font-medium hover:scale-105 transform">Vendas</a>
          <a href="#" className="text-white/90 hover:text-white transition-colors duration-200 font-medium hover:scale-105 transform">Carrinhos</a>
          <a href="#" className="text-white/90 hover:text-white transition-colors duration-200 font-medium hover:scale-105 transform">Clientes</a>
          <a href="#" className="text-white/90 hover:text-white transition-colors duration-200 font-medium hover:scale-105 transform">Relatórios</a>
        </nav>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 hover:scale-110 transform"
            title={isDark ? "Modo Claro" : "Modo Escuro"}
          >
            {isDark ? <Sun className="w-5 h-5 text-white" /> : <Moon className="w-5 h-5 text-white" />}
          </button>
          <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 hover:scale-110 transform">
            <Bell className="w-5 h-5 text-white" />
          </button>
          <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
            <User className="w-full h-full text-white bg-white/20 p-1" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
