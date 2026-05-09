import { client } from "@/sanity/lib/client"
import ProductDetailsClient from "./ProductDetailsClient"

export async function generateStaticParams() {
  const products = await client.fetch(
    `*[_type == "product"]{ slug { current } }`
  )

  return products.map((product) => ({
    slug: product.slug.current,
  }))
}

const ProductDetails = async ({ params }) => {
  const { slug } = await params

  const product = await client.fetch(
    `*[_type == "product" && slug.current == $slug][0]`,
    { slug }
  )
  const products = await client.fetch('*[_type == "product"]')

  return <ProductDetailsClient product={product} products={products} />
}

export default ProductDetails
