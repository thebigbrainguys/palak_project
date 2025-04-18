import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'


const Dashboard = () => {
    const router = useRouter()
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const getCategories = async () => {
            let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getProductCategories`);
            res = await res.json();
            setCategories(res)
        }
        getCategories()
    }, [router])


    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Welcome Admin!</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably havent heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                    </div>
                    <div className="flex flex-wrap">
                        {categories.map((category) => {
                            return (
                                    <div key={category} className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                                        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">{category}</h2>
                                        <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                                        <Link href={`/admin/viewcategory/${category.charAt(0).toLowerCase()+category.slice(1,)}`} className="text-indigo-500 inline-flex items-center">Update Product
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </Link>
                                    </div>
                            )
                        })}
                    </div>
                    <Link href={"/admin/addproduct"}><button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Add New</button></Link>
                </div>
            </section>
        </div>
    )
}

export default Dashboard