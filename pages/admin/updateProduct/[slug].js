import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Slug = (props) => {

    const [title, setTitle] = useState('')
    const [pslug, setSlug] = useState('')
    const [category, setCategory] = useState('')
    const [size, setSize] = useState('')
    const [colour, setColour] = useState('')
    const [price, setPrice] = useState('')
    const [availableQuantity, setAvailableQuantity] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')

    const handleChange = (e) => {
        if (e.target.name == 'title') {
            setTitle(e.target.value)
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

    const router = useRouter()
    // const { slug } = router.query
    const slug = props.slug
    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("myuser"));
        if(user.email != 'admin@genzwears.com'){
            router.push(`${process.env.NEXT_PUBLIC_HOST}`)
        }
        
        const fetchProduct = async () => {
            let data = { slug }
            let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getSpecificProduct`, {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            a = await a.json();
            setTitle(a.product.title)
            setSlug(a.product.slug)
            setCategory(a.product.category)
            setSize(a.product.size)
            setColour(a.product.colour)
            setPrice(a.product.price)
            setAvailableQuantity(a.product.availableQuantity)
            setImage(a.product.image)
            setDescription(a.product.description)
        }
        fetchProduct()
    }, [router,slug])


    const updateProductDetails = async () => {
        let user = JSON.parse(localStorage.getItem("myuser"))
        let data = {token: user.token, title, category, size, colour, price, availableQuantity, image, description}

        let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updateProducts`, {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        a = await a.json();
        if (a.success) {
            toast.success("Product Updated!", {
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
            <div className="bg-white border border-4 rounded-lg shadow relative m-10">

                <div className="flex items-start justify-between p-5 border-b rounded-t">
                    <h3 className="text-xl font-semibold">
                        Edit product
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
                                <input value={pslug} readOnly={true} type="text" name="slug" id="slug" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="type-category-colour-size" required />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="category" className="text-sm font-medium text-gray-900 block mb-2">Category</label>
                                <input value={category} onChange={handleChange} type="text" name="category" id="category" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="thsirt, hoodie, shoes, mugs" required />
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
                                <input value={image} onChange={handleChange} type="text" name="image" id="image" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="/thirt/plaintshirt.jpg" required />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="description" className="text-sm font-medium text-gray-900 block mb-2">Description</label>
                                <textarea value={description} onChange={handleChange} id="description" name='description' rows="6" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" placeholder="Details"></textarea>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="p-6 border-t border-gray-200 rounded-b">
                    <button onClick={updateProductDetails} className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Update</button>
                </div>

            </div>
        </div>
    )
}

export default Slug


export async function getServerSideProps(context){
    return {props: {slug: context.query.slug}}
}