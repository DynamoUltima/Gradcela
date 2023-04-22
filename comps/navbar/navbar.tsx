import React from "react";
import MenuBar from "../menu";
import Search from "../search";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

const Navbar = () => {
   const router =  useRouter()
    const  handleLogout=async()=>{
      const data = await signOut({redirect:false,});
      console.log('sign out')
      console.log(data)
      router.push('/authPage')
      
    }


  return (
    <div className="flex flex-row justify-between p-2 items-center">
      <div className="flex flex-row justify-between p-2 items-center" >
        <div className="font-bold mr-7 text-xl">Gradcela</div>

        {/* <Search /> */}
      </div>

      <div className="flex">
        {/* <Link href={'/serviceProviders/orderPages/createOrderPage'}>
        <button  className="bg-indigo-600 text-white rounded-md p-2 m-2 shadow-md"> New Order</button>

        </Link> */}
        
         <button  onClick={handleLogout}  className="bg-indigo-600 text-white rounded-md p-2 m-2 shadow-md"> Log Out</button>

        <MenuBar />
      </div>

    </div>
  );
}

export default Navbar;