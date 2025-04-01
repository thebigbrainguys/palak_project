import mongoose from "mongoose";
import Order from "../models/order";
import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const OrderPage = ({order, clearCart}) => {
  const router = useRouter()
  useEffect(() => {
    if(router.query.clearCart == 1){
      clearCart()
    }
  }, [])

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-10 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                Gen-Z Wears
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                #{order.orderId}
              </h1>

              <p className="leading-relaxed">
                Your order has been placed successfully! 
              </p>
              <p className="mb-4">Your payment status is <span className="font-bold text-blue-400">{order.status}</span></p>
              <div className="grid grid-cols-4 gap-4 mb-4">
                <a className="text-center py-2 text-lg px-1">
                  Description
                </a>
                <a className="text-center border-gray-300 py-2 text-lg px-1">
                  Colour
                </a>
                <a className="text-center border-gray-300 py-2 text-lg px-1">
                  Item Price
                </a>
                <a className="text-center border-gray-300 py-2 text-lg px-1">
                  Quantity
                </a>
              </div>

              {Object.keys(order.products).map((item)=>{
                return (
                  <>
                  <div key={item} className="grid grid-cols-4 gap-4 border-t border-gray-200 py-2">
                    <span className="text-gray-500">{order.products[item].name}</span>
                    <span className="mx-auto text-gray-900">{order.products[item].variant}</span>
                    <span className="mx-auto text-gray-900">{order.products[item].price}</span>
                    <span className="mx-auto text-gray-900">{order.products[item].qty}</span>
                  </div>
                  </>
                )
              })  
              }


              <div className="flex mt-8">
                <span className="title-font font-medium text-2xl text-gray-900">
                  Sub Total: ₹{order.amount}
                </span>
                <button className="flex ml-auto text-white bg-blue-400 border-0 py-2 px-6 focus:outline-none hover:bg-blue-400 rounded">
                  Track Order
                </button>
              </div>
            </div>

            <div className="lg:w-1/2 w-auto h-auto object-cover rounded flex items-center justify-center">

            <Image
              height={1000}
              width={1000}
              alt="ecommerce"
              className=""
              src="/shopping.jpg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderPage;



export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  let order = await Order.findById(context.query.id);
  
  return { props: { order: JSON.parse(JSON.stringify(order))} }
}