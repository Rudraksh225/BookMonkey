import { addToCart, clearCart } from '@/redux/slices/cartSlice'
import Image from 'next/image'
import {useRouter} from 'next/router'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Product from "../../models/Product"
import mongoose from "mongoose";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Slug = (product) => {

  const productinfo = product.product
  const router = useRouter()
  const { slug } = router.query
  
  const [pin, setPin] = useState();
  const [serviceAbility, setServiceAbility] = useState();

  const checkServiceAbility = async() => {
    let pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`)
    let pinJson = await pins.json()
    if(pinJson.includes(parseInt(pin))){
      setServiceAbility(true)
    }
    else{
      setServiceAbility(false)
    }
  }

  const onChangePin = (e)=>{
    setPin(e.target.value)
  }

  

  const dispatch = useDispatch();

  const buyNow = (productinfo) => {
    dispatch(clearCart());
    dispatch(addToCart(productinfo));
    // router.push('./checkout') //Currently paused this.   ********* This caused an error, solve this **********  **********~~~~~~~~~*********
  }

  const addCartNotify = (title) => toast.success(`${title} added to cart`, {
    position: "bottom-center",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "light",
    });

  // const handleAddToCart = (product) => {
  //   console.log("Function called")
  //   dispatch(addToCart(product))
  // }

  return (
    <>
      <section className="overflow-hidden text-gray-600 body-font">

      {/* <div className="flex flex-wrap mx-auto lg:w-4/5"></div> */}

        <div className="container flex flex-wrap px-8 py-12 mx-auto ring-blue-400 lg:w-4/5">

            <Image alt="ecommerce" className=" lg:w-[39vh] md:w-[25vh] w-[25vh] lg:h-auto mx-auto lg::ml-5 lg:max-w-[40vh] max-h-[90vh] object-fill object-center rounded" src={productinfo.img} width={400} height={100}/> 
            <div className="w-full mt-10 lg:w-1/2 lg:py-6 lg:ml-40 lg:mt-0">
              <h2 className="text-sm tracking-widest text-gray-500 title-font">BRAND NAME</h2>
              <h1 className="mb-1 text-2xl font-medium text-gray-900 md:text-3xl title-font">{productinfo.title}</h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-blue-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-blue-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-blue-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-blue-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-blue-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="ml-3 text-gray-600">4 Reviews</span> 
                </span>
              </div>
              <p className="mt-10 leading-relaxed">{productinfo.description}</p>
              <div className="pb-5 mt-6 mb-5 border-b-2 border-blue-100 "> </div>
              <div className="flex justify-between">

                <span className="lg:w-[10vh] mt-1 text-xl font-medium text-gray-900 title-font md:mt-0 md:text-2xl">&#8377; {productinfo.price}</span>

                <button onClick={() => buyNow(productinfo)} className='w-auto px-2 py-2 -mr-4 text-sm text-white bg-blue-500 border-0 rounded right-3 md:mr-0 md:px-8 md:py-3 lg:text-base lg:ml-36 md:ml-72 focus:outline-none'>Buy Now</button> 

                <button onClick={() => {dispatch(addToCart(productinfo)); addCartNotify(productinfo.title);}} className="flex items-center justify-center w-auto px-3 py-2 text-sm text-white bg-blue-500 border-0 rounded md:mr-0 -mr-7 h-9 md:w-auto md:h-auto md:ml-auto focus:outline-none hover:bg-blue-600 md:text-base">
                  Add To Cart <Image src='/../public/addtocart.png' alt='Add to cart' width={40} height={25} className='w-5 h-5 ml-5 md:w-25 md:h-25'/>
                </button>
                <button className="inline-flex items-center justify-center w-8 h-8 p-0 ml-4 text-gray-500 bg-gray-200 border-0 rounded-full lg:w-10 lg:h-10">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
              <div className="flex mt-6 space-x-2 text-sm pin">
                <input type="text" onChange={onChangePin} className='px-2 border-2 border-blue-500 rounded-md outline-blue-500' placeholder='Pincode availability'/>
                <button onClick={checkServiceAbility} className='px-6 py-2 mx-auto text-base text-white bg-blue-500 border-0 rounded focus:outline-none hover:bg-blue-600'>Check</button>
              </div>
              { !serviceAbility && serviceAbility != null && <div className="mt-3 text-red-700">
                Sorry! We do not deliver to this pinode yet
              </div>}
              { serviceAbility && serviceAbility != null && <div className="mt-3 text-green-700">
                Yay! This pincode is serviceable
              </div>}
            </div>
          
        </div>
        <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        limit={2}
        pauseOnFocusLoss
        pauseOnHover
        theme="light"
      />
      </section>
    </>
  )
}

export async function getServerSideProps(context) {
  
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI);
  }

  let product = await Product.findOne({ slug: context.query.slug })

  // return { props: { product } }
  return { props: { product: JSON.parse(JSON.stringify(product)) } }
}

export default Slug