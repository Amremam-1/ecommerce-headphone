"use client"
import Link from "next/link"
import { HiShoppingBag } from "react-icons/hi2"
import { useStateContext } from "../../../context/StateContext"
import { useEffect } from "react"
import { schoolpride } from "@/sanity/lib/utils"

const SuccessPage = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext()

  useEffect(() => {
    localStorage.clear()
    setCartItems([])
    setTotalPrice(0)
    setTotalQuantities(0)
    schoolpride()
  }, [])
  return (
    <section className="container flex justify-center items-center mx-auto min-h-screen">
      <div className=" bg-[#dce5fe] border border-[#ededed] space-y-3.5 shadow-2xl  w-5xl rounded-2xl p-12 flex items-center capitalize flex-col justify-center">
        <span>
          <HiShoppingBag
            size={180}
            className="text-green-500/30 shadow-2xl/5 mb-5 rounded-4xl"
          />
        </span>
        <h2 className="text-2xl font-extrabold">Thank you for your order!</h2>
        <p className="text-sm">Check your email inbox for the receipt..</p>
        <p className="flex flex-col items-center">
          If you have any questions, please email
          <a
            className="text-[#f02d34]/70 lowercase font-bold text-sm"
            href="mailo:emama2337@gmail.com"
          >
            emama2337@gmail.com
          </a>
        </p>

        <Link href="/">
          <button className="w-full mt-4 bg-green-700 hover:bg-green-800 text-white py-3 px-5 cursor-pointer rounded-lg font-medium transition">
            Continue Shopping
          </button>
        </Link>
      </div>
    </section>
  )
}

export default SuccessPage
