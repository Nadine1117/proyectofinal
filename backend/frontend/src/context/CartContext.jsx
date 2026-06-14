import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

const DOMINIOS_GRATIS = [
  "udelar.com.uy",
  "utu.com.uy",
  "secundaria.com.uy",
  "test.com",
];

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      if (prev.find((item) => item.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const getMembershipPrice = () => {
    const token = localStorage.getItem("token");
    if (!token) return 99.99;
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      const dominio = payload.email.split("@")[1];
      return DOMINIOS_GRATIS.includes(dominio) ? 0 : 99.99;
    } catch {
      return 99.99;
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, getMembershipPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
