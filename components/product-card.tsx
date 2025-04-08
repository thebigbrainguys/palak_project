import Image from "next/image"
import { ShoppingBag, Heart} from "lucide-react"
import React from "react"
import Link from "next/link"

interface Product {
  id: number
  name: string
  price: number
  image: string
  badge?: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps, {addToCart}) {
  return (
    <div className="group relative">
      <div className="relative h-80 w-full overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />

        {product.badge && (
          <div className="absolute top-2 left-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
            {product.badge}
          </div>
        )}

        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>

        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex justify-between gap-2">
            <button className="bg-white text-gray-900 flex-1 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center">
              <ShoppingBag className="h-4 w-4 mr-1" />
              <Link href={'/shop'}>
                Shop Now
              </Link>
            </button>
            <button className="bg-white text-gray-900 p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <Heart className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-gray-900 font-medium">{product.name}</h3>
        <p className="text-gray-700 mt-1">₹{product.price.toFixed(2)}</p>
      </div>
    </div>
  )
}

