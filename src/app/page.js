import { client } from "@/sanity/lib/client"
import { HeroBanner, FooterBanner, ProductCart } from "../../components"

export const revalidate = 0

const Home = async () => {
  const products = await client.fetch('*[_type == "product"]')
  const bannerData = await client.fetch('*[_type == "banner"]')

  return (
    <section>
      <HeroBanner heroBanner={bannerData[0] || null} />

      <div className="px-5 py-10 text-center">
        <h1 className="text-4xl text-[#111827] font-extrabold leading-relaxed tracking-widest">
          Best Selling Products
        </h1>
        <p className="text-lg text-[#6B7280] font-medium">
          speakers of many variations..!
        </p>
      </div>

      <div className="px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center">
        {products?.map((product) => (
          <ProductCart key={product._id} product={product} />
        ))}
      </div>

      <FooterBanner footerBanner={(bannerData && bannerData[0]) || null} />
    </section>
  )
}

export default Home