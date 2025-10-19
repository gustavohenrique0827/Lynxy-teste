import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import AbandonedCarts from "./pages/AbandonedCarts";
import { Toaster } from "./components/ui/toaster";

export default function App() {
  return (
    <ThemeProvider>
      <AbandonedCarts />
      <Toaster />
    </ThemeProvider>
  );
}
