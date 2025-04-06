import Link from 'next/link'
import React from 'react'
import Product from "../models/product";
import mongoose from "mongoose";
import Image from 'next/image';

const Flowers = ({products}) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container py-5 mx-auto">
          <div className="flex flex-wrap m-8 text-center justify-center">
          {Object.keys(products).length == 0 && <p>Flowers are currently out of stock. More stock comming soon. Stay Tuned!</p>}
            {Object.keys(products).map((item) => {
              return(
                  <div key={products[item].slug} className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-md m-6">
                    <Link href={`/product/${products[item].slug}`}>
                      <div className="block relative rounded overflow-hidden">
                        <Image width={200} height={200} alt="ecommerce" className="mx-auto h-[32vh] lg:h-[36vh] block" src={products[item].image} />
                      </div>
                      <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Flowers</h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">{products[item].title}</h2>
                        <p className="mt-1 mb-2">₹{products[item].price}</p>
                        <div>
                          {products[item].size.includes("S") && <span className="border p-1 m-2">S</span>}
                          {products[item].size.includes("M") && <span className="border p-1 m-2">M</span>}
                          {products[item].size.includes("L") && <span className="border p-1 m-2">L</span>}
                          {products[item].size.includes("XL") && <span className="border p-1 m-2">XL</span>}
                          {products[item].size.includes("XXL") && <span className="border p-1 m-2">XXL</span>}
                        </div>
                        {/* <div className="mt-3">
                          {products[item].colour.includes("blue") && <button className="border-2 border-gray-300 ml-1 bg-blue-400 rounded-full w-6 h-6 focus:outline-none"></button>}
                          {products[item].colour.includes("red") && <button className="border-2 border-gray-300 ml-1 bg-red-400 rounded-full w-6 h-6 focus:outline-none"></button>}
                          {products[item].colour.includes("green") && <button className="border-2 border-gray-300 ml-1 bg-green-300 rounded-full w-6 h-6 focus:outline-none"></button>}
                          {products[item].colour.includes("yellow") && <button className="border-2 border-gray-300 ml-1 bg-yellow-400 rounded-full w-6 h-6 focus:outline-none"></button>}
                          {products[item].colour.includes("black") && <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>}
                          {products[item].colour.includes("white") && <button className="border-2 border-gray-300 ml-1 bg-white rounded-full w-6 h-6 focus:outline-none"></button>}
                          {products[item].colour.includes("gray") && <button className="border-2 border-gray-300 ml-1 bg-gray-400 rounded-full w-6 h-6 focus:outline-none"></button>}
                        </div> */}
                      </div>
                    </Link>
                  </div>
              )
            })}

          </div>
        </div>
      </section>
    </div>
  )
}

export default Flowers

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  let products = await Product.find({category: "flowers"});
  let flowers = {}
    for(let item of products){
        if(item.title in flowers){
            if(!flowers[item.title].colour.includes(item.colour) && item.availableQuantity > 0){
                flowers[item.title].colour.push(item.colour)
            }
            if(!flowers[item.title].size.includes(item.size) && item.availableQuantity > 0){
                flowers[item.title].size.push(item.size)
            }
        }else{
            flowers[item.title] = JSON.parse(JSON.stringify(item));
            if(item.availableQuantity>0){
                flowers[item.title].colour  = [item.colour]
                flowers[item.title].size  = [item.size]
              }else{
                flowers[item.title].colour  = []
                flowers[item.title].size  = []
            }
        }
    }
  return { props: { products: JSON.parse(JSON.stringify(flowers)) } }
}