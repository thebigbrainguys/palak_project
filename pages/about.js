import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className="w-11/12 mx-auto py-20">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Image Placeholder */}
        <div className="w-full md:w-1/2">
              <Image src={'/homepagecarousel/carousel2.jpg'} className='w-60% h-80 bg-gray-200 rounded-lg flex items-center justify-center' width={600} height={600} alt='Image'></Image>

        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Flora Shop</h2>
          <p className="text-gray-600 text-lg mb-4">
            At Flora Shop, we believe flowers are more than just a gift — they are an expression of love, celebration, comfort, and joy.
            We are passionate about crafting beautiful floral arrangements that bring smiles to faces and color to life&apos;s most cherished moments.
          </p>
          <p className="text-gray-600 text-lg mb-4">
            From hand-tied bouquets to elegant floral decorations for events, our mission is to spread happiness with every petal.
            Whether you&apos;re celebrating a birthday, anniversary, or simply want to brighten someone’s day, we have the perfect blooms for every occasion.
          </p>
          <p className="text-gray-600 text-lg">
            Thank you for choosing Flora Shop — where flowers bloom with heart.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
