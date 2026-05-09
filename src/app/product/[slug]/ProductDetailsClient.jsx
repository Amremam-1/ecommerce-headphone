"use client"
import AddToCartButtons from "../../../../components/product/AddToCartButtons"
import ProductImages from "../../../../components/product/ProductImages"
import ProductInfo from "../../../../components/product/ProductInfo"
import ProductSlider from "../../../../components/product/ProductSlider"
import QuantitySelector from "../../../../components/product/QuantitySelector"
import { useStateContext } from "../../../../context/StateContext"

const ProductDetailsClient = ({ product, products }) => {
  const { qty, onAdd, incQty, decQty, setShowCart } = useStateContext()
  return (
    <div className="px-0">
      <div className="flex flex-wrap justify-between gap-10 mt-15 m-10 text-[#111827]">
        {/*  ProductImages */}
        <ProductImages productImage={product} />

        <div className="space-y-5">
          {/* ProductInfo */}
          <ProductInfo productInfo={product} />

          <QuantitySelector
            onIncrease={incQty}
            onDecrease={decQty}
            value={qty}
          />

          {/* Add to Cart Buttons */}
          <AddToCartButtons
            onAdd={onAdd}
            qty={qty}
            product={product}
            setShowCart={setShowCart}
          />
        </div>
      </div>

      {/* Product Also You Like It */}

      <div className="py-10">
        <h1 className="text-center text-2xl text-[#111827] font-extrabold leading-relaxed tracking-widest">
          You may also Like
        </h1>
        <div className="py-12">
          <ProductSlider products={products} />
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsClient
