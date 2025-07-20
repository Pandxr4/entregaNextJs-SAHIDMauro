// /hooks/useCart.js
import { create } from "zustand";

export const useCart = create((set, get) => ({
  items: [],
  addItem: (product) => {
    const existing = get().items.find((i) => i.id === product.id);
    if (existing) {
      return set({
        items: get().items.map((i) =>
          i.id === product.id
            ? { ...i, quantity: i.quantity + product.quantity }
            : i
        ),
      });
    }
    set({ items: [...get().items, product] });
  },
  removeItem: (id) => {
    set({ items: get().items.filter((i) => i.id !== id) });
  },
  updateQuantity: (id, quantity) => {
    set({
      items: get().items.map((i) =>
        i.id === id ? { ...i, quantity } : i
      ),
    });
  },
  clear: () => set({ items: [] }),
  total: () =>
    get().items.reduce((acc, item) => acc + item.price * item.quantity, 0),
}));
