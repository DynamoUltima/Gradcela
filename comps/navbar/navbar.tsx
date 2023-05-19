import React from "react";
import MenuBar from "../menu";
import Search from "../search";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";
import gradcelaImage from "/assets/svg/GradcelaLogo.svg"

const Navbar = () => {
  const router = useRouter()
  const { data: session } = useSession()

  const handleLogout = async () => {

    const data = await signOut({ redirect: false, });
    console.log('sign out')
    console.log(data)
    router.push('/')

  }
   const authenticated =session?.user.token;
    
  return (
    <div className="flex flex-row justify-between p-2 items-center">
      <div className="flex flex-row justify-between p-2 items-center" >
        <Link href={authenticated ? '/businessPage': '/'}>
          <div className='w-20 h-10 relative flex items-center'><Image alt="logo" layout="contain" src={gradcelaImage} /></div>
        </Link>
        {/* <Search /> */}
      </div>

      <div className="flex">
        {/* <Link href={'/serviceProviders/orderPages/createOrderPage'}>
        <button  className="bg-indigo-600 text-white rounded-md p-2 m-2 shadow-md"> New Order</button>

        </Link> */}

        {/* <button onClick={handleLogout} className="bg-indigo-600 text-white rounded-md p-2 m-2 shadow-md"> Log Out</button> */}

        <MenuBar />
      </div>

    </div>
  );
}

export default Navbar;