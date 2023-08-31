import Image from 'next/image'
import logo from "../../images/logo.png"
import { SlLocationPin } from "react-icons/sl"
import { HiOutlineSearch } from "react-icons/hi"


const Header = () => { 
    return <div className="w-full h-20 bg-amazon_blue text-lightText sticky top-0 z-50">
        <div className="h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4">
             {/* logo */}
             <div className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[70%]">
                <Image className="w-28 object-cover" src={logo} alt="logoImg" />
             </div>
             
             {/* delivery */}
             <div className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 items-center justify-center h-[70%] hidden xl:inline-flex gap-1">
                <SlLocationPin />
                <div className="text-xs">
                    <p>Deliver to</p>
                    <p className="text-white font-bold">Bangalore</p>
                </div>
             </div>
             {/* search bar */}
             <div className="flex-1 h-10 hidden md:inline-flex items-center justify-between relative">
                <input 
                    className="w-full h-full rounded-md px-2 placeholder:text-sm text-base text-black border-[3px] border-transparent outline-none focus-visible:border-amazon_yellow"
                    type="text"
                    placeholder='Search amazon-next products'
                />
                <span>
                    <HiOutlineSearch />
                </span>
             </div>
             {/* signin */}
             {/* favourite */}
             {/* cart */}
             

        </div>
    </div>;
};

export default Header;