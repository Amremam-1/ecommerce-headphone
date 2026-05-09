"use client"

import { urlFor } from "@/sanity/lib/image"
import Link from "next/link"

const FooterBanner = ({
  footerBanner: {
    image,
    buttonText,
    product,
    description,
    smallText,
    midText,
    largeText1,
    largeText2,
    discount,
    saleTime,
  },
}) => {
  return (
    <div className="bg-linear-to-br from-blue-600 to-blue-900 text-white rounded-2xl px-5 py-10 my-10 w-full relative overflow-hidden md:overflow-visible">
      <div className="flex justify-between flex-col md:flex-row">
        {/* Left */}
        <div className="flex flex-col z-10">
          <p className="text-red-800 font-extrabold text-3xl tracking-widest transform rotate-5 hover:rotate-0 duration-300 hover:scale-90 cursor-grab">
            {discount}
          </p>
          <h3 className="text-[80px] font-bold">{largeText1}</h3>
          <h3 className="text-[80px] font-bold">{largeText2}</h3>
          <p className="m-3.5 text-[#111827] font-semibold">{saleTime}</p>
        </div>

        <div>
          <img
            src={urlFor(image).url()}
            alt="bannerImage"
            className="absolute top-[-25%] md:right-[30%] right-0 w-125 z-0"
          />
        </div>

        {/* Right */}
        <div className="flex flex-col">
          <p className="text-lg text-[#111827] font-medium tracking-widest">
            {smallText}
          </p>
          <h3 className="text-[60px] font-bold">{midText}</h3>
          <p className="text-lg">{description}</p>
          <Link href={`/product/${product}`}>
            <button
              type="button"
              className="bg-white text-blue-900 font-semibold px-6 py-2 rounded-lg hover:bg-blue-100 transition mt-10 cursor-pointer block"
            >
              {buttonText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FooterBanner
