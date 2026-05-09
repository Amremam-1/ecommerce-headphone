"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { urlFor } from "@/sanity/lib/image"
import Link from "next/link"
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import { truncateText } from "../../utils/truncate"
import "../../src/app/globals.css"

const ProductSlider = ({ products }) => {
  const averageRating =
    products.rating?.reduce((acc, r) => acc + r.rating, 0) /
    products.rating?.length
  console.log(averageRating)
  console.log(products)
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      className="productSwiper"
      breakpoints={{
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
      }}
    >
      {products.map((product) => (
        <SwiperSlide key={product._id}>
          <Link href={`/product/${product.slug.current}`}>
            <div className="bg-white rounded-2xl shadow-md">
              <div className="flex justify-center cursor-pointer bg-[#ededed] rounded-2xl p-7">
                <img src={urlFor(product?.image[0])} alt={product.name} />
              </div>
              <div className="px-5 py-2">
                <h4 className="font-semibold">
                  {truncateText(product.name, 30)}
                </h4>
                <div className="flex gap-0.5 text-[#EFBF04] mt-2.5">
                  {[1, 2, 3, 4, 5].map((star) =>
                    star <= product.rating ? (
                      <AiFillStar key={star} />
                    ) : (
                      <AiOutlineStar key={star} />
                    )
                  )}

                  <h4 className="font-semibold">({product.rating})</h4>
                </div>
                <p className="font-medium text-xl text-[#6B7280]">
                  $ {product.price}
                </p>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ProductSlider
