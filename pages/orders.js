
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Orders = () => {
  const router = useRouter()
  const [orders, setOrders] = useState([])
  useEffect(() => {
    const fetchOrders = async () => {
      let myuser = JSON.parse(localStorage.getItem("myuser"))
      let a = await fetch(`/api/myorders`, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: myuser.token }),
      });
      let res = await a.json();
      if(res.success){
        setOrders(res.orders.reverse())
      } else {
        toast.error(res.message, {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        localStorage.removeItem("myuser")
        setTimeout(()=>{
          router.push("/")
        }, 2000)
      }
    }
    if(!localStorage.getItem("myuser")){
      router.push("/")
    } else {
      fetchOrders()
    }
    
  }, [router.query, router])

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
        theme="light"
      />
      <div className="container w-11/12 my-10 mx-auto">
        <h1 className="font-bold text-2xl text-center mb-5">My Orders</h1>
        <div className="items flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light text-surfacetext-white">
                  <thead className="border-b border-neutral-200 font-medium :border-white/10">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        #Order Id
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Order Amount
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((item) => {
                      return (

                        <>
                          <tr key={item._id} className="border-b border-neutral-200 dark:border-white/10">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">{item.orderId}</td>
                            <td className="whitespace-nowrap px-6 py-4">{item.email}</td>
                            <td className="whitespace-nowrap px-6 py-4">{item.amount}</td>
                            <td className="whitespace-nowrap px-6 py-4"><Link className="font-semibold text-blue-300 hover:text-blue-400" href={`/order?id=${item._id}`}>Details</Link></td>
                          </tr>
                        </>
                      )
                    }
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;

