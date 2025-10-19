// ✅ index.tsx (ou main.tsx)
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// 💡 Renderização segura e limpa, com tratamento de falha
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("❌ Elemento root não encontrado! Verifique o index.html.");
}

const root = createRoot(rootElement);

// 🪄 Suave carregamento inicial com fallback opcional
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ✨ Animação simples e global para entrada suave
const style = document.createElement("style");
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeIn {
    animation: fadeIn 0.6s ease-out;
  }
`;
document.head.appendChild(style);
