import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Cheatsheet = () => {
  return (
    <div>
      
      <section className="text-gray-600 body-font">

        <div className="container px-5 py-24 mx-auto">

          <div className="flex flex-wrap -m-4">

            <Link href={'/products/nameofbook'} legacyBehavior>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-1/2 cursor-pointer">
                <div className="block relative rounded overflow-hidden">
                  <Image alt="ecommerce" width={420} height={260} className="w-auto h-[16vh] md:h-[30vh] inline-block md:block" src="/../public/cheatsheet/bootstrap.png"/>
                </div>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">Bootstrap</h2>
                  <p className="mt-1">&#x20B9; 416.00</p>
                </div>
              </div>
            </Link>

            <Link href={'/products/nameofbook'} legacyBehavior>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-1/2 cursor-pointer">
                <a className="block relative rounded overflow-hidden">
                  <Image alt="ecommerce" width={420} height={260} className="w-auto h-[16vh] md:h-[30vh] inline-block md:block" src="/../public/cheatsheet/httpsc.png"/>
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">HTTP Status Code Cheatsheet</h2>
                  <p className="mt-1">&#x20B9; 421.15</p>
                </div>
              </div>
            </Link>

            <Link href={'/products/nameofbook'} legacyBehavior>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-1/2 cursor-pointer">
                <a className="block relative rounded overflow-hidden">
                  <Image alt="ecommerce" width={420} height={260} className="w-auto h-[16vh] md:h-[30vh] inline-block md:block" src="/../public/cheatsheet/jquery.png"/>
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">JQuery Cheatsheet</h2>
                  <p className="mt-1">&#x20B9; 412.00</p>
                </div>
              </div>
            </Link>

            <Link href={'/products/nameofbook'} legacyBehavior>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-1/2 cursor-pointer">
                <a className="block relative rounded overflow-hidden">
                  <Image alt="ecommerce" width={420} height={260} className="w-auto h-[16vh] md:h-[30vh] inline-block md:block" src="/../public/cheatsheet/js.png"/>
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">Javascript Cheatsheet</h2>
                  <p className="mt-1">&#x20B9; 418.40</p>
                </div>
              </div>
            </Link>

            <Link href={'/products/nameofbook'} legacyBehavior>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-1/2 cursor-pointer">
                <a className="block relative rounded overflow-hidden">
                  <Image alt="ecommerce" width={420} height={260} className="w-auto h-[16vh] md:h-[30vh] inline-block md:block" src="/../public/cheatsheet/mysql.png"/>
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">MYSQL Cheatsheet</h2>
                  <p className="mt-1">&#x20B9; 416.00</p>
                </div>
              </div>
            </Link>

            <Link href={'/products/nameofbook'} legacyBehavior>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-1/2 cursor-pointer">
                <a className="block relative rounded overflow-hidden">
                  <Image alt="ecommerce" width={420} height={260} className="w-auto h-[16vh] md:h-[30vh] inline-block md:block" src="/../public/cheatsheet/php.png"/>
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">PHP Cheatsheet</h2>
                  <p className="mt-1">&#x20B9; 421.15</p>
                </div>
              </div>
            </Link>

            <Link href={'/products/nameofbook'} legacyBehavior>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-1/2 cursor-pointer">
                <a className="block relative rounded overflow-hidden">
                  <Image alt="ecommerce" width={420} height={260} className=" w-auto h-[16vh] md:h-[30vh] inline-block md:block" src="/../public/cheatsheet/python.png"/>
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">Python Cheatsheet</h2>
                  <p className="mt-1">&#x20B9; 412.00</p>
                </div>
              </div>
            </Link>

            <Link href={'/products/nameofbook'} legacyBehavior>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-1/2 cursor-pointer">
                <a className="block relative  rounded overflow-hidden">
                  <Image alt="ecommerce" width={200} height={260} className="w-auto h-[16vh] md:h-[30vh] block" src="/../public/cheatsheet/wp.png"/>
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">Web Programming Cheatsheet</h2>
                  <p className="mt-1">&#x20B9; 418.40</p>
                </div>
              </div>
            </Link>

          </div>

        </div>

      </section>

    </div>
  )
}

export default Cheatsheet