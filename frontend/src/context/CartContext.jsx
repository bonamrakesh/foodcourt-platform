import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)
export const useCart = () => useContext(CartContext)

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try { return JSON.parse(localStorage.getItem('gather-cart') || '[]') } catch { return [] }
  })

  const update = (next) => {
    setItems(next)
    localStorage.setItem('gather-cart', JSON.stringify(next))
  }

  const addItem = (food) => {
    const found = items.find((item) => item.id === food.id)
    update(found
      ? items.map((item) => item.id === food.id ? { ...item, quantity: item.quantity + 1 } : item)
      : [...items, { ...food, quantity: 1 }])
  }
  const changeQuantity = (id, delta) => update(items
    .map((item) => item.id === id ? { ...item, quantity: item.quantity + delta } : item)
    .filter((item) => item.quantity > 0))
  const removeItem = (id) => update(items.filter((item) => item.id !== id))
  const clearCart = () => update([])
  const count = items.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const value = useMemo(() => ({ items, addItem, changeQuantity, removeItem, clearCart, count, subtotal }), [items, count, subtotal])
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
