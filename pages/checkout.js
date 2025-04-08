import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import React, { useEffect, useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = ({ cart, addToCart, clearCart, removeFromCart, subTotal, user }) => {
  const router = useRouter()
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [pincode, setPincode] = useState('')
  const [disabled, setDisabled] = useState(true)

  

  useEffect(() => {
    // const fetchPincodes = async () =>{
    //   let response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`);
    //   let result = await response.json();
    //   if(Object.keys(result).includes(pincode)){
    //     setCity(result[pincode][0])
    //     setState(result[pincode][1])
    //   }else{
    //     setCity('')
    //     setState('')
    //   }
    // }
    // fetchPincodes();
    if(user.email){
      setEmail(user.email)
    }
  }, [user.email, router, router.query, pincode])

  // useEffect(() => {
  //   const fun = async()=>{
  //     let token = {token: user.value}
  //     let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getuser`, {
  //       method: "POST", // or 'PUT'
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(token),
  //     });
  //     a = await a.json();
  //     setName(a.name);
  //     setAddress(a.address);
  //     setPhone(a.phoneno);
  //     setPincode(a.pincode);
  //   }
  //   fun()
  // }, [user.value])
  


  useEffect(() => {
    if (name.length > 3 && address.length > 3 && phone.length == 10 && city.length > 3 && state.length > 3
      && pincode.length > 5  && Object.keys(cart).length >0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
    if(user.email){
      setEmail(user.email)
    }
  }, [city.length, state.length, user.email, name, phone, address, pincode, cart])
  

  const handleChange = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value)
    }
    if (e.target.name == "email") {
      setEmail(e.target.value)
    }
    if (e.target.name == "address") {
      setAddress(e.target.value)
    }
    if (e.target.name == "phone") {
      setPhone(e.target.value)
    }
    if (e.target.name == "city") {
      setCity(e.target.value)
    }
    if (e.target.name == "state") {
      setState(e.target.value)
    }
    if (e.target.name == "pincode") {
      setPincode(e.target.value)
    }
    
  }

  const initiatePayment = async () => {
    
    let oid = Math.floor(Math.random() * Date.now());
    let txnToken;
    let txnRes
    const data = { cart, subTotal, oid, email: email, name: name, address: address, pincode: pincode, phone: phone ,city: city, state: state};
    try {
      let a = await fetch(`/api/pretransaction`, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
     
      txnRes = await a.json();
      if(txnRes.success){
        // console.log("Reached here")
        // console.log(txnRes.url)
        router.push(`/${txnRes.url}`)
        // txnToken = txnRes.txnToken
      }else{
        toast.error(txnRes.error, {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
          return;
      }
      
    } catch (error) {
      console.error("Error:", error);
      return
    }

  }

  return (
    <div className="container m-auto">
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
      <Head>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />
      </Head>
      {/* <Script type="application/javascript" src={`${process.env.NEXT_PUBLIC_PAYTM_HOST}/merchantpgpui/checkoutjs/merchants/${process.env.NEXT_PUBLIC_PAYTM_MID}.js`} crossorigin="anonymous" /> */}
      <h1 className="font-bold text-2xl text-center my-10">Checkout</h1>
      <h2 className="mx-auto w-3/4 text-lg font-semibold mb-4">1. Delivery Details</h2>
      <div className="mx-auto w-3/4 md:flex md:space-x-2">
        <div className="mb-4 w-full">
          <label htmlFor="name" className="leading-7 text-sm text-gray-600">
            Name
          </label>
          <input
            onChange={handleChange}
            value={name}
            type="text"
            id="name"
            name="name"
            className=" w-full bg-white rounded border border-blue-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="mb-4 w-full">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Email
          </label>
          {user.value? 
            <input
            value={email}
            type="email"
            id="email"
            name="email"
            readOnly={true}
            className="w-full bg-white rounded border border-blue-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />:
            <input
            onChange={handleChange}
            value={email}
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-blue-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          }
          
        </div>
      </div>
      <div className="mx-auto w-3/4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          Address
        </label>
        <textarea type="text"
          onChange={handleChange}
          value={address}
          id="address"
          name="address"
          className="w-full bg-white rounded border border-blue-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <div className="mx-auto w-3/4 md:flex md:space-x-2">
        <div className="mb-4 w-full">
          <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
            Phone No
          </label>
          <input
            onChange={handleChange}
            value={phone}
            type="tel"
            id="phone"
            name="phone"
            placeholder="Your 10 digit phone number"
            className="w-full bg-white rounded border border-blue-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="mb-4 w-full">
          <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">
            Pincode
          </label>
          <input
            onChange={handleChange}
            value={pincode}
            type="text"
            id="pincode"
            name="pincode"
            className="w-full bg-white rounded border border-blue-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>

      </div>
      <div className="mx-auto w-3/4 md:flex md:space-x-2">
        <div className="mb-4 w-full">
          <label htmlFor="state" className="leading-7 text-sm text-gray-600">
            State
          </label>
          <input
            onChange={handleChange}
            value={state}
            type="text"
            id="state"
            name="state"
            className="w-full bg-white rounded border border-blue-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="mb-4 w-full">
          <label htmlFor="city" className="leading-7 text-sm text-gray-600">
            City
          </label>
          <input
            onChange={handleChange}
            value={city}
            type="text"
            id="city"
            name="city"
            className="w-full bg-white rounded border border-blue-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>


      {/* Cart Review Section */}
      <h2 className="mx-auto w-3/4 text-lg font-semibold mt-8 mb-4">2. Review Cart</h2>
      <div className=" sideCart mx-auto w-3/4 bg-blue-100 p-10">

        <ol className="list-decimal">
          {Object.keys(cart).length === 0 && <div className="flex justify-center">Cart is Empty!</div>}
          {Object.keys(cart).map((k) => {
            return (
              <li className="my-5" key={k}>
                <div className="item flex">

                  <div className="w-1/2 text-center font-semibold">{cart[k].name} ({cart[k].size}/{cart[k].variant}) - ₹{cart[k].price}</div>
                  <div className="w-1/2 font-semibold flex justify-center items-center">
                    <CiCircleMinus
                      onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }}
                      size={20}
                      className="mx-1 cursor-pointer"
                    />{" " + cart[k].qty + " "}
                    <CiCirclePlus
                      onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }}
                      size={20}
                      className="mx-1 cursor-pointer"
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <span className="total font-semibold text-md flex justify-center mt-5">Sub Total: ₹{subTotal}</span>
        <div className="flex justify-center space-x-2 mt-5">
          {/* <Link href=""> */}
            <button onClick={initiatePayment} disabled={disabled} className="disabled:bg-blue-300 flex text-white bg-blue-400 hover:bg-blue-500 border-0 py-1 px-2 focus:outline-none rounded text-lg">
              Place Order
            </button>
          {/* </Link> */}
          <button
            onClick={clearCart}
            className="flex text-white bg-blue-400 border-0 py-1 px-2 focus:outline-none hover:bg-blue-500 rounded text-lg"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
