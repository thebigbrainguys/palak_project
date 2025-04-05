import { useRouter } from 'next/router';
import Category from '@/models/category'
import mongoose from 'mongoose';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = ({ user, categories }) => {
    const router = useRouter()

    const [title, setTitle] = useState('')
    const [slug, setSlug] = useState('')
    const [category, setCategory] = useState('flowers')
    const [size, setSize] = useState('')
    const [colour, setColour] = useState('')
    const [price, setPrice] = useState('')
    const [availableQuantity, setAvailableQuantity] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')

    const handleChange = (e) => {
        if (e.target.name == 'title') {
            setTitle(e.target.value)
        } else if (e.target.name == 'slug') {
            setSlug(e.target.value)
        } else if (e.target.name == 'category') {
            setCategory(e.target.value)
        } else if (e.target.name == 'size') {
            setSize(e.target.value)
        } else if (e.target.name == 'colour') {
            setColour(e.target.value)
        } else if (e.target.name == 'availableQuantity') {
            setAvailableQuantity(e.target.value)
        } else if (e.target.name == 'image') {
            setImage(e.target.value)
        } else if (e.target.name == 'description') {
            setDescription(e.target.value)
        } else if (e.target.name == 'price') {
            setPrice(e.target.value)
        }
    }


    const addProduct = async () => {
        let data = { token: user.value, title, category, size, colour, price, availableQuantity, image, description, slug }

        let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addproduct`, {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        a = await a.json();
        if (a.success) {
            toast.success("Product Added!", {
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
            toast.error(a.message, {
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
    }



    return (
        <div>
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
                theme="light" />
            <div className="bg-white border-4 rounded-lg shadow relative m-10">

                <div className="flex items-start justify-between p-5 border-b rounded-t">
                    <h3 className="text-xl font-semibold">
                        Add Product
                    </h3>
                </div>

                <div className="p-6 space-y-6">
                    <form action="">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="title" className="text-sm font-medium text-gray-900 block mb-2">Title</label>
                                <input value={title} onChange={handleChange} type="text" name="title" id="title" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Solid Shirt" required />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="slug" className="text-sm font-medium text-gray-900 block mb-2">Slug</label>
                                <input value={slug} onChange={handleChange} type="text" name="slug" id="slug" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="type-category-colour-size" required />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="category" className="text-sm font-medium text-gray-900 block mb-2">Category</label>
                                {/* <input value={category} onChange={handleChange} type="text" name="category" id="category" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="thsirt, hoodie, shoes, mugs" required /> */}
                                <select id="category" type="text" name='category' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" required>
                                    {categories.map((item, index) => {
                                        return <option key={index} value={item}>{item}</option>
                                    })}
                                </select>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="size" className="text-sm font-medium text-gray-900 block mb-2">Size</label>
                                <input value={size} onChange={handleChange} type="text" name="size" id="size" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="S, M, L, XL, XXL" required />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="colour" className="text-sm font-medium text-gray-900 block mb-2">Colour</label>
                                <input value={colour} onChange={handleChange} type="text" name="colour" id="colour" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="green, blue, gray, red" required />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="price" className="text-sm font-medium text-gray-900 block mb-2">Price</label>
                                <input value={price} onChange={handleChange} type="number" name="price" id="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="₹1000" required />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="availableQuantity" className="text-sm font-medium text-gray-900 block mb-2">Available Quantity</label>
                                <input value={availableQuantity} onChange={handleChange} type="number" name="availableQuantity" id="availableQuantity" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="10-100" required />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="image" className="text-sm font-medium text-gray-900 block mb-2">Image</label>
                                <input value={image} onChange={handleChange} type="text" name="image" id="image" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="/thirts/plaintshirt.jpg" required />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="description" className="text-sm font-medium text-gray-900 block mb-2">Description</label>
                                <textarea value={description} onChange={handleChange} id="description" name='description' rows="6" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" placeholder="Details"></textarea>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="p-6 border-t border-gray-200 rounded-b">
                    <button onClick={addProduct} className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Add</button>
                </div>

            </div>
        </div>
    )
}

export default AddProduct

export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGO_URI);
    }
    let categories = []
    let foundCategories = await Category.find();
    for (let category of foundCategories) {
        categories.push(category['categoryName'])
    }
    return { props: { categories: categories } }
}