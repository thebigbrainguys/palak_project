import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 body-font">
      <div className="container w-11/12 px-5 py-16 mx-auto text-center">
        
        <Link href="/" className="flex justify-center items-center text-gray-900 mb-4">
          <span className="text-5xl">🌺</span>
          <span className="ml-3 text-2xl font-semibold">Flora Shop</span>
        </Link>
        <p className="text-sm text-gray-500 mb-6">
          Beautiful blooms for every occasion
        </p>

        {/* Navigation Links */}
        <nav className="mb-6">
          <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <li>
              <Link href="/" className="hover:text-pink-600 transition-colors duration-300">Home</Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-pink-600 transition-colors duration-300">Shop</Link>
            </li>
            <li>
              <Link href="/aboutus" className="hover:text-pink-600 transition-colors duration-300">About Us</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-pink-600 transition-colors duration-300">Contact Us</Link>
            </li>
          </ul>
        </nav>

        {/* Copyright */}
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Flora Shop — Designed by 
          <span className="ml-1 text-pink-500">Palak Rangari</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
