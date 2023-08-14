import React, { useEffect } from 'react'
import Order from "../models/Order"
import mongoose from "mongoose";

const Myorders = () => {

    useEffect(() => {

        // Check authentication status
        const token = localStorage.getItem('token');
    
        if (token==null) {
            // Redirect to home page if authenticated
            Router.push('/')
        }
    }, []);

    return (
        <div className="container pt-12 mx-auto px-14">
            <h1 className="mb-8 text-2xl font-semibold text-center">My Orders</h1>

            <div className=" items">
                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full text-sm font-light text-left">
                                    <thead className="font-medium border-b dark:border-neutral-500">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">
                                        #
                                        </th>
                                        <th scope="col" className="px-6 py-4">
                                        First
                                        </th>
                                        <th scope="col" className="px-6 py-4">
                                        Last
                                        </th>
                                        <th scope="col" className="px-6 py-4">
                                        Handle
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr className="transition duration-300 ease-in-out border-b hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                        <td className="px-6 py-4 font-medium whitespace-nowrap">
                                        1
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">Mark</td>
                                        <td className="px-6 py-4 whitespace-nowrap">Otto</td>
                                        <td className="px-6 py-4 whitespace-nowrap">@mdo</td>
                                    </tr>
                                    <tr className="transition duration-300 ease-in-out border-b hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                        <td className="px-6 py-4 font-medium whitespace-nowrap">
                                        2
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">Jacob</td>
                                        <td className="px-6 py-4 whitespace-nowrap">Thornton</td>
                                        <td className="px-6 py-4 whitespace-nowrap">@fat</td>
                                    </tr>
                                    <tr className="transition duration-300 ease-in-out border-b hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                        <td className="px-6 py-4 font-medium whitespace-nowrap">
                                        3
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">Larry</td>
                                        <td className="px-6 py-4 whitespace-nowrap">Wild</td>
                                        <td className="px-6 py-4 whitespace-nowrap">@twitter</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGO_URI);
    }

    let orders = await Order.find({  });

    // return { props: { product } }
    return { props: { orders: orders } };
}

export default Myorders