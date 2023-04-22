import { Menu, Transition } from "@headlessui/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";



const MenuBar = () => {
  const {data :session} = useSession();



    return (
        <div className="flex flex-row justify-between items-center">
            <Link href="/businessPage">
            
            {/* { session?.user.data.role.includes('provider')  ?<button className="font-semibold text-sm p-2 hover:text-purple-600 pointer-events: auto; ">
                Switch to Services
            </button>:<></>} */}
            </Link>


            <Menu >
                {({ open }) => (
                    <>
                        <button className="p-2 hover:text-purple-600 ">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"></path></svg>
                        </button>

                        <Menu.Button className="p-2 mr-7 hover:text-purple-600 ">

                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </Menu.Button>

                        <Transition
                            show={open}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items
                                static
                                className="absolute right-10 z-50 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                            >
                                <div className="px-4 py-3">
                                    <p className="text-sm leading-5">Signed in as</p>
                                    <p className="text-sm font-medium leading-5 text-gray-900 truncate">
                                        tom@example.com
                                    </p>
                                </div>

                                <div className="py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#account-settings"
                                                className={`${active
                                                    ? "bg-gray-100 text-gray-900"
                                                    : "text-gray-700"
                                                    } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                            >
                                                Account settings
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#support"
                                                className={`${active
                                                    ? "bg-gray-100 text-gray-900"
                                                    : "text-gray-700"
                                                    } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                            >
                                                Support
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item
                                        as="span"
                                        disabled
                                        className="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 cursor-not-allowed opacity-50"
                                    >
                                        New feature (soon)
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#license"
                                                className={`${active
                                                    ? "bg-gray-100 text-gray-900"
                                                    : "text-gray-700"
                                                    } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                            >
                                                License
                                            </a>
                                        )}
                                    </Menu.Item>
                                </div>

                                <div className="py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#sign-out"
                                                className={`${active
                                                    ? "bg-gray-100 text-gray-900"
                                                    : "text-gray-700"
                                                    } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                            >
                                                Sign out
                                            </a>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </>
                )}

            </Menu>



            <Menu>
                {({ open }) => (
                    <>
                        <Menu.Button className="h-14 w-14 p-4 rounded-full flex items-center bg-purple-600 mr-7">
                            JD
                        </Menu.Button>
                        <Transition
                            show={open}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items
                                static
                                className="absolute right-10 z-50 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                            >
                                <div className="px-4 py-3">
                                    <p className="text-sm leading-5">Signed in as</p>
                                    <p className="text-sm font-medium leading-5 text-gray-900 truncate">
                                        tom@example.com
                                    </p>
                                </div>

                                <div className="py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#account-settings"
                                                className={`${active
                                                    ? "bg-gray-100 text-gray-900"
                                                    : "text-gray-700"
                                                    } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                            >
                                                Account settings
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#support"
                                                className={`${active
                                                    ? "bg-gray-100 text-gray-900"
                                                    : "text-gray-700"
                                                    } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                            >
                                                Support
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item
                                        as="span"
                                        disabled
                                        className="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 cursor-not-allowed opacity-50"
                                    >
                                        New feature (soon)
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#license"
                                                className={`${active
                                                    ? "bg-gray-100 text-gray-900"
                                                    : "text-gray-700"
                                                    } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                            >
                                                License
                                            </a>
                                        )}
                                    </Menu.Item>
                                </div>

                                <div className="py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#sign-out"
                                                className={`${active
                                                    ? "bg-gray-100 text-gray-900"
                                                    : "text-gray-700"
                                                    } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                            >
                                                Sign out
                                            </a>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </>
                )}

            </Menu>



        </div>
    );
}


export default MenuBar;
