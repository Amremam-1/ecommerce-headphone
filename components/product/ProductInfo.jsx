import { AiFillStar, AiOutlineStar } from "react-icons/ai"

const ProductInfo = ({ productInfo: { name, details, price, rating } }) => {
  return (
    <div>
      <h1 className="text-xl font-bold">{name}</h1>

      {/* Reviews */}
      <div className="mt-2.5 flex items-center gap-1">
        <div className="flex gap-0.5 text-[#EFBF04] mt-2.5">
          {[1, 2, 3, 4, 5].map((star) =>
            star <= rating ? (
              <AiFillStar key={star} />
            ) : (
              <AiOutlineStar key={star} />
            )
          )}

          <h4 className="font-semibold">({rating})</h4>
        </div>
      </div>

      <div className="space-y-3 mt-4">
        <h4 className="font-medium text-xl">Details: </h4>
        <p className="w-200 text-[#6B7280]">{details}</p>
        <p className="price font-bold text-blue-900 mt-6 text-2xl">${price}</p>
      </div>
    </div>
  )
}

export default ProductInfo
