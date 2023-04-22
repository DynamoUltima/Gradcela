
import React from "react";
import Link from "next/link";

const SignUp = () => {
    return (
        <body className="bg-gray-200">
            <main className="">
                <div className="h-screen flex justify-center items-center">
                    <div className="m-7 flex flex-col relative w-full">
                        <div className="bg-green-500 mt-7 shadow-2xl sm:rounded-sm">
                            <div className="p-5 text-white">
                                <h1>Welcome</h1>
                                <p className="text-xs">Expeed login form</p>
                                <p className="sm:mt-32 text-xs">Tailwind is awesome</p>
                            </div>
                        </div>
                        <div
                            className="flex justify-center items-center flex-col shadow-xl bg-white sm:rounded-sm p-8 sm:absolute sm:right-16 md:right-20 lg:right:32 sm:w-64">
                            <h2 className="text-green-500 mb-8 text-lg font-bold">Log In</h2>
                            <div className="avatar shadow-xl rounded-full w-12 h-12 bg-green-500 mb-8">
                                <img src="https://dlohani.com.np/img/logo.svg" />
                            </div>
                            <input placeholder="Enter username" type="text"
                                className="border-b-2 border-grey-600 text-xs p-4 focus:outline-none focus:border-green-500 mb-2 bg-transparent w-full" />
                            <input type="password" placeholder="Enter password"
                                className="w-full border-b-2 border-grey-600 text-xs p-4 focus:outline-none focus:border-green-500" />
                            <Link href="/serviceProviders/orderPages"><button
                                className="bg-green-500 hover:bg-green-600 text-white w-full mt-4 mb-7 font-bold focus:outline-none text-xs p-2">LOGIN</button>
                            </Link>
                            <a href="#" className="text-green-500 mb-5 text-xs">Forgot Password ?</a>
                        </div>
                        <div className="flex flex-row justify-between mt-12 text-xs">
                            {/* <p>Copyright &copy; 2020</p>
                        <p>
                            With <span className="text-red-500 text-2xl">&hearts;</span> by <a
                                className="text-red-500 hover:underline" target="_blank" href="https://dlohani.com.np">Damodar
                                Lohani</a>
                        </p> */}
                        </div>
                    </div>
                </div>
            </main>
        </body>
    );
}

export default SignUp;