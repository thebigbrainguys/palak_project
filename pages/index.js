import Image from "next/image"
import { Inter } from "next/font/google"
import Carousel from "@/components/carousel"
import ProductCard from "@/components/product-card"
import CategoryIcon from "@/components/category-icon"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

import { useState, useEffect } from "react";

import { GoogleGenerativeAI } from "@google/generative-ai";

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const predefinedPrompt = "You are a friendly and knowledgeable virtual assistant for a flower e-commerce website name Flora Shop. Your job is to help users browse flowers, find the perfect bouquet, understand flower meanings, handle delivery questions, and guide them through the purchase process. Always respond politely and concisely. Suggest flowers based on occasion, preferences, and budget when asked.";

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const userMessage = { role: 'user', text: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);

    const fullPrompt = `${predefinedPrompt}${input}`;

    try {
      const result = await model.generateContent(fullPrompt);
      const responseText = await result.response.text();

      const aiMessage = { role: 'ai', text: responseText };
      setMessages([...updatedMessages, aiMessage]);
    } catch (error) {
      console.error('Error:', error);
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
      setInput('');
    }
  };
  const trendingShoes = [
    {
      id: 1,
      name: "Mix Shades",
      price: 400,
      image: "/flowers/mixshades.jpg",
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Pink Roses",
      price: 500,
      image: "/flowers/pinkroses.jpg",
    },
    {
      id: 3,
      name: "Pink Shades",
      price: 500,
      image: "/flowers/pinkshades.jpg",
      badge: "Sale",
    },
    {
      id: 4,
      name: "White Roses",
      price: 400,
      image: "/flowers/whiteroses.jpg",
    },
    {
      id: 5,
      name: "Purple Shades",
      price: 600,
      image: "/flowers/purpleshades.jpg",
    },
  ]

  // Sample data for categories
  const categories = [
    { name: "Purple Shades", icon: "🪻", link: "#" },
    { name: "White Shades", icon: "🌼", link: "#" },
    { name: "Pink Shades", icon: "🌺", link: "#" },
    { name: "Blue Shades", icon: "🪻", link: "#" },
    { name: "Yellow Shades", icon: "🌻", link: "#" },
    { name: "Red Shades", icon: "🌹", link: "#" },
  ]


  return (
    
    <main className={`min-h-screen ${inter.className}`}>
      <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
        <div
          onClick={() => setIsOpen(!isOpen)}
          style={{
            backgroundColor: '#007bff',
            color: '#fff',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            textAlign: 'center',
          }}
        >
          Chat with AI
        </div>
        {isOpen && (
          <div
            style={{
              backgroundColor: '#fff',
              border: '1px solid #ccc',
              borderRadius: '10px',
              width: '400px',
              maxHeight: '400px',
              overflowY: 'auto',
              padding: '10px',
              marginTop: '10px',
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            <div
              style={{
                border: '1px solid #ccc',
                padding: '10px',
                borderRadius: '10px',
                height: '300px',
                overflowY: 'auto',
                marginBottom: '10px',
              }}
            >
              {messages.map((message, index) => (
                <div
                  key={index}
                  style={{
                    marginBottom: '10px',
                    textAlign: message.role === 'user' ? 'right' : 'left',
                  }}
                >
                  <strong>{message.role === 'user' ? 'You' : 'AI'}:</strong> {message.text}
                </div>
              ))}
              {loading && <p>Loading...</p>}
            </div>
            <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter your message"
                style={{
                  flex: '1',
                  padding: '10px',
                  borderRadius: '5px',
                  marginRight: '10px',
                  border: '1px solid #ccc',
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '10px 20px',
                  borderRadius: '5px',
                  backgroundColor: '#007bff',
                  color: '#fff',
                  border: 'none',
                }}
              >
                Send
              </button>
            </form>
            {error && (
              <div style={{ marginTop: '10px', color: 'red' }}>
                <p>{error}</p>
              </div>
            )}
          </div>
        )}
      </div>
      <section className="relative">
        <Carousel />
      </section>


      {/* Shoes Carousel Section */}
      <section className="text-gray-800 body-font py-12 bg-gray-50">
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap w-full mb-8 flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900">Variety of Flowers</h2>
              <p className="lg:w-full leading-relaxed text-gray-600">Express yourself with the lates collections</p>
            </div>
            <Link href="/shop" className="text-primary inline-flex items-center mt-4 md:mt-0">
              View All
              <ChevronRight className="ml-1 w-4 h-4" />
            </Link>
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
      <section className="text-gray-800 body-font py-12 bg-pink-100">
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

    </main>
  )
}

