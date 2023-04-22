import Image from "next/image";
import Link from "next/link";
import gradcelaImage from "/assets/svg/GradcelaLogo.svg"

const Navigationbar = () => {
    return (

        <div className=''>
            <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
                {/* <img src="/assets/images/gradcela logo.png" alt="logo" /> */}

                <div className='w-20 h-14 relative flex items-center'><Image alt="logo" layout="contain" src={gradcelaImage} /></div>
                <div className="md:flex hidden lg:flex-row justify-center  lg:justify-between items-center gap-5">
                    {/* <p>Services</p>
                    <p>About Us</p> */}
                    {/* <p>Teacher</p>
                    <p>Pricing</p>
                    <p>Careers</p>
                    <p>Blog</p> */}
                </div>
                <Link href={'/authPage'}>
                    <button className='btn bg-white text-teal-300 border-none hover:bg-[#2DD4BF] p-2 hover:text-white capitalize rounded-full'>
                        Coming Soon
                    </button>
                </Link>
                {/* future sign in button*/}
                {/* Mobile Nav */}


            </div>






        </div>

    );
}

export default Navigationbar;