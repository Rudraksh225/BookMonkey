import Image from 'next/image';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity, incrementQuantity, removeItem } from '@/redux/slices/cartSlice'
import Link from 'next/link';

const Checkout = () => {

  const item = useSelector((state) => state.cart.cartItems);
  const totalQuantity = useSelector((state) => state.cart.cartTotalQuantity);
  const totalAmount = useSelector((state) => state.cart.cartTotalAmount)
  const dispatch = useDispatch();
  
  return (
    <div className="container mx-auto ">
      
      <h1 className='mt-10 text-2xl font-bold text-center'>Checkout</h1>

      <div className="md:flex mt-20 checkoutContainer md:h-[600px]">

        <div className=" mx-5 mt-3 border-[1px]  drop-shadow-2xl md:h rounded-md overflow-y-scroll md:w-1/2 scrollbar-hide cart">

          <ol>
            {item.map((item) => {
              return(
                <li key={item.id}>
                  <div className='flex justify-center my-10'>

                    <Image src={item.img} alt='Product image' className='ml-5 md:ml-10' height={100} width={100}/>
                    <div className='flex-col self-center'>
                      <div className='mx-4 font-semibold md:mx-12'>{item.name}</div>
                      <div className='flex justify-center'>
                        <Image onClick={() => dispatch(decrementQuantity(item.id))} src='/../public/minus.png' alt='remove' width={20} height={10} className='cursor-pointer'/>
                        <span className='mx-2 font-semibold pointer-events-none md:mx-3'>{item.quantity}</span>
                        <Image onClick={() => dispatch(incrementQuantity(item.id))} src='/../public/add.png' alt='add' width={20} height={15} className='cursor-pointer'/>
                      </div>
                    </div>

                  </div>
                </li>
              )
            })}
          </ol>
        </div>

        <div className="p-5 mx-5 mt-3 bg-blue-100 rounded-md md:mx-3 md:w-1/2 info">

          <div className=' title'>
            <h1 className='text-lg font-[500]'>Payment Details</h1>
            <p className='text-gray-500'>Complete your order by providing the below details:</p>
          </div>

          <div className='info'>

            <label htmlFor="name" className="block mt-4 mb-2 text-sm font-medium">Name</label>
            <input type="text" id="name" name="name" className="w-full px-4 py-3 pl-5 text-sm border rounded-md border-blue " placeholder="Full Name" />
            
            <label htmlFor="email" className="block mt-4 mb-2 text-sm font-medium">E-mail</label>
            <input type="text" id="email" name="email" className="w-full px-4 py-3 pl-5 text-sm border rounded-md border-blue" placeholder="your.email@gmail.com" />

            <label htmlFor="address" className="block mt-4 mb-2 text-sm font-medium">Address</label>
            <textarea id="address" name="address" cols={30} rows={3} className="w-full px-4 py-3 pl-5 text-sm border rounded-md border-blue" placeholder="your address here..." />

            <div className='flex justify-center'>

              <div className='flex-col w-1/2 mx-2'>
                <label htmlFor="phone" className="block mt-4 mb-2 text-sm font-medium">Phone</label>
                <input type='number' id='phone' name='phone' className='w-full px-4 py-3 pl-5 text-sm border rounded-md border-blue' placeholder='10 Digit number' />
    
                <label htmlFor="city" className="block mt-4 mb-2 text-sm font-medium">City</label>
                <input type='text' id='city' className='w-full px-4 py-3 pl-5 text-sm border rounded-md border-blue' placeholder='City' name='City'/>
              </div>

              <div className='flex-col w-1/2 mx-2'>
                <label htmlFor="state" className="block mt-4 mb-2 text-sm font-medium">State</label>
                <input type='state' className='w-full px-4 py-3 pl-5 text-sm border rounded-md border-blue' name='state' id='state' placeholder='State'/>
    
                <label htmlFor="pincode" className="block mt-4 mb-2 text-sm font-medium">Pincode</label>
                <input type='number' className='w-full px-4 py-3 pl-5 text-sm border rounded-md border-blue' name='pincode' id='pincode' placeholder='Pincode'/>
              </div>

            </div>

          </div>

        </div>

      </div>

      <div className='float-right px-3 py-2 mt-8 mr-5 text-lg text-center text-white bg-blue-500 rounded-md p md:mr-10'>
        
        <Link href={'/order'}><button className='flex'><Image src='/../public/pay.png' width={25} height={20} className='mr-1 ' alt='checkout'/> Pay {totalAmount}</button></Link>
      </div>

    </div>
  );
}

export default Checkout