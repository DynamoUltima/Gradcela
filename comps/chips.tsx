import requests from "../utils/request";

const Chips = () => {
    requests
    return (

        <nav>
            <div className="flex  space-x-7 whitespace-nowrap px-10 sm:px-20 overflow-x-scroll scrollbar-hide">
                {Object.entries(requests).map(([key, { title, url }]) => (
                    // <button key={title} className="order-last:pr-24 c">
                    //     {title}
                    // </button>
                    <button key={title}
                        className="px-4 py-2 text-base rounded-full active:bg-purple-500 active:border active:border-purple-500 active:text-white
                        hover:bg-purple-500 hover:border hover:border-purple-500 hover:text-white"
                    >
                        {title}
                    </button>
                ))}
            </div>
        </nav>




    );
}

export default Chips;