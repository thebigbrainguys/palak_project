import mongoose from 'mongoose'
import Product from '../../../models/product'
import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Category = ({products}) => {
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("myuser"));
    if(user.email != 'admin@genzwears.com'){
        router.push(`${process.env.NEXT_PUBLIC_HOST}`)
    }
  }, [])
  
  return (
    <section className="text-gray-600 body-font">
        <div className="container py-5 mx-auto">
          <div className="flex flex-wrap m-8 text-center justify-center">
            {Object.keys(products).map((item) => {
              return(
                  <div key={products[item].slug} className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-md m-6">
                    <Link href={`${process.env.NEXT_PUBLIC_HOST}/admin/updateProduct/${products[item].slug}`}>
                      <div className="block relative rounded overflow-hidden">
                        <Image width={200} height={200} alt="ecommerce" className="mx-auto h-[32vh] lg:h-[36vh] block" src={products[item].image} />
                      </div>
                      <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{products[item].category}</h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">{products[item].title}</h2>
                        <p className="mt-1 mb-2">₹{products[item].price}</p>
                        <div>
                          <span>Size: </span>
                          {products[item].size.includes("S") && <span className="border p-1 m-2">S</span>}
                          {products[item].size.includes("M") && <span className="border p-1 m-2">M</span>}
                          {products[item].size.includes("L") && <span className="border p-1 m-2">L</span>}
                          {products[item].size.includes("XL") && <span className="border p-1 m-2">XL</span>}
                          {products[item].size.includes("XXL") && <span className="border p-1 m-2">XXL</span>}
                        </div>
                        <div className="mt-3">
                          <span>Colour: </span>
                          {products[item].colour.includes("blue") && <button className="border-2 border-gray-300 ml-1 bg-blue-400 rounded-full w-6 h-6 focus:outline-none"></button>}
                          {products[item].colour.includes("red") && <button className="border-2 border-gray-300 ml-1 bg-red-400 rounded-full w-6 h-6 focus:outline-none"></button>}
                          {products[item].colour.includes("green") && <button className="border-2 border-gray-300 ml-1 bg-green-300 rounded-full w-6 h-6 focus:outline-none"></button>}
                          {products[item].colour.includes("yellow") && <button className="border-2 border-gray-300 ml-1 bg-yellow-400 rounded-full w-6 h-6 focus:outline-none"></button>}
                          {products[item].colour.includes("black") && <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>}
                          {products[item].colour.includes("white") && <button className="border-2 border-gray-300 ml-1 bg-white rounded-full w-6 h-6 focus:outline-none"></button>}
                          {products[item].colour.includes("gray") && <button className="border-2 border-gray-300 ml-1 bg-gray-400 rounded-full w-6 h-6 focus:outline-none"></button>}
                        </div>
                        <div>
                          Available Quantity: {products[item].availableQuantity}
                        </div>
                        <div className='mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                            <Link href={`${process.env.NEXT_PUBLIC_HOST}/admin/updateProduct/${products[item].slug}`}>Edit Product</Link>
                        </div>
                      </div>
                    </Link>
                  </div>
              )
            })}

          </div>
        </div>
      </section>
  )
}

export default Category

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let slug = context.query.category
  let products = await Product.find({ category: slug });
  if(products == null){
    return { props: { error : 404} }
  }
  return { props: { products: JSON.parse(JSON.stringify(products))} }
}