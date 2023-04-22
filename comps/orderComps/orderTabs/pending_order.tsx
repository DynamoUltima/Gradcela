import { Tab } from "@headlessui/react";
import Image from 'next/image';
import personnel from "../../../../assets/images/personnel.png"
import profileImage from "../../../../assets/images/windows.jpg"
import OrderCards from "../orderCards";


const PendingOrder = () => {
    return (
        <div>

            <Tab.Panel className="pt-10 pb-8 px-4 space-y-10 " >

                <div className="self-center font-bold mx-14">Pending Orders</div>



                <div className=" flex-col space-y-4 m-24">
                    <OrderCards />
                    <OrderCards />
                    <OrderCards />
                    <OrderCards />



                </div>



            </Tab.Panel>
        </div>
    );
}

export default PendingOrder;