"use client"

const AddToCartButtons = ({ product, qty, onAdd, setShowCart }) => {
  const handleBuyNow = () => {
    onAdd(product, qty)
    setShowCart(true)
  }
  return (
    <div className="py-12 flex items-center gap-5">
      <button
        type="button"
        onClick={() => onAdd(product, qty)}
        className="group relative overflow-hidden px-8 py-2 rounded-lg bg-[#111185] text-white hover:text-[#111827] font-medium cursor-pointer"
      >
        <span className="relative z-20">Add to Cart</span>
        <span className="absolute left-0 bottom-0 w-full h-full bg-white border border-[#111185] rounded-lg -translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0" />
      </button>
      <button
        type="button"
        className="group relative overflow-hidden px-8 py-1.5 rounded-lg border border-[#111185] cursor-pointer hover:text-white font-medium"
      >
        <span className="relative z-20" onClick={handleBuyNow}>
          Buy Now
        </span>
        <span className="absolute left-0 bottom-0 w-full h-full bg-[#111185] -translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0" />
      </button>
    </div>
  )
}

export default AddToCartButtons
