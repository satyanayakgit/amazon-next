import Image from 'next/image'
import logo from "../../images/logo.png"


const Header = () => { 
    return <div className="w-full h-20 bg-amazon_blue text-lightText sticky top-0 z-50">
        <div className="h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4">
             {/* logo */}
             <div className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center">
                <Image className="w-28 object-cover" src={logo} alt="logoImg" />
             </div>
             
             {/* delivery */}
             {/* search bar */}
             {/* signin */}
             {/* favourite */}
             {/* cart */}
        </div>
    </div>;
};

export default Header;