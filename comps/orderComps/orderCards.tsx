import React from 'react';

const OrderCards = () => {
    return (
      
            <div className="flex  flex-wrap overflow-hidden space-x-4 justify-between rounded w-4/5 shadow-lg bg-gray-100 items-center p-10 " >

                <div className="h-full flex flex-col  pt-8 px-4 ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                </div>

                

                    <div className="flex-col mx-9 my-4">
                        {/* <p className="text-gray-700 text-base whitespace-normal ... flex-wrap">
                            Consider your all assigments ...
                        </p> */}

                        <div className=" flex items-center space-x-2  pt-4 pb-2 ">
                            <div className="flex justify-center items-center m-1 font-medium py-2 px-6  rounded-full text-blue-700 bg-blue-100 border border-blue-300 ">
                                <div className="text-xs font-normal leading-none max-w-full flex-initial">Order 1492611</div>
                            </div>

                        </div>
                        {/* <ProgressBar /> */}

                        {/* <div className="flex-grow "><ProgressBar /></div> */}

                    </div>
               
                {/* Time line and Price */}
                <div className=" m-4  items-stretch ">
                    {/* <div className="inline-block"><p>Service Progress</p></div> */}

                    <button className="bg-indigo-500 p-2 text-white text-sm rounded-3xl shadow-md hover:bg-indigo-400"> submit quote</button>
                    <div className="flex space-x-1 mt-4">
                        <div className="flex-grow text-sm">Delivery</div>
                        <div className="flex-grow text-sm">within 20 days</div>
                    </div>

                </div>

                {/* Client Name */}

                {/* <div className="flex items-center justify-items-stretch">
                    <div className="w-8 h-8  ">
                        <div className="group w-full h-full  rounded-full overflow-hidden  text-center bg-purple table cursor-pointer  bg-gray-300">
                            
                            <svg xmlns="http://www.w3.org/2000/svg" className="bg-contain object-cover object-center w-full h-full visible group-hover:hidden text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                        </div>

                    </div>
                    
                    <div className="text-sm ml-4">Peter Parker</div>
                </div> */}



                {/* Order Status */}

                


                    <div className="border border-gray-400 p-2 rounded-r-full flex  items-center rounded-bl-full ml-4 ">
                        <div className="w-2 h-2  ">
                            <div className="group w-full h-full  rounded-full overflow-hidden  bg-purple table cursor-pointer  bg-red-500">
                                {/* <span className="hidden group-hover:table-cell text-white font-bold align-middle">KR</span> */}
                                {/* <div className="bg-red-500 "></div> */}
                            </div>
                        </div>

                        <div className="p-1">Pending</div>

                    </div>
                


                {/* Chat */}
                <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>

                </div>


                <div className=" ">15th Dec 2021</div>





            </div>
       
    );
}

export default OrderCards;