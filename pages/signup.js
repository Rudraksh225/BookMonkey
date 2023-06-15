import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Signup = () => {

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Password and Confirm Password do not match.');
      return;
    }

    else{
      setError('it\'s matched')
    }
    
  };

  return (
    <div>

      <div className="flex flex-col justify-center min-h-full px-6 py-12 lg:px-8">
      
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image src='/../public/logohc.png' className="w-auto h-12 mx-auto" width={200} height={40} alt='logo' />
          <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">Sign in to your account</h2>
        </div>
        
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label for="fullName" className="block text-sm font-medium leading-6 text-gray-900">Full Name</label>
              <div className="mt-2">
                <input id="fullName" name="fullName" type="text" autocomplete="name" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>

            <div>
              <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
              <div className="mt-2">
                <input id="email" name="email" type="email" autocomplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>
        
            <div>
              <div className="flex items-center justify-between">
                <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
              </div>
              <div className="mt-2">
                <input id="password" onChange={handlePasswordChange} name="password" type="password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label for="cpassword" className="block text-sm font-medium leading-6 text-gray-900">Conform Password</label>
              </div>
              <div className="mt-2">
                <input id="cpassword" onChange={handleConfirmPasswordChange} name="cpassword" type="password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>

            {error && <p className="text-red-500">{error}</p>}
        
            <div>
              <button type="submit" onClick={handleSubmit} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign Up</button>
            </div>
          </form>
        
          <p className="mt-10 text-sm text-center text-gray-500">
            Already a member?
            <Link href={'/login'} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Sign in</Link>
          </p>
        
        </div>
      
      </div>

    </div>
  )
}

export default Signup