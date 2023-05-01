import { Tab } from "@headlessui/react";
import Image from 'next/image';
import React from "react";
import profileImage from "../assets/images/windows.jpg"
import personnel from "../assets/images/personnel.png"
import Chips from "../chips";
import Card from "../card";
import Link from "next/link";


interface TabPanelProps {


}
const PlaceOrder = () => {

    //TabPanel.getStaticProps=async()=>{}

    return (
        <Tab.Panel className="pt-10 pb-8 px-4 space-y-10" >

            <div className="flex items-center justify-center  h-full ">

                <Link href={'/service/orderPages/createOrderPage'}>
                    <button className="bg-[#2DD4BF]  text-white rounded-md p-2 m-2 shadow-md"> New Order</button>

                </Link>

            </div>
            {/* <Chips />
            <div className="grid grid-cols-1 gap-x-4 ">
                <div className="md:grid sm:grid-cols-2 sm:gap-3 md:grid-cols-3 md:gap-3 xl:grid-cols-4 ">
                  <Link href={'/detailPage'}><Card/></Link>  
                  <Link href={'/detailPage'}><Card/></Link>
                  <Link href={'/detailPage'}><Card/></Link>
                  <Link href={'/detailPage'}><Card/></Link>
                  <Link href={'/detailPage'}><Card/></Link>
                    
                    
                </div>
            </div> */}

        </Tab.Panel>
    );
}

export default PlaceOrder;