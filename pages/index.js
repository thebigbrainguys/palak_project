// import Image from "next/image";
// import { Inter } from "next/font/google";
// import Carous from "../components/carousel";

// const inter = Inter({ subsets: ["latin"] });

// export default function Home() {
//   return (
//     <main className="min-h-screen">

//       <Carous className="sm:mt-12"></Carous>

//       <section className="text-gray-600 body-font">
//         <div className="container px-5 py-12 md:py-24 mx-auto">
//           <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
//             <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
//               Gen-Z Wears
//             </h1>
//             <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
//               Wear the change. Be the change.
//             </p>
//           </div>
//           <div className="flex flex-wrap -m-4">
//             <div className="xl:w-1/3 md:w-1/2 p-4">
//               <div className="border border-gray-200 p-6 rounded-lg">
//                 <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     className="w-6 h-6"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
//                   </svg>
//                 </div>
//                 <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
//                   Shooting Stars
//                 </h2>
//                 <p className="leading-relaxed text-base">
//                   Fingerstache flexitarian street art 8-bit waist co, subway
//                   tile poke farm.
//                 </p>
//               </div>
//             </div>
//             <div className="xl:w-1/3 md:w-1/2 p-4">
//               <div className="border border-gray-200 p-6 rounded-lg">
//                 <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     className="w-6 h-6"
//                     viewBox="0 0 24 24"
//                   >
//                     <circle cx="6" cy="6" r="3"></circle>
//                     <circle cx="6" cy="18" r="3"></circle>
//                     <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
//                   </svg>
//                 </div>
//                 <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
//                   The Catalyzer
//                 </h2>
//                 <p className="leading-relaxed text-base">
//                   Fingerstache flexitarian street art 8-bit waist co, subway
//                   tile poke farm.
//                 </p>
//               </div>
//             </div>
//             <div className="xl:w-1/3 md:w-1/2 p-4">
//               <div className="border border-gray-200 p-6 rounded-lg">
//                 <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     className="w-6 h-6"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
//                     <circle cx="12" cy="7" r="4"></circle>
//                   </svg>
//                 </div>
//                 <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
//                   Neptune
//                 </h2>
//                 <p className="leading-relaxed text-base">
//                   Fingerstache flexitarian street art 8-bit waist co, subway
//                   tile poke farm.
//                 </p>
//               </div>
//             </div>
//             <div className="xl:w-1/3 md:w-1/2 p-4">
//               <div className="border border-gray-200 p-6 rounded-lg">
//                 <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     className="w-6 h-6"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
//                   </svg>
//                 </div>
//                 <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
//                   Melanchole
//                 </h2>
//                 <p className="leading-relaxed text-base">
//                   Fingerstache flexitarian street art 8-bit waist co, subway
//                   tile poke farm.
//                 </p>
//               </div>
//             </div>
//             <div className="xl:w-1/3 md:w-1/2 p-4">
//               <div className="border border-gray-200 p-6 rounded-lg">
//                 <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     className="w-6 h-6"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
//                   </svg>
//                 </div>
//                 <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
//                   Bunker
//                 </h2>
//                 <p className="leading-relaxed text-base">
//                   Fingerstache flexitarian street art 8-bit waist co, subway
//                   tile poke farm.
//                 </p>
//               </div>
//             </div>
//             <div className="xl:w-1/3 md:w-1/2 p-4">
//               <div className="border border-gray-200 p-6 rounded-lg">
//                 <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     className="w-6 h-6"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
//                   </svg>
//                 </div>
//                 <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
//                   Ramona Falls
//                 </h2>
//                 <p className="leading-relaxed text-base">
//                   Fingerstache flexitarian street art 8-bit waist co, subway
//                   tile poke farm.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <button className="flex mx-auto mt-16 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
//             Button
//           </button>
//         </div>
//       </section>
//     </main>
//   );
// }



import Image from "next/image"
import { Inter } from "next/font/google"
import Carousel from "@/components/carousel"
import ProductCard from "@/components/product-card"
import CategoryIcon from "@/components/category-icon"
import Footer from "@/components/footer"
import { ChevronRight } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  // Sample data for trending t-shirts
  const trendingTshirts = [
    {
      id: 1,
      name: "Urban Street Tee",
      price: 29.99,
      image: "/placeholder.svg?height=400&width=300",
      badge: "New",
    },
    {
      id: 2,
      name: "Vintage Graphic Tee",
      price: 24.99,
      image: "/placeholder.svg?height=400&width=300",
      badge: "Trending",
    },
    {
      id: 3,
      name: "Essential Basic Tee",
      price: 19.99,
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: 4,
      name: "Oversized Statement Tee",
      price: 34.99,
      image: "/placeholder.svg?height=400&width=300",
      badge: "Limited",
    },
  ]

  // Sample data for shoes
  const trendingShoes = [
    {
      id: 1,
      name: "Urban Sneakers",
      price: 79.99,
      image: "/placeholder.svg?height=400&width=300",
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Retro Runners",
      price: 89.99,
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: 3,
      name: "Classic Canvas",
      price: 59.99,
      image: "/placeholder.svg?height=400&width=300",
      badge: "Sale",
    },
    {
      id: 4,
      name: "Sport Performance",
      price: 99.99,
      image: "/placeholder.svg?height=400&width=300",
    },
  ]

  // Sample data for categories
  const categories = [
    { name: "T-Shirts", icon: "👕", link: "#" },
    { name: "Hoodies", icon: "🧥", link: "#" },
    { name: "Jeans", icon: "👖", link: "#" },
    { name: "Shoes", icon: "👟", link: "#" },
    { name: "Accessories", icon: "🧢", link: "#" },
    { name: "Dresses", icon: "👗", link: "#" },
    { name: "Sports", icon: "🏃", link: "#" },
    { name: "Sale", icon: "🏷️", link: "#" },
  ]

  // Sample data for hero carousel
  const heroSlides = [
    {
      id: 1,
      image: "/placeholder.svg?height=600&width=1200",
      title: "Summer Collection",
      subtitle: "Discover the hottest styles for the season",
      cta: "Shop Now",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=600&width=1200",
      title: "New Arrivals",
      subtitle: "Be the first to wear our latest designs",
      cta: "Explore",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=600&width=1200",
      title: "Limited Edition",
      subtitle: "Exclusive pieces you won't find anywhere else",
      cta: "View Collection",
    },
  ]

  return (
    <main className={`min-h-screen ${inter.className}`}>
      {/* Hero Carousel Section */}
      <section className="relative">
        <Carousel slides={heroSlides} />
      </section>

      {/* Trending T-shirts Section */}
      <section className="text-gray-800 body-font py-12">
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap w-full mb-8 flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900">Trending T-shirts</h2>
              <p className="lg:w-full leading-relaxed text-gray-600">Express yourself with our latest collection</p>
            </div>
            <a href="#" className="text-primary inline-flex items-center mt-4 md:mt-0">
              View All
              <ChevronRight className="ml-1 w-4 h-4" />
            </a>
          </div>

          <div className="flex flex-wrap -m-4">
            {trendingTshirts.map((product) => (
              <div key={product.id} className="xl:w-1/4 md:w-1/2 p-4">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shoes Carousel Section */}
      <section className="text-gray-800 body-font py-12 bg-gray-50">
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap w-full mb-8 flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900">Trending Footwear</h2>
              <p className="lg:w-full leading-relaxed text-gray-600">Step up your style game</p>
            </div>
            <a href="#" className="text-primary inline-flex items-center mt-4 md:mt-0">
              View All
              <ChevronRight className="ml-1 w-4 h-4" />
            </a>
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
      <section className="text-gray-800 body-font py-12">
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

      {/* CTA Banner */}
      <section className="text-gray-800 body-font">
        <div className="container mx-auto flex px-5 py-12 md:py-24 md:flex-row flex-col items-center bg-primary/5 rounded-xl">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h2 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
              Gen-Z Wears
              <br className="hidden lg:inline-block" />
              <span className="text-primary">Membership</span>
            </h2>
            <p className="mb-8 leading-relaxed">
              Join our membership program and get exclusive access to limited drops, special discounts, and early access
              to sales.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-primary/90 rounded-lg text-lg">
                Join Now
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-lg text-lg">
                Learn More
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded"
              alt="Membership"
              src="/placeholder.svg?height=500&width=600"
              width={600}
              height={500}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}

