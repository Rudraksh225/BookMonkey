import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import Router from 'next/router';

const Login = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    // Check authentication status
    const token = localStorage.getItem('token');

    if (token) {
      // Redirect to home page if authenticated
      Router.push('/')
    }
  }, []);

  const onChangeHandler = (e) => {
    if(e.target.name == "email"){
      setEmail(e.target.value)
    }
    if(e.target.name == "password"){
      setPassword(e.target.value)
    }
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const data = {email, password}
    console.log("data:",data)
    let res = await fetch('http://localhost:3000/api/login',{
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
      },
      body:JSON.stringify(data),
    })
    
    let response = await res.json();
    console.log(response.token)

    if(response.success == true){
      localStorage.setItem("token",response.token)
      Cookies.set('isLoggedIn', 'true');  //Set cookie isLoggedIn to true when user succesfully logged in
      toast.success('Logged in succesfully', {
        position: "bottom-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,  
        theme: "light",
        });
        
        
        window.location.href = '/'
    }
    else if(response.success == false){
      toast.error(`${response.error}`, {
        position: "bottom-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    console.log(res.status)
  }


  return (
    <div>
      <div className="flex flex-col justify-center min-h-full px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <Image className="w-auto h-10 mx-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" width={40} height={50} alt="Your Company"/> */}
          <Image
            src="/../public/logohc.png"
            className="w-auto h-12 mx-auto"
            width={200}
            height={40}
            alt="logo"
          />
          <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={onSubmitHandler} method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={onChangeHandler}
                  autoComplete="email"
                  required
                  className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <Link
                    href={"/forgotpassword"}
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={onChangeHandler}
                  autoComplete="current-password"
                  required
                  className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-sm text-center text-gray-500">
            Not a member?
            <Link
              href={"/signup"}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              {" "}
              Sign Up
            </Link>
          </p>
        </div>
      </div>

      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        limit={2}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default Login