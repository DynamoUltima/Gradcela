import { Tab } from "@headlessui/react";


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}


const Tabbar = () => {

  const navigation = {
    categories: [
      {
        id: 'women',
        name: 'Place Order',
      },
      {
        id: 'men',
        name: 'Pending Order',
      },
      {
        id: 'children',
        name: 'Delivered',
      },

    ],

  }

  return (
    <div className="shadow-sm">
      <Tab.List className="-mb-px flex px-4 space-x-8">
        {navigation.categories.map((category) => (
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

export default Tabbar;