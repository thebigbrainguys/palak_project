import Image from "next/image"
import { Inter } from "next/font/google"
import Carousel from "@/components/carousel"
import ProductCard from "@/components/product-card"
import CategoryIcon from "@/components/category-icon"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  // Sample data for shoes
  const trendingShoes = [
    {
      id: 1,
      name: "Mix Shades",
      price: 400,
      image: "/flowers/mixshades.jpg",
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Pink Roses",
      price: 500,
      image: "/flowers/pinkroses.jpg",
    },
    {
      id: 3,
      name: "Pink Shades",
      price: 500,
      image: "/flowers/pinkshades.jpg",
      badge: "Sale",
    },
    {
      id: 4,
      name: "White Roses",
      price: 400,
      image: "/flowers/whiteroses.jpg",
    },
    {
      id: 5,
      name: "Purple Shades",
      price: 600,
      image: "/flowers/purpleshades.jpg",
    },
  ]

  // Sample data for categories
  const categories = [
    { name: "Purple Shades", icon: "🪻", link: "#" },
    { name: "White Shades", icon: "🌼", link: "#" },
    { name: "Pink Shades", icon: "🌺", link: "#" },
    { name: "Blue Shades", icon: "🪻", link: "#" },
    { name: "Yellow Shades", icon: "🌻", link: "#" },
    { name: "Red Shades", icon: "🌹", link: "#" },
  ]


  return (
    <main className={`min-h-screen ${inter.className}`}>
   
      <section className="relative">
        <Carousel />
      </section>


      {/* Shoes Carousel Section */}
      <section className="text-gray-800 body-font py-12 bg-gray-50">
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap w-full mb-8 flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900">Variety of Flowers</h2>
              <p className="lg:w-full leading-relaxed text-gray-600">Express yourself with the lates collections</p>
            </div>
            <Link href="/shop" className="text-primary inline-flex items-center mt-4 md:mt-0">
              View All
              <ChevronRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          <div className="relative">
            <div className="flex overflow-x-auto pb-6 hide-scrollbar">
              {trendingShoes.map((product) => (
                <div key={product.id} className="px-3 min-w-[250px] sm:min-w-[300px]">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="text-gray-800 body-font py-12 bg-pink-100">
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap w-full mb-8 flex-col items-center text-center">
            <h2 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900">Shop by Category</h2>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-600">Find exactly what you&apos;re looking for</p>
          </div>

          <div className="flex flex-wrap -m-4 justify-center">
            {categories.map((category, index) => (
              <div key={index} className="p-4 md:w-1/4 lg:w-1/8 sm:w-1/2">
                <CategoryIcon category={category} />
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}

