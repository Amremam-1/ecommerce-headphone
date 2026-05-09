"use client"
import { createContext, useContext, useState, useEffect } from "react"
import toast from "react-hot-toast"

const Context = createContext()

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalQuantities, setTotalQuantities] = useState(0)
  const [qty, setQty] = useState(1)

  // function for add item in cart
  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    )

    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity)
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity)

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          }
        }
        return cartProduct
      })

      setCartItems(updatedCartItems)
    } else {
      setCartItems([...cartItems, { ...product, quantity }])
    }
    toast.success(`${quantity} ${product.name} added to the cart`)
  }

  // increase & decrease quantitiy in cart item

  const toggleCartItemsQuantities = (id, value) => {
    const foundProduct = cartItems.find((item) => item._id === id) // for select product

    if (!foundProduct) return
    //now i doing logic for increase

    if (value === "increase") {
      const updatedCartItems = cartItems.map((item) =>
        item._id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )

      setCartItems(updatedCartItems)

      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)

      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1)
    } else if (value === "descrease") {
      if (foundProduct.quantity > 1) {
        const updatedCartItems = cartItems.map((item) =>
          item._id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        setCartItems(updatedCartItems)

        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)

        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1)
      }
    }
  }

  // remove from cartItems
  const onRemove = (productId) => {
    const foundProduct = cartItems.find((item) => item._id === productId)
    const newCartItems = cartItems.filter((item) => item._id !== productId)

    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantity
    )

    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
    )

    setCartItems(newCartItems)
    toast.success(`${foundProduct.name} removed from cart successfully`)
  }
  const incQty = () => {
    setQty((prevQty) => prevQty + 1)
  }

  const decQty = () => {
    setQty((prevQty) => (prevQty > 1 ? prevQty - 1 : 1))
  }

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        setCartItems,
        totalPrice,
        setTotalPrice,
        totalQuantities,
        setTotalQuantities,
        qty,
        onAdd,
        incQty,
        decQty,
        toggleCartItemsQuantities,
        onRemove,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)
