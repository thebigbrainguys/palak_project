import "@/styles/globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar'



export default function App({ Component, pageProps }) {

  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0)
  const [user, setUser] = useState({value: null})
  const [key, setKey] = useState(null)
  const [progress, setProgress] = useState(0)
  const router = useRouter();

  useEffect(()=>{

    // Top loading bar logic
    router.events.on('routeChangeStart', ()=>{
      setProgress(40)
    });
    router.events.on('routeChangeComplete', ()=>{
      setProgress(100)
    });

    
    
    try{
      if(localStorage.getItem("cart")){
        setCart(JSON.parse(localStorage.getItem("cart")))
        saveCart(JSON.parse(localStorage.getItem("cart")))
      }
    }catch(error){
      console.error(error);
      localStorage.clear()
    }
    const myuser = JSON.parse(localStorage.getItem("myuser"));
    if(myuser){
      setUser({value: myuser.token, email: myuser.email})
    }
    setKey(Math.random())
  }, [router.query, router.events])

  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart));
    let subT = 0;
    let keys = Object.keys(myCart)
    for(let i=0; i<keys.length; i++){
      subT += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setSubTotal(subT);
  }

  const addToCart = (itemCode, qty, price, name, size, variant)=>{
    let newCart = {...cart};
    if(newCart[itemCode]){
      newCart[itemCode].qty += qty;
    } else {
      newCart[itemCode] = {qty:1, price, name, size, variant}
    }
    setCart(newCart);
    saveCart(newCart);
    toast.success('Item added to cart!', {
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

  
  const buyNow = (itemCode, qty, price, name, size, variant) => {
    saveCart({})
    let newCart = {}
    newCart[itemCode] = {qty:1, price, name, size, variant};
    
    setCart(newCart);
    saveCart(newCart);
    router.push("/checkout");
  }

  const clearCart = () =>{
    setCart({})
    saveCart({})
  }

  const removeFromCart = (itemCode, qty, price, name, size, variant)=>{
    let newCart = {...cart};
    if(newCart[itemCode]){
      newCart[itemCode].qty -= qty;
    } 
    if(newCart[itemCode].qty <= 0){
      delete newCart[itemCode];
    }
    setCart(newCart);
    saveCart(newCart);
  }

  const logout = async ()=>{
    const message = await fetch("/api/logout");
    localStorage.removeItem("myuser")
    setKey(Math.random())
    setUser({value: null, email: null})
    router.push("/login")
  }

  return( 
  <>
    <Head>
        <title>Gen-Z Wears</title>
        <meta name="description" content="Gen-Z Wears - Wearables by Gen-Z" />
      </Head>
      <LoadingBar
        color='#33C1FF'
        waitingTime={400}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    {key && <Navbar logout={logout} user={user} key={key} cart={cart} addToCart={addToCart} clearCart={clearCart} removeFromCart={removeFromCart} subTotal={subTotal} />}
    <Component setKey={setKey} user={user} ToastContainer={ToastContainer} buyNow={buyNow} cart={cart} addToCart={addToCart} clearCart={clearCart} removeFromCart={removeFromCart} subTotal={subTotal} {...pageProps} />;
    <Footer/>
  </>)
}
