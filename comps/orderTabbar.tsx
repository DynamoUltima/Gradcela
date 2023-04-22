import { Tab } from "@headlessui/react";
import MyDeliveries from "./orderComps/orderTabs/myDeliveries";
import MyOrders from "./orderComps/orderTabs/myOrders";
import PendingOrder from "./orderComps/orderTabs/pending_order";

const OrderTabbar = () => {

    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
      }

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


    return (

        <div className="shadow-sm">
      <Tab.List className="-mb-px flex px-4 space-x-8">
        {providerNavigation.categories.map((category) => (
          <Tab
            key={category.name}
            className={({ selected }) =>
              classNames(
                selected ? 'text-indigo-600 border-indigo-600' : 'text-gray-900 border-transparent',
                'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium'
              )
            }
          >
            {category.name}
          </Tab>
        ))}
      </Tab.List>
    </div>
        
    );
}

export default OrderTabbar;