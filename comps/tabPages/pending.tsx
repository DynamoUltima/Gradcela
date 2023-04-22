import { Tab } from "@headlessui/react";
import Image from 'next/image';
import personnel from "../../assets/images/personnel.png"
import profileImage from "../../assets/images/windows.jpg"
import OrderCards from "../orderComps/orderCards";
import ProgressBar from "../progressBar";

const Pending = () => {
    return (
        <Tab.Panel className="pt-10 pb-8 px-4 space-y-4 bg-gray-200  " >
            <div className="self-center font-bold mx-14">Pending Orders</div>
            {/* List Cards */}


            <div className="flex flex-col items-center overflow-y-auto space-y-4">
                <OrderCards />
                <OrderCards />


            </div>



















        </Tab.Panel>
    );
}

export default Pending;