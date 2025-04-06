import React, { useEffect, useState } from 'react'
import mongoose from 'mongoose';
import Product from '../../models/product';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Slug = ({ buyNow, addToCart, product, variants, error }) => {

  //To use the next router which is not currently used.
  const router = useRouter();

  
  // const { slug } = router.query;

  const [pin, setPin] = useState('');
  const [service, setService] = useState();

  const checkServiceability = async () => {
    try{
      let pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`);
      let pinJson = await pins.json();
      if (Object.keys(pinJson).includes(pin)) {
        setService(true);
        toast.success('Your pincode is serviceable', {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      } else {
        setService(false);
        toast.warn('Sorry! pincode is not serviceable', {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
    }catch(e){
      console.log(e)
    }
  }

  function onChangePin(e) {
    setPin(e.target.value);
  }

  
  const [colour, setColour] = useState()
  const [size, setSize] = useState()
  
  useEffect(() => {
    if(!error){
      setColour(product.colour);
      setSize(product.size);
    }
  }, [router.query, product.colour, product.size, error])
  

  const refreshVariant = (newColour, newSize) => {
    //Using next router
    if(!error){
      setColour(newColour);
      setSize(newSize);
    }
    router.push(`${process.env.NEXT_PUBLIC_HOST}/product/${variants[newColour][newSize]["slug"]}`)
  }

  if(error){
    return( <>
      <h1>Error</h1>
    </>)
  }

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"/>
        <div className="container px-5 py-12 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image width={200} height={200} alt="ecommerce" className="lg:w-1/2 w-full lg:h-[70vh] h-96 px-16 md:px-24 object-cover object-center rounded" src={product.image} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">The Flora Shop</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title} ({product.size}/{product.colour})</h1>
      
              <p className="leading-relaxed">{product.description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                {/* <div className="flex">
                  <span className="mr-3">Color</span>
                  {Object.keys(variants).includes("white") && Object.keys(variants["white"]).includes(size) && <button onClick={() => { refreshVariant("white", size) }} className={`border-2 ${colour === 'white' ? 'border-black' : 'border-gray-200'} rounded-full w-6 h-6 focus:outline-none`}></button>}
                  {Object.keys(variants).includes("gray") && Object.keys(variants["gray"]).includes(size) && <button onClick={() => { refreshVariant("gray", size) }} className={`border-2 ${colour === 'gray' ? 'border-black' : 'border-gray-200'} ml-1 bg-gray-400 rounded-full w-6 h-6 focus:outline-none`}></button>}
                  {Object.keys(variants).includes("blue") && Object.keys(variants["blue"]).includes(size) && <button onClick={() => { refreshVariant("blue", size) }} className={`border-2 ${colour === 'blue' ? 'border-black' : 'border-gray-200'} ml-1 bg-blue-400 rounded-full w-6 h-6 focus:outline-none`}></button>}
                  {Object.keys(variants).includes("black") && Object.keys(variants["black"]).includes(size) && <button onClick={() => { refreshVariant("black", size) }} className={`border-2 ${colour === 'black' ? 'border-blue-700' : 'border-gray-200'} ml-1 bg-black rounded-full w-6 h-6 focus:outline-none`}></button>}
                  {Object.keys(variants).includes("green") && Object.keys(variants["green"]).includes(size) && <button onClick={() => { refreshVariant("green", size) }} className={`border-2 ${colour === 'green' ? 'border-black' : 'border-gray-200'} ml-1 bg-green-400 rounded-full w-6 h-6 focus:outline-none`}></button>}
                  {Object.keys(variants).includes("yellow") && Object.keys(variants["yellow"]).includes(size) && <button onClick={() => { refreshVariant("yellow", size) }} className={`border-2 ${colour === 'yellow' ? 'border-black' : 'border-gray-200'} ml-1 bg-yellow-400 rounded-full w-6 h-6 focus:outline-none`}></button>}
                  {Object.keys(variants).includes("red") && Object.keys(variants["red"]).includes(size) && <button onClick={() => { refreshVariant("red", size) }} className={`border-2 ${colour === 'red' ? 'border-black' : 'border-gray-200'} ml-1 bg-red-400 rounded-full w-6 h-6 focus:outline-none`}></button>}
                </div> */}
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select value={size} onChange={(e) => { refreshVariant(colour, e.target.value) }} className="rounded border appearance-none ${colour === 'gray'?border-black: border-gray-200} py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-blue-400 text-base pl-3 pr-10">

                      {colour && Object.keys(variants[colour]).includes("S") && <option>S</option>}
                      {colour && Object.keys(variants[colour]).includes("M") && <option>M</option>}
                      {colour && Object.keys(variants[colour]).includes("L") && <option>L</option>}
                      {colour && Object.keys(variants[colour]).includes("XL") && <option>XL</option>}
                      {colour && Object.keys(variants[colour]).includes("XXL") && <option>XXL</option>}

                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                {product.availableQuantity > 0 &&<span className="title-font font-medium text-2xl text-gray-900">₹{product.price}</span>}
                {product.availableQuantity == 0 &&<span className="title-font font-medium text-2xl text-gray-900">Out of Stock!</span>}
                <button onClick={() => buyNow(product.slug, 1, product.price, product.title, product.size, product.colour)} disabled={product.availableQuantity>0?false:true} className="disabled:bg-blue-300 flex ml-5 text-white bg-blue-400 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Buy Now</button>
                <button onClick={() => addToCart(product.slug, 1, product.price, product.title, product.size, product.colour)} disabled={product.availableQuantity>0?false:true} className="disabled:bg-blue-300 flex ml-5 text-white bg-blue-400 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Add To Cart</button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>


              {/* Pincode functionality */}
              <div className="pin mt-6 flex items-center space-x-2 text-md">
                {/* <label htmlFor="pincode" className='text-md font-semibold'>Pincode: </label> */}
                <input placeholder='Enter Pincode' onChange={onChangePin} className='p-1 border-2 border-blue-100 rounded-md' type="text" name="pincode" id="pincode" />
                <button onClick={checkServiceability} className='flex ml-14 text-white bg-blue-400 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded'>Check</button>
              </div>
              {!service && service != null && <div className="text-red-700 text-sm mt-2">Sorry! We do not deliver to this pincode yet.</div>}
              {service && service != null && <div className="text-green-700 text-sm mt-2">Hurray! This pincode is serviceable.</div>}

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Slug

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let error=null;
  let product = await Product.findOne({ slug: context.query.slug });
  if(product == null){
    return { props: { error : 404} }
  }
  let variants = await Product.find({ title: product.title, category: product.category });
  let colorSizeSlug = {}
  for (let item of variants) {
    if (Object.keys(colorSizeSlug).includes(item.colour)) {
      colorSizeSlug[item.colour][item.size] = { slug: item.slug }
    } else {
      colorSizeSlug[item.colour] = {}
      colorSizeSlug[item.colour][item.size] = { slug: item.slug }
    }
  }
  return { props: { variants: JSON.parse(JSON.stringify(colorSizeSlug)), product: JSON.parse(JSON.stringify(product)) } }
}