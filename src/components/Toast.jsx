import React from "react";
import { CheckCircle, AlertCircle, Info, X } from "lucide-react";

export default function Toast({ type="success", message, isVisible, onClose }) {
  if (!isVisible) return null;

  const getIcon = () => {
    switch (type) {
      case 'success': return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'error': return <AlertCircle className="w-5 h-5 text-red-500" />;
      case 'info': return <Info className="w-5 h-5 text-blue-500" />;
      default: return <CheckCircle className="w-5 h-5 text-green-500" />;
    }
  };

  const getBgColor = () => {
    switch (type) {
      case 'success': return 'bg-green-50 border-green-200';
      case 'error': return 'bg-red-50 border-red-200';
      case 'info': return 'bg-blue-50 border-blue-200';
      default: return 'bg-green-50 border-green-200';
    }
  };

  return (
    <div className="fixed right-6 bottom-6 z-50 animate-in slide-in-from-right-full duration-300">
      <div className={`px-5 py-3 rounded-lg shadow-lg border flex items-center gap-3 max-w-md ${getBgColor()}`}>
        {getIcon()}
        <div className="text-sm flex-1">{message}</div>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
