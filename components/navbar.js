import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsCrosshair } from "react-icons/bs";
import { CiShoppingCart, CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { IoIosCloseCircle } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { useRouter } from "next/router";

const Navbar = ({logout, user, cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false)


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const ref = useRef();

  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
    setIsOpen(false);
  };

  return (
    <header className="text-gray-600 body-font sticky top-0 bg-white z-10">
      <nav className="py-2 shadow-lg ">
        <div className="container mx-auto flex items-center justify-between px-5 lg:px-8">
          <div className="text-2xl font-bold font-serif">
            <Link className="flex flex-row items-center space-x-3" href="/">
              <Image
                className="md:w-14 w-11 rounded-xl"
                src="/logo.png"
                width={100}
                height={100}
                alt="logo"
              />
              <h1 className="text-lg md:text-xl lg:text-2xl text-blue-400">
                Gen-Z Wears
              </h1>
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-2xl focus:outline-none"
            >
              {isOpen ? <BsCrosshair /> : <GiHamburgerMenu />}
            </button>
          </div>
          {/* <div className={`md:justify-center  space-x-7 font-bold md:flex ${isOpen ? 'flex flex-col' : 'hidden'} space-y-5 md:flex-row md:items-center`}> */}
          <div
            className={`md:flex md:flex-row md:space-y-0 md:items-center md:space-x-7 font-bold ${
              isOpen ? "flex flex-col space-y-5" : "hidden"
            }`}
          >
            <Link href="/" onClick={closeMenu} passHref>
              <span className=" hover:text-blue-400 cursor-pointer">Home</span>
            </Link>
            <Link href="/tshirts" onClick={closeMenu} passHref>
              <span className=" hover:text-blue-400 cursor-pointer">
                T-Shirts
              </span>
            </Link>
            <Link href="/hoodies" onClick={closeMenu} passHref>
              <span className=" hover:text-blue-400 cursor-pointer">
                Hoodies
              </span>
            </Link>
            <Link href="/mugs" onClick={closeMenu} passHref>
              <span className=" hover:text-blue-400 cursor-pointer">Mugs</span>
            </Link>
            <Link href="/shoes" onClick={closeMenu} passHref>
              <span className=" hover:text-blue-400 cursor-pointer">Shoes</span>
            </Link>
            <Link href="/contact" onClick={closeMenu} passHref>
              <span className=" hover:text-blue-400 cursor-pointer">
                Contact Us
              </span>
            </Link>
            {user.value && <div>
              <MdAccountCircle className="" onMouseOver={()=>{setDropdown(true)}} onMouseLeave={()=>{setDropdown(false)}} size={35}/>
              
              <span onMouseOver={()=>{setDropdown(true)}} onMouseLeave={()=>{setDropdown(false)}}>
              {dropdown && <div className="absolute top-15 right-20 w-36 bg-blue-100 rounded-md px-5 py-3">
                <ul className="">
                  <Link href={"/myaccount"}><li className="hover:text-blue-400">My Account</li></Link>
                  <Link href={"/orders"}><li className="hover:text-blue-400">Orders</li></Link>
                  {user.email == 'admin@genzwears.com' && < Link href={"/admin"}><li className="hover:text-blue-400">Admin Panel</li></Link>}
                  <li onClick={logout} className="hover:text-blue-400 cursor-pointer">Logout</li>
                </ul>
              </div>}
              </span>
            </div>}
            {!user.value && <Link href="/login" onClick={closeMenu} passHref>
              <span className=" hover:text-blue-400 cursor-pointer">
                Login
              </span>
            </Link>}
            <div className="cursor-pointer">
              <span
                onClick={toggleCart}
                className="flex flex-row items-center hover:text-blue-400 cursor-pointer"
              >
                Cart
                <CiShoppingCart size={35} />
              </span>
            </div>
          </div>

          {/* Cart Code */}
          
          <div
            ref={ref}
            className={`w-72 min-h-screen max-h-screen overflow-y-scroll fixed sideCart top-0 right-0 bg-blue-100 p-10 transition-transform translate-x-full transform no-scrollbar`}
          >
            <h2 className="font-bold text-xl text-center mb-5">
              Shopping Cart
            </h2>
            <span
              onClick={toggleCart}
              className="absolute top-3 right-3 cursor-pointer"
            >
              <IoIosCloseCircle size={25} />
            </span>
            <ol className="list-decimal">
              {Object.keys(cart).length === 0 && <div className="flex justify-center">Cart is Empty!</div>}
              {Object.keys(cart).map((k) => {
                return (
                    <li className="my-5" key={k}>
                      <div className="item flex">
                        <div className="w-2/3 font-semibold">{cart[k].name} ({cart[k].size}/{cart[k].variant}) - ₹{cart[k].price}</div>
                        <div className="w-1/3 font-semibold flex justify-center items-center">
                          <CiCircleMinus
                            onClick={()=>{removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}}
                            size={20}
                            className="mx-1 cursor-pointer"
                          />{" "+ cart[k].qty +" "}
                          <CiCirclePlus
                            onClick={()=>{addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}}
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
            <div className="flex justify-center space-x-2 mt-10">
              <Link href="/checkout">
              <button disabled={Object.keys(cart).length === 0} onClick={toggleCart} className="disabled:bg-blue-300 flex text-white bg-blue-300 border-0 py-1 px-2 focus:outline-none hover:bg-blue-400 rounded text-lg">
                Checkout
              </button>
              </Link>
              <button
                onClick={clearCart}
                className="flex text-white bg-blue-300 border-0 py-1 px-2 focus:outline-none hover:bg-blue-400 rounded text-lg"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
