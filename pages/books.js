import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Product from "../models/Product"
import mongoose from "mongoose";  

const Books = ({ products }) => {

  return (
    <div>

      <section className="px-8 text-gray-600 lg:px-14 md:px-120 body-font">

        <div className="container px-5 py-24 mx-auto">

          <div className="flex flex-wrap -m-4">

            { products.map((item)=>{  
              return <Link passHref={true} key={item._id} href={`/product/${item.slug}`} legacyBehavior>
                  <div className="w-1/2 p-2 text-center cursor-pointer lg:w-1/4 md:w-1/2">
                    <div className="flex justify-center ">
                      <Image alt="ecommerce" width={600} height={600} className="w-auto h-[18vh] md:h-[28vh] lg:h-[32vh] inline-block md:block" src={item.img}/>
                    </div>
                    <div className="mt-5 ">
                      <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">{item.category}</h3>
                      <h2 className="text-lg font-medium text-gray-900 title-font">{item.title}</h2>
                      <p className="mt-1 ">&#x20B9; {item.price}</p>
                      {item.availableQty == 1 && <p className='mb-2 text-red-600'>Only 1 available in stock</p>}
                    </div>
                  </div>
                </Link> 
              })
            }
  
          </div>

        </div>

      </section>

    </div>
  )
}

export const getServerSideProps = async () => {
  
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI);
  }

  let products = await Product.find({ category: 'book' })

  return { props: { products: JSON.parse(JSON.stringify(products)) } }
}

export default Books 