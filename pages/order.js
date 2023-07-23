import React from 'react'
import OrderStatus from '@/components/orderStatus'
import Link from 'next/link'
import Image from 'next/image';
import { useSelector } from 'react-redux';

const Order = () => {

  const item = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.cartTotalAmount);
  const shipping = 10;
  const tax = 20;

  return (
    <div>
      <div className='container px-10 py-8 md:px-24 md:py-14'>

        <div className='pb-6 border-b-2 confirm'>
          <p className='text-lg font-[700] md:text-2xl text-green-500'>Your order has been confirmed</p>
          <p className='font-semibold md:text-lg'>Hi Rudraksh!</p>
          <p className='mt-2 text-sm font-medium text-gray-500'>Your order has been confirmed and will be shipping soon</p>
        </div>
  
        <div className='flex-col pb-6 mt-6 border-b-2 info'>

          <div className='orderid'>
            <p className='mb-3 text-xl font-semibold'>Order #567834</p>
            <Link className='text-gray-600 underline underline-offset-2 hover:text-blue-500 decoration-solid' href="#">View Invoice</Link>
          </div>

          <div className='flex-wrap justify-between mt-8 address lg:flex-nowrap md:flex'>

            <div className='mb-8 md:w-1/2'>
              <p className='font-semibold'>Delivery Address</p>
              <p className='text-sm font-medium text-gray-500 w-52'>A51, Science city, Sola Road, Ahmedabad - 380060</p> 
            </div>

            <div className='mb-8 md:w-1/2'>
              <p className='font-semibold'>Billing Address</p>
              <p className='text-sm font-medium text-gray-500 w-52'>A51, Science city, Sola Road, Ahmedabad - 380060</p> 
            </div>

            <div className='mb-8 md:w-1/2'>
              <p className='font-semibold'>Contact Help</p>
              <p className='text-sm font-medium text-gray-500'>+91 0123456789</p> 
              <p className='text-sm font-medium text-gray-500'>Alpha@gmail.com</p>
            </div>

            <div className='mb-8 md:w-1/2'>
              <p className='font-semibold'>Payment Information</p>

                  <div className='flex items-center'>
                    <div className='inline-block '>
                    <Image
                      alt="card"
                      src='/../public/card.png'
                      height={40}
                      width={50}
                      className='object-center'
                    />
                    </div>
  
                    <div className='inline-block ml-4'>
                      <p className='text-sm font-medium text-gray-500'>Expires 04/25</p>
                      <p className='inline-block text-sm font-medium text-gray-500'>Endig with 5672</p> 
                    </div>
                  </div>
                
            </div>  

          </div>

        </div>
  
        <div className='pb-6 mt-5 border-b-2 products'>

          <div className='items-center md:flex'>

            <div className="products mt-3 border-[1px] h-[400px] drop-shadow-2xl rounded-md overflow-y-scroll md:w-1/2 scrollbar-hide cart">
              <ol>
                {item.map((item) => {
                  return(
                    <li key={item._id}>
                      <div className='flex justify-center my-10'>
              
                        <Image src={item.img} alt='Product image' className='ml-5 md:ml-10' height={100} width={100}/>
                        <div className='flex-col self-center'>
                          <div className='mx-4 font-semibold md:mx-12'>{item.title}</div>
                          <div className='flex justify-center'>
                            
                            <p className=''>Quantity:<span className='mx-2 font-semibold pointer-events-none md:mx-3'>{item.quantity}</span></p>
                            
                          </div>
                        </div>
              
                      </div>
                    </li>
                  )
                })}
              </ol>
            </div>

            <div className='mt-5 mr-3 md:mx-8 md:flex-1 productInfo' >
              <p className='block text-lg font-bold'>Order Essentials</p>
              <table className='w-full table-auto '>
                <tbody>
                <tr>
                  <td className='pt-2 text-base font-medium text-gray-500'>Sub-Total</td>
                  <td className='pt-2 font-medium text-right text-gray-500'>{totalAmount} &#8377;</td>
                </tr>
                <tr>
                  <td className='text-base font-medium text-gray-500'>Shipping</td>
                  <td className='font-medium text-right text-gray-500'>{shipping} &#8377;</td>
                </tr>
                <tr>
                  <td className='text-base font-medium text-gray-500'>Tax</td>
                  <td className='font-medium text-right text-gray-500'>{tax} &#8377;</td>
                </tr>
                <tr className='font-bold '>
                  <td className='pt-2 text-base'>Order-total</td>
                  <td className='pt-2 text-right '>{totalAmount + tax + shipping} &#8377;</td>
                </tr> 
                </tbody>
              </table>
            </div>

          </div>

        </div>
  
        <div className='pt-10 status'>
          <p className='mb-5 text-base font-semibold'>Shipped on 23 august, 2023</p>
          <OrderStatus  currentStatus={'Processing'}/>
        </div>
  
        <div className='support'></div>

      </div>
    </div>
  )
}

export default Order