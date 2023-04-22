import profileImage from "../assets/images/windows.jpg"
import personnel from "../assets/images/personnel.png"
import Image from 'next/image';
import React from "react";
import Link from "next/link";

const Card = () => {
    return (
      
        <div className="rounded overflow-hidden shadow-lg ">
            <Image className="w-full" src={profileImage} alt="Forest" />
            <div className="px-6 py-4">
                <div className="flex items-center  space-x-4">
                    {/* <Image className=" h-4 w-4 rounded-full object-contain" src={profileImage} alt="profile" /> */}
                    <div className="w-8 h-8 relative mb-4">
                        <div className="group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
                            <span className="hidden group-hover:table-cell text-white font-bold align-middle">KR</span>
                            <Image src={personnel} alt="lovely avatar" className="object-cover object-center w-full h-full visible group-hover:hidden" />
                        </div>
                    </div>
                    <div className="font-bold text-lg mb-2">Johnson Graham</div>
                </div>
                <p className="text-gray-700 text-base">
                    Consider your all assigments and project works completed
                </p>
            </div>
            <div className="divide-y divide-gray-200">
                <div className=" flex items-center space-x-2 px-6 pt-4 pb-2 ">
                    <svg className="inline w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <span className="text-yellow-400 font-extrabold">5.0</span>
                    <span>(34)</span>
                </div>
                <div className="flex items-center">
                    <div className="flex items-center space-x-32 m-4">
                        <div><svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path></svg></div>
                        <div>starting at GH₵ 50</div>
                    </div>
                </div>
            </div>

        </div>
     

    );
}

export default Card;