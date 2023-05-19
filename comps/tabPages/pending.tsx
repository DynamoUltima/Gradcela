import { Tab } from "@headlessui/react";
import OrderCards from "../orderComps/orderCards";
import ProgressBar from "../progressBar";
import axios from "axios";
import { fetchAllProjects } from "@/apiServices/services";
import { useQuery } from "@tanstack/react-query";
import * as moment from 'moment';
import { IProject } from "@/interfaces/interface.projects";

const Pending = () => {



    const { data, isError, isLoading, error, isSuccess, } = useQuery(["getProjects"], fetchAllProjects, { keepPreviousData: true, });


    //   console.log(data?.projects);
    return (
        <Tab.Panel className=" flex flex-col pt-10 pb-8 px-4 space-y-4 bg-gray-200  " >
            <div className="self-center font-bold mx-14">Pending Orders</div>
            {/* List Cards */}


            <div className="flex flex-col items-center justify-center overflow-y-auto space-y-4">
                {data?.projects.map((project: IProject) => (
                    <li key={project._id}>
                        <OrderCards project={project} />
                    </li>

                ))}





            </div>



















        </Tab.Panel>
    );
}

export default Pending;