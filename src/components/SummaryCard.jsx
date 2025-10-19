import React from 'react'
import { ShoppingCart, DollarSign, TrendingUp, DollarSign as DollarIcon } from 'lucide-react'

const getIcon = (title) => {
  if (title.includes('Total de carrinhos')) return <ShoppingCart className="w-8 h-8 text-blue-600" />
  if (title.includes('Valor total')) return <DollarSign className="w-8 h-8 text-green-600" />
  if (title.includes('Taxa de recuperação')) return <TrendingUp className="w-8 h-8 text-purple-600" />
  if (title.includes('Valor em recuperação')) return <DollarIcon className="w-8 h-8 text-yellow-600" />
  if (title.includes('Valor recuperado')) return <DollarIcon className="w-8 h-8 text-green-600" />
  return <ShoppingCart className="w-8 h-8 text-gray-600" />
}

const SummaryCard = ({ title, value, icon }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer backdrop-blur-sm min-h-[120px] flex flex-col justify-between">
    <div className="flex items-center justify-between">
      <div className="flex-1">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">{title}</p>
        <p className="text-3xl font-bold text-gray-900 dark:text-white">{value}</p>
      </div>
      <div className="opacity-80 ml-4">
        {getIcon(title)}
      </div>
    </div>
  </div>
)

export default SummaryCard
