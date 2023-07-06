import { Tab } from "@headlessui/react";
import OrderCards from "../orderComps/orderCards";
import ProgressBar from "../progressBar";
import axios from "axios";
import { fetchAllProjects, fetchProjectsById } from "@/apiServices/services";
import { useQuery } from "@tanstack/react-query";
import { IProject } from "@/interfaces/interface.projects";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Pending = () => {

    const { data: session, status } = useSession();

    const router = useRouter()
    const [userId, setUserId] = useState('')
    
    console.log({ status: status });
    // console.log({'mySession':session});
    console.log({ 'userId': userId })

    const getProjectsById = () => {
        // const id = session!.user.data._id;
        console.log({ 'userId Pro': userId })
        return fetchProjectsById(userId);
    }

    const { data, isError, isLoading, error, isSuccess, } = useQuery(["getProjects"], getProjectsById, { keepPreviousData: true, });
      console.log("data",isSuccess)
    useEffect(() => {
        
        if (session?.user.data._id) {
            setUserId(session?.user.data._id)
        }

    }, [session])
    //   console.log(data?.projects);
    return (
        <Tab.Panel className=" flex flex-col pt-10 pb-8 px-4 space-y-4 bg-gray-200  " >
            <div className="self-center font-bold mx-14">Pending Orders</div>
            {/* List Cards */}


            <div className="flex flex-col items-center justify-center overflow-y-auto space-y-4">


              { isSuccess ? (

                data?.projects.map((project: IProject) => (
                    <li key={project._id}>
                        <OrderCards project={project} />
                    </li>

                ))):(
                    <div>Empty</div>
                )}
            </div>



















        </Tab.Panel>
    );
}

export default Pending;