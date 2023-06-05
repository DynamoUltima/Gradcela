import { Tab } from "@headlessui/react";
import { getSession, GetSessionParams, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import Navbar from "../comps/navbar/navbar";
import Tabbar from "../comps/tabbar";
import Delivered from "../comps/tabPages/delivered";
import Pending from "../comps/tabPages/pending";
import PlaceOrder from "../comps/tabPages/placeOrder";
import { navigation } from "../data/navigationData";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { fetchAllProjects, fetchProjectsById } from "@/apiServices/services";




function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

// export async function getServerSideProps(context: GetSessionParams | undefined) {
//     const session = await getSession(context);

//     if (!session?.user) {
//       return {
//         redirect: {
//           destination: '/authPage',
//           permanent: false,
//         },
//       };
//     }

//     // const user = await prisma.user.findUnique({
//     //   where: { id: session.userId },
//     // });

//     return {
//       props: { user :''},
//     };
//   }


const BusinessPage = () => {

    const router = useRouter()

    const { data: session } = useSession()
    const [userId, setUserId] = useState('')

    // if(!session?.user){
    //     router.push('/authPage')

    //   }



    const getProjectsById = () => {

        console.log({userId:userId})
        return fetchProjectsById(userId);
    }


    const { data: projectData, isError, isLoading, error, isSuccess, } = useQuery(["getProjects"], getProjectsById, { keepPreviousData: true, });

    console.log({projects:projectData});

    useEffect(() => {
        const id = session?.user.data._id;
        if (session?.user.data._id.toString() != null) {
            setUserId(session?.user.data._id)
        }

    }, [])


    return (
        <div className="relative h-screen" >
            <Tab.Group as="div" className="mt-2 ">

                <div className=" divide-y divide-black divide-opacity-25">


                    <Navbar />
                    <Tabbar />


                    <div className="bg-gray-200  ">

                        <Tab.Panels as={Fragment}>
                            {navigation.categories.map((category) => (
                                <div key={category.name}>{category.page}</div>

                            ))}
                        </Tab.Panels>

                    </div>
                </div>
            </Tab.Group>



        </div>

    );
}

export default BusinessPage;