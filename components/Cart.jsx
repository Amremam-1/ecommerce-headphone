"use client"
import Link from "next/link"
import { useStateContext } from "../context/StateContext"
import { AiFillDelete, AiOutlineLeft, AiOutlineShopping } from "react-icons/ai"
import { useRef } from "react"
import { urlFor } from "@/sanity/lib/image"
import QuantitySelector from "./product/QuantitySelector"
import toast from "react-hot-toast"

const Cart = () => {
  const cartRef = useRef()
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemsQuantities,
    onRemove,
  } = useStateContext()

  const handleCheckout = async () => {
    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(cartItems),
    })

    if (response.statusCode === 500) return

    const data = await response.json()

    toast.loading("Redirecting")

    window.location.href = data.url
  }

  return (
    <div ref={cartRef} className="fixed inset-0 z-50 flex">
      {/* overlay */}
      <div
        className="flex-1 bg-black/50 backdrop-blur-sm"
        onClick={() => setShowCart(false)}
      />

      {/* cart panel */}
      <div className="w-100 min-h-screen bg-white shadow-2xl px-3 py-6 flex flex-col">
        {/* header */}
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => setShowCart(false)}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition"
          >
            <AiOutlineLeft size={16} />
            <span className="font-medium">Your Cart</span>
          </button>

          <span className="text-sm font-semibold text-red-600">
            {totalQuantities} items
          </span>
        </div>

        {/* empty state */}
        {cartItems.length < 1 && (
          <div className="flex flex-col items-center justify-center flex-1 text-center">
            <AiOutlineShopping size={120} className="text-gray-300" />
            <h5 className="mt-4 font-semibold text-lg">
              Your shopping bag is empty
            </h5>

            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="mt-6 px-6 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className="flex flex-col justify-between gap-3  h-full">
          {/* items */}
          {cartItems.length >= 1 && (
            <div className="flex flex-col gap-4 overflow-y-auto pt-5 custom-scrollbar">
              {cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex gap-4 border border-[#ededed] rounded-xl p-4 shadow-md transition"
                >
                  <img
                    src={urlFor(item?.image[0])}
                    alt={item.name}
                    className="w-24 h-24 object-contain rounded-lg bg-gray-100"
                  />

                  <div className="flex flex-col justify-between flex-1">
                    {/* name + price */}
                    <div className="flex justify-between items-start">
                      <span className="font-medium text-sm line-clamp-2">
                        {item.name}
                      </span>
                      <span className="font-semibold text-indigo-600">
                        ${item.price}
                      </span>
                    </div>

                    {/* title + delete */}
                    <div className="flex items-center gap-3">
                      <QuantitySelector
                        onIncrease={() =>
                          toggleCartItemsQuantities(item._id, "increase")
                        }
                        onDecrease={() =>
                          toggleCartItemsQuantities(item._id, "descrease")
                        }
                        value={item.quantity}
                      />

                      <button
                        onClick={() => onRemove(item._id)}
                        className="text-red-500 hover:text-red-700 transition cursor-pointer"
                      >
                        <AiFillDelete size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* footer */}
          {cartItems.length >= 1 && (
            <div className="mt-6 pt-4">
              <div className="flex justify-between font-semibold text-lg">
                <span>Total:</span>
                <span className="text-indigo-600">${totalPrice}</span>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-medium transition"
              >
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cart
