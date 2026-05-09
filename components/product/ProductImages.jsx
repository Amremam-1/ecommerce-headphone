"use client"
import { urlFor } from "@/sanity/lib/image"
import { useState } from "react"

const ProductImages = ({ productImage: { name, image } }) => {
  const [index, setIndex] = useState(0)

  return (
    <div>
      <div className="rounded-[15px] w-80 h-80 cursor-pointer bg-white p-1 shadow-2xl transition-colors duration-500 ease-in-out hover:bg-linear-to-br hover:from-blue-600/55 hover:to-blue-900">
        <img src={urlFor(image[index]).url()} alt={name} />
      </div>

      <div className="flex items-center gap-2.5 mt-5">
        {image.map((item, i) => (
          <img
            key={i}
            src={urlFor(item).url()}
            className="rounded-lg w-20 h-20 cursor-pointer transition-colors duration-300 ease-in-out bg-[#F3F4F6] border-[0.1px] border-[#111185]/20 shadow-2xl hover:bg-blue-500"
            onMouseEnter={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductImages
