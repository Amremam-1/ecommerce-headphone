import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai"
import { SiHeadphonezone } from "react-icons/si"
const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-2">
      <p className="text-[#111827] text-lg font-semibold flex items-center gap-2">
        <SiHeadphonezone className="text-[#1C0770] text-xl" />
        Headphones All rights reserverd.
      </p>

      <p className="flex items-center text-2xl font-extrabold cursor-pointer gap-8 text-[#6B7280]">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer
