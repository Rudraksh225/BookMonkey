import { addToCart } from '@/redux/slices/cartSlice'
import Image from 'next/image'
import {useRouter} from 'next/router'
import { useState } from 'react'
import { useDispatch } from 'react-redux'


const Slug = () => {

  const router = useRouter()
  const { slug } = router.query
  
  const [pin, setPin] = useState();
  const [serviceAbility, setServiceAbility] = useState();

  const product1 = {
    id: 1,
    name:'Energize your mind  ',
    img: '/../public/books/book1.webp',
    price: 458.00,
  }

  const product2 = {
    id: 2,
    name:'Energize your mind',
    img: '/../public/books/book1.webp',
    price: 458.00,
  }

  const checkServiceAbility = async() => {
    let pins = await fetch('http://192.168.2.6:3000/api/pincode')
    let pinJson = await pins.json()
    if(pinJson.includes(parseInt(pin))){
      setServiceAbility(true)
    }
    else{
      setServiceAbility(false)
    }
    console.log(serviceAbility)
  }

  const onChangePin = (e)=>{
    setPin(e.target.value)
  }

  const dispatch = useDispatch();

  // const handleAddToCart = (product) => {
  //   console.log("Function called")
  //   dispatch(addToCart(product))
  // }

  return (
    <>
      <section className="overflow-hidden text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap mx-auto lg:w-4/5">
            <Image alt="ecommerce" className="lg:w-auto w-auto lg:h-[60vh] ml-[10vh] md:ml-5 h-[30vh] object-cover object-center rounded" src="/../public/books/book1.webp" width={400} height={100}/>
            <div className="w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:ml-56 lg:mt-0">
              <h2 className="text-sm tracking-widest text-gray-500 title-font">BRAND NAME</h2>
              <h1 className="mb-1 text-3xl font-medium text-gray-900 title-font">Energize your mind</h1>
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
                <span className="flex py-2 pl-3 ml-3 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="mt-10 leading-relaxed">In this book, bestselling author and life coach Gaur Gopal Das decodes how the mind works. He combines his anecdotal style with analytical research to teach us how to discipline our mind for our greater well-being. Throughout this book, he provides interactive exercises, meditation techniques and worksheets to help us take charge of our mind.</p>
              <div className="flex items-center pb-5 mt-6 mb-5 border-b-2 border-blue-100">
                
              </div>
              <div className="flex justify-between">
                <span className="mt-1 text-xl font-medium text-gray-900 title-font md:mt-0 md:text-2xl">&#8377; 458.00</span>
                <button onClick={() => dispatch(addToCart(product1))} className="flex items-center justify-center w-auto px-3 py-2 ml-12 text-sm text-white bg-blue-500 border-0 rounded h-9 md:w-auto md:h-auto md:ml-auto focus:outline-none hover:bg-blue-600 md:text-base">
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
        </div>
      </section>
    </>
  )
}

export default Slug