import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"

const QuantitySelector = ({ value, onIncrease, onDecrease }) => {
  return (
    <div className="flex items-center gap-5">
      <h3 className="font-medium text-lg">Quantity:</h3>
      <p className="flex items-center gap-4">
        <span
          className="cursor-pointer w-6 h-6 flex items-center justify-center rounded-full text-white bg-blue-700"
          onClick={onDecrease}
        >
          <AiOutlineMinus />
        </span>
        <span className="font-bold">{value}</span>
        <span
          className="cursor-pointer w-6 h-6 flex items-center justify-center rounded-full text-white bg-blue-700"
          onClick={onIncrease}
        >
          <AiOutlinePlus />
        </span>
      </p>
    </div>
  )
}

export default QuantitySelector
