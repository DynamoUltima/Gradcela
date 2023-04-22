import Delivered from "../comps/tabPages/delivered";
import Pending from "../comps/tabPages/pending";
import PlaceOrder from "../comps/tabPages/placeOrder";


export const navigation = {
    categories: [
        {
            id: 'place',
            name: 'Place Order',
            page: <PlaceOrder />


        },


        {
            id: 'pending',
            name: 'Pending Order',
            page: <Pending />,


        },

        {
            id: 'delivered',
            name: 'Delivered',
            page: <Delivered />,

        },


    ],

}