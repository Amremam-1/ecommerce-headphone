"use client"

import Link from "next/link"
import { urlFor } from "@/sanity/lib/image"
import { truncateText } from "../utils/truncate"
import { TiShoppingCart } from "react-icons/ti"
import { AiFillStar, AiOutlineStar } from "react-icons/ai"

const ProductCart = ({ product: { image, name, slug, price, rating } }) => {
  return (
    <div className="">
      <Link href={`/product/${slug.current}`}>
        <div className="cursor-pointer border border-[#E5E7EB] rounded-2xl bg-white/50 shadow-lg p-4">
          <img
            src={urlFor(image?.[0])}
            alt="slug"
            width="full"
            height="full"
            className="rounded-t-2xl transition-transform duration-500 hover:scale-90 ease-in-out overflow-hidden"
          />

          <p className="font-bold text-[16px] text-[#111827]">
            {truncateText(name)}
          </p>

          <div className="flex gap-0.5 text-[#EFBF04] mt-1.5">
            {[1, 2, 3, 4, 5].map((star) =>
              star <= rating ? (
                <AiFillStar key={star} />
              ) : (
                <AiOutlineStar key={star} />
              )
            )}

            <h4 className="font-semibold">({rating})</h4>
          </div>

          <div className="flex items-center justify-between rounded-b-2xl px-4  mt-5">
            <p className="font-medium text-[#6B7280]">$ {price}</p>
            <button className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-all cursor-pointer">
              <TiShoppingCart size={20} />
            </button>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCart
