import React from 'react';

const OrderStatusSlider = ({ currentStatus }) => {
  const statusList = ['Order Placed', 'Processing', 'Shipped', 'Delivered'];

  const getStatusColor = (status) => {
    if (status === currentStatus) {
      return 'text-blue-500';
    } else if (statusList.indexOf(status) <= statusList.indexOf(currentStatus)) {
      return 'text-blue-500';
    } else {
      return 'text-gray-500';
    }
  };

  return (
    // <div className="flex justify-between w-full">
    //   {statusList.map((status, index) => (
    //     <div
    //       key={status}
    //       className={`flex-1 border-t-2 mt-5 flex flex-col items-center ${getStatusColor(status)}`}
    //     >
    //       <div
    //         className={`w-2 h-2 z-10 -mt-1 rounded-full ${getStatusColor(status) === 'text-blue-500'
    //           ? 'bg-blue-500'
    //           : 'bg-gray-500'}`}
    //       />
    //       <div className="mt-1 text-[13px] md:text-base">{status}</div>
    //     </div>
    //   ))}
    // </div>

    <div className='md:flex md:w-full'>
      <ol class="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
        <li class="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
          <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
            <svg
              aria-hidden="true"
              class="w-4 h-4 mr-2 sm:w-5 sm:h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Order placed
          </span>
        </li>
        <li class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
          <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
            <span class="mr-2">2</span>
            Processing 
          </span>
        </li>
        <li class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
          <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
            <span class="mr-2">3</span>
            Shipped
          </span>
        </li>
        <li class="flex items-center">
          <span class="mr-2">4</span>
          Deilievred
        </li>
      </ol>
    </div>
  );
};

export default OrderStatusSlider;