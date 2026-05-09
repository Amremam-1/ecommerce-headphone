"use client"
import Link from "next/link"
import { SiHeadphonezone } from "react-icons/si"
import { AiOutlineShopping } from "react-icons/ai"
import { useStateContext } from "../context/StateContext"
import Cart from "./Cart"

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext()
  return (
    <div className="flex items-center justify-between relative mx-1.5 my-4.5">
      <Link href="/">
        <div className="flex items-center gap-1.5">
          <SiHeadphonezone className="text-[#1C0770] text-2xl font-semibold" />
          <h1 className="text-2xl tracking-[5px]">
            HEAD<span className="text-[#1c0770] text-xl font-light">PHONE</span>
          </h1>
        </div>
      </Link>

      {/* Cart */}
      <button
        type="button"
        onClick={() => setShowCart(!showCart)}
        className="relative text-[#111827] cursor-pointer border-none bg-transparent transition-transform duration-300 ease-in hover:scale-100"
      >
        <AiOutlineShopping className="text-[23px]" />
        <span className="absolute -top-2 -right-2 flex items-center justify-center w-4 h-4 rounded-full bg-[#f02d34] text-[11px] font-semibold text-white">
          {totalQuantities}
        </span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar
