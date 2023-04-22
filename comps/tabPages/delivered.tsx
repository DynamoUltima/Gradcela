import { Tab } from "@headlessui/react";
import Image from 'next/image';
import personnel from "../../assets/images/personnel.png"
import profileImage from "../../assets/images/windows.jpg"
import OrderCards from "../orderComps/orderCards";
import ProgressBar from "../progressBar";

const Delivered = () => {
    return (
        <Tab.Panel className="pt-10 pb-8 px-4 space-y-4 " >
            <div className=" flex items-center font-bold mx-14 ">Delivered Orders</div>

            <div className="flex flex-col items-center overflow-y-auto space-y-4">
                <OrderCards />
                <OrderCards />
            </div>






        </Tab.Panel>
    );
}

export default Delivered;