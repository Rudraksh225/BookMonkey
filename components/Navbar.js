import { decrementQuantity, incrementQuantity, removeItem } from '@/redux/slices/cartSlice'
import Image from 'next/image'
import Link from 'next/link'
import React, { use, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {

  const dispatch = useDispatch();

  const item = useSelector((state) => state.cart.cartItems)
  const totalQuantity = useSelector((state) => state.cart.cartTotalQuantity)
  const totalAmount = useSelector((state) => state.cart.cartTotalAmount)

  // if (typeof window !== "undefined") {
  //   const localStoreCart = localStorage.getItem("Cart");
  // }

  useEffect(() => {
    const localStoreCart = localStorage.getItem("Cart");
  }, [])

  const removeCartNotify = (title) => toast.success(`${title} removed from cart`, {
    position: "bottom-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

    const addCartNotify = (title) => toast.success(`${title} added to cart`, {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });

  // const decrementQuantity = (id) => {
  //   dispatch(decrementQuantity(id));
  //   addCartNotify;
  // }

  const toggleCart = () =>{
    if(ref.current.classList.contains('translate-x-full')){
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    }
    else if(!ref.current.classList.contains('translate-x-full')){
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }
  }

  // const dispatch = useDispatch();

  const ref = useRef()

  return (
    <div className='hide-unwanted-scroll'>
      
      {/* <div className="flex justify-between px-5 py-4"> */}
      <div className="top-0 flex flex-col items-center justify-center w-full p-3 bg-white shadow-md md:flex-row md:justify-start">
        <div className="ml-5 mr-36 md:mr-16 logo">
          <Link href={'/'}><Image src='/../public/logohc.png' width={200} height={20} alt='logo' /></Link>
        </div>

        <div className="nav ">
          <ul className='flex mt-4 text-sm font-semibold md:space-x-8 space-x-7 md:mt-0 justify-items-center md:text-lg '>
            <Link href={'/books'}><li className=' hover:text-blue-600'>Books</li></Link>
            <Link href={'/cheatsheet'}><li className=' hover:text-blue-600'>CheatSheets</li></Link>
            <Link href={'/paper'}><li className=' hover:text-blue-600'>Papers</li></Link>
            <Link href={'/material'}><li className=' hover:text-blue-600'>material</li></Link>
          </ul>
        </div>

        {/* <div className='absolute lg:ml-[52vw] bg'>
          <Image src="/../public/user.png" width={30} height={30} alt='login'/>
        </div> */}

        <div>

          <div className='absolute mr-2 right-16 top-4'>
            <Link href={'/login'}><Image src="/../public/user.png" width={28} height={28} alt='login'/></Link>
          </div>

          <div className='flex justify-end'>
            <div onClick={toggleCart} className="absolute right-0 mx-4 font-semibold cart top-2">
              <button className='p-2 rounded-3xl hover:bg-blue-300'><Image src='/../public/cart.png' width={30} height={30} alt='cart' /></button>
            </div>
          </div>
          
        </div>
          
      </div>

      <div ref={ref} className="fixed top-0 right-0 z-40 w-64 h-full px-8 py-10 overflow-y-scroll transition-transform transform translate-x-full bg-blue-100 rounded-xl md:w-72 sideCart">

        <h2 className='mt-3 text-2xl font-bold text-center'>Shopping Cart</h2>
        <span onClick={toggleCart} className='absolute text-blue-500 cursor-pointer top-4 right-8 md:top-3 md:right-3'><Image src='/../public/close.png' alt='close' width={30} height={30}/></span>

        <ol className='mt-10 list-decimal'>
          
          {item.map((item) => {
            return (
              <li key={item._id}>
                <div className="flex my-10 item">
                  <div className='w-2/3 font-semibold'>{item.title}</div>
                  <div className='flex items-center justify-center w-1/3 font-semibold'>
                    <Image onClick={() => {dispatch(decrementQuantity(item._id)); removeCartNotify(item.title);}} src='/../public/minus.png' alt='remove' width={20} height={10} className='cursor-pointer'/>
                    <span className='mx-3 pointer-events-none'>{item.quantity}</span>
                    <Image onClick={() => {dispatch(incrementQuantity(item._id)); addCartNotify(item.title)}} src='/../public/add.png' alt='add' width={20} height={15} className='cursor-pointer'/>
                  </div>
                </div>
              </li>);
          })}
        </ol>

        <h2>Total Qunaity: {totalQuantity}</h2>
        <h2>Total Amount: {totalAmount}</h2>

        <Link href={'/checkout'}><button className="flex px-8 py-2 mx-auto mt-16 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">Checkout<Image src='/../public/checkout.png' alt='Checkout' className='ml-4' width={25} height={20}/></button></Link>

        <button className="flex px-8 py-2 mx-auto mt-6 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">Clear cart<Image src='/../public/clearcart.png' alt='Checkout' className='ml-4' width={25} height={20}/></button>

      </div>

      <ToastContainer 
        limit={2}
      />

    </div>
  )
}

export default Navbar