import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { CartContext, CartProvider } from "./componentes/CartContext.jsx";
import Footer from "./componentes/Footer.jsx";
import Header from "./componentes/Header.jsx";
import Main from "./componentes/Main.jsx";

function App() {



  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </CartProvider>

  )
}
export default App;
