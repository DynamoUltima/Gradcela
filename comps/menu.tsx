import { Menu, Transition } from "@headlessui/react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";



const MenuBar = () => {
    const { data: session } = useSession();

    const router = useRouter()
    const handleLogout = async () => {
        const data = await signOut({ redirect: false, });
        console.log('sign out')
        console.log(data)
        router.push('/authPage')

    }



    return (
        <div className="flex flex-row justify-between items-center">
            <Link href="/businessPage">

                {/* { session?.user.data.role.includes('provider')  ?<button className="font-semibold text-sm p-2 hover:text-purple-600 pointer-events: auto; ">
                Switch to Services
            </button>:<></>} */}
            </Link>






            <Menu>
                {({ open }) => (
                    <>
                        {session ? 
                        (<Menu.Button className="h-14 w-14 p-4 text-white rounded-full flex items-center justify-center bg-[#2DD4BF]  mr-7">
                            {session?.user.data.firstName.charAt(0) ?? "" + "" + session?.user.data.lastName.charAt(0) ?? ""}
                        </Menu.Button>) : null}


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
                                        {session?.user.data.email}
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
                                    {/* <Menu.Item
                                        as="span"
                                        disabled
                                        className="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 cursor-not-allowed opacity-50"
                                    >
                                        New feature (soon)
                                    </Menu.Item> */}
                                    {/* <Menu.Item>
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
                                    </Menu.Item> */}
                                </div>

                                <div className="py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <div
                                                onClick={handleLogout}
                                                className={`${active
                                                    ? "bg-gray-100 text-gray-900"
                                                    : "text-gray-700"
                                                    } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                            >
                                                Sign out
                                            </div>
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
