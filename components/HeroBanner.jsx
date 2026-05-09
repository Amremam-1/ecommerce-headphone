"use client"

import Link from "next/link"
import React from "react"
import { urlFor } from "@/sanity/lib/image"

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="px-10 py-25 bg-linear-to-b from-[#dcdcdc]/80 to-[#F9FAFB]  rounded-xl h-125 w-full relative">
      <div>
        <p className="text-[20px]">{heroBanner.smallText}</p>
        <h3 className="font-bold text-4xl uppercase text-cyan-950">
          {heroBanner.midText}
        </h3>
        <h1 className="text-9xl font-extrabold uppercase text-[#111827]">
          {heroBanner.largeText1}
        </h1>
        <img
          src={urlFor(heroBanner.image).url()}
          alt="headphones"
          className="absolute w-80 h-80 md:w-112.5 md:h-112.5 bottom-1 md:top-0 md:right-[20%] right-0"
        />

        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button
              type="button"
              className="rounded-[15px] px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white border-none mt-10 text-[18px] font-medium z-10 cursor-pointer"
            >
              {heroBanner.buttonText}
            </button>
          </Link>

          <div className="absolute right-[10%] bottom-[5%] flex flex-col text-[#324d67] w-75 leading-8">
            <h5 className="font-bold text-[16px]">Describtion</h5>
            <p className="text-[#6B7280] font-extralight">
              {heroBanner.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
