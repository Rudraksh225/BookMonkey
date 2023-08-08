import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { store } from '../redux/store'
import { Provider } from 'react-redux'
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {

  const [user, setUser] = useState(null)
  const [key, setKey] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token){
      setUser(token);
      setKey(Math.random())
      
    }
  },[])

  const logout = () => {
    localStorage.removeItem("token")
    setUser(null)
    setKey(Math.random())
    toast.success(`Logged out sucessfully`, {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  

  return <>
    <Provider store={store}>
      <Navbar logout={logout} user={user} key={key} />
      <Component {...pageProps} />
      <Footer/>
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
    </Provider>
  </>
}
