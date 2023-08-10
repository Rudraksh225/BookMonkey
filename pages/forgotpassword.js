import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Router from 'next/router'

const Forgotpassword = () => {

    
  useEffect(() => {
    // Check authentication status
    const token = localStorage.getItem('token');

    if (token) {
      // Redirect to home page if authenticated
      Router.push('/')
    }
  }, []);
  

  return (
    <div>

      <div className="flex flex-col justify-center min-h-full px-6 py-12 lg:px-8">
      
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <Image className="w-auto h-10 mx-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" width={40} height={50} alt="Your Company"/> */}
          <Image src='/../public/logohc.png' className="w-auto h-12 mx-auto" width={200} height={40} alt='logo' />
          <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">Forgot Password</h2>
        </div>
      
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
              <div className="mt-2">
                <input id="email" name="email" type="email" autocomplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>
        
            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Continue</button>
            </div>
          </form>
        
        </div>
      </div>
    </div>
  )
}

export default Forgotpassword