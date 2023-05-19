import { Tab } from "@headlessui/react";
import Image from 'next/image';
import personnel from "../../../../assets/images/personnel.png"
import profileImage from "../../../../assets/images/windows.jpg"
import OrderCards from "../orderCards";
import { fetchAllProjects } from "@/apiServices/services";
import { useQuery } from "@tanstack/react-query";
import { IProject } from "@/interfaces/interface.projects";


const PendingOrder = () => {

    const { data, isError, isLoading, error, isSuccess, } = useQuery(["getProjects"], fetchAllProjects, { keepPreviousData: true, });

    return (
        <div>

            <Tab.Panel className="pt-10 pb-8 px-4 space-y-10 " >

                <div className="self-center font-bold mx-14">Pending Orders</div>



                <div className=" flex flex-col items-center overflow-y-auto space-y-4">
                    {/* <OrderCards />
                    <OrderCards />
                    <OrderCards />
                    <OrderCards /> */}

                    {data?.projects.map((project: IProject) => (
                        <div className="flex" key={project._id}>
                            <OrderCards project={project} />
                        </div>

                    ))}



                </div>



            </Tab.Panel>
        </div>
    );
}

export default PendingOrder;