import { Tab } from "@headlessui/react";
import React, { Fragment } from "react";
import Navbar from "../../../comps/navbar/navbar";
import OrderTabbar from "../../../comps/orderTabbar";
import Tabbar from "../../../comps/tabbar";
import Delivered from "../../../comps/tabPages/delivered";
import Pending from "../../../comps/tabPages/pending";
import MyDeliveries from "../../../comps/orderComps/orderTabs/myDeliveries";
import MyOrders from "../../../comps/orderComps/orderTabs/myOrders";
import PendingOrder from "../../../comps/orderComps/orderTabs/pending_order";
import { getSession, GetSessionParams, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const providerNavigation = {
    categories: [
        {
            id: 'pending',
            name: 'Pending Orders',
            page: <PendingOrder />


        },


        {
            id: 'orders',
            name: 'My  Orders',
            page: <MyOrders />,


        },

        {
            id: 'deliveries',
            name: 'My Deliveries',
            page: <MyDeliveries />,

        },


    ],

}


export async function getServerSideProps(context: GetSessionParams | undefined) {
    const session = await getSession(context);

    console.log('session?.user.data.role')
    console.log(session?.user.data );
    
    // let myArray =session?.user.data.role.values ;
    // console.log('myarray')
    // console.log(myArray)
    // console.log(myArray) 

  
    // if (!session?.user.data.role.includes('provider')) {
    //   return {
    //     redirect: {
    //       destination: '/businessPage',
    //       permanent: false,
    //     },
    //   };
    // }
  
    // const user = await prisma.user.findUnique({
    //   where: { id: session.userId },
    // });
  
    return {
      props: { user :''},
    };
  }

const OrderHome = () => {
    const { data: session } = useSession();
     const router=  useRouter()

    // if(!session?.user.data.role.includes('provider')){
    //  router.push('/businessPage')
    // }





    return (
        <div>
            <Tab.Group as="div" className="mt-2">
                <div className="divide-y divide-black divide-opacity-25">
                    <Navbar />
                    <OrderTabbar />

                    {/* Tabs */}
                    <div>

                        <Tab.Panels as={Fragment}>
                            {providerNavigation.categories.map((category) => (
                                <div key={category.name}>{category.page}</div>
                            ))}
                        </Tab.Panels>

                    </div>
                </div>


            </Tab.Group>

        </div>
    );
}

export default OrderHome;