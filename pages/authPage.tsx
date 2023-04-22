import { useEffect, useState } from "react"; 
// import { LockClosedIcon } from '@heroicons/react/solid';
// import {  LockClosedIcon } from '@heroicons/react/solid' 
import axios from "axios"; 
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import Image from "next/image";
import gradcelaImage from "../assets/images/gradcela logo.png"
import { IAuth } from "../interfaces/interface.auth";

const AuthPage = () => {

    const { data: session } = useSession()
    console.log({ session })
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const router = useRouter();
    console.log('role')
    console.log(session?.user.data.role[0])
    // if (session?.user) {
    //     router.push('/businessPage')


    // }
    if (session?.user.data.role.includes('client')) {
        router.push('/businessPage')
    }

    if (session?.user.data.role.includes('provider')) {
        console.log('true')
        router.push('/service/orderPages')
    }




    const handleLogin = async (e: any) => {
        e.preventDefault()

        try {
            // await login(email,password);
            //  await signIn(email,password)
            console.log({ email, password, text: 'logging' })

            // await signIn(email, password)
               await signIn('credentials', {email,password})
            const data = await signIn("credentials", {
                email: email,
                password: password,
                redirect: false,
                // callbackUrl: "http://localhost:8080/businessPage",
            });
            data;
            console.log('AuthPage')
            console.log(data)
            console.log(session)


            // try {
            //     const response = await axios.post('https://expeed-admin.vercel.app/api/signin', {
            //         // headers: {
            //         //     'Content-Type': 'application/json',
            //         //     // 'Authorization': `Bearer ${token}`
            //         // },
            //         email, password
            //     })
            //     setEmail('');
            //     setPassword('')

            //     console.log('called');
            //     console.log(response.data)

            //     const signInResponse: IAuth = response.data

            //     if(signInResponse.token){
            //         router.push('/businessPage')
            //     }



            // } catch (error) {
            //     console.log(error)
            // }




            // console.log(session?.user.data.role)
            // if (session?.user.data.role.includes('client')) {
            //     router.push('/businessPage')
            // }

            // if (session?.user.data.role.includes('provider')) {
            //     router.push('/serviceProviders/orderPages')
            // }


        } catch (error) {
            console.log('error')
            console.log(error);

        }


        // console.log({ email, password })

    }

    // const signIn = async (email: String, password: String) => {
    //     console.log('sign in ')
    //     console.log(email, password)

    //     try {
    //         const response = await axios.post('http://localhost:3000/api/signin', {
    //         // headers: {
    //         //     'Content-Type': 'application/json',
    //         //     // 'Authorization': `Bearer ${token}`
    //         // },
    //          email, password 
    //     })

    //     console.log('called');
    //     console.log(response.data)


    //     } catch (error) {
    //         console.log(error)
    //     }

    //     // const signInResponse: ISignin = response.data
    //     // console.log(' called')
    //     // console.log(signInResponse)
    //     // console.log(response);
    //     // // console.log(signInResponse.token)



    //     // if (signInResponse.token) {
    //     //     setToken(signInResponse.token)
    //     //     setisAuthenticated(true)
    //     //     setUser(signInResponse.data)
    //     //     setLoading(false)
    //     //     router.push('/addClients')
    //     // }

    // }




    return (
        <>

            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        {/* <img
                            className="mx-auto h-12 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                            alt="Workflow"
                        /> */}
                        <div className='mx-auto flex justify-center relative'><Image alt="logo" width={150} height={100} layout="contain" src={gradcelaImage} /></div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                        <p className="mt-2 text-center text-sm text-gray-600">

                            <a className="font-medium text-lg text-[#2DD4BF] hover:text-[#2DD4BF]">
                                Gradcela
                            </a>
                        </p>
                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[#2DD4BF] focus:border-[#2DD4BF] focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[#2DD4BF] focus:border-[#2DD4BF] focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-[#2DD4BF] focus:ring-[#2DD4BF] border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                {/* href="/dashboard"  */}
                                <a className="font-medium text-[#2DD4BF] hover:text-[#2DD4BF]">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                // onSubmit={handleSignUp}
                                onClick={handleLogin}
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#2DD4BF] hover:bg-[#2DD4BF] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"

                            >
                                {/* <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <LockClosedIcon  className="h-5 w-5 text-[#14b8a6] group-hover:text-[#14b8a6]" aria-hidden="true" />
                                </span> */}
                                Sign in
                            </button>
                        </div>


                        <div className="text-sm flex items-center py-4">
                            <Link href={'/signupPage'}>
                                <p className="font-medium text-[#2DD4BF] hover:text-[#2DD4BF]">
                                    Create an account
                                </p>
                            </Link>
                        </div>


                    </form>
                </div>
            </div>
        </>

    );
}

export default AuthPage;