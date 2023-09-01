import Image from "next/image";
import Link from "next/link";
import logo from "../images/logo.png";

const Footer = () => {
    return (
    <div className="w-full h-20 bg-amazon_light text-gray-300 flex items-center justify-center gap-4">
        <Image className="w-24" src={logo} alt="logoImg" />
        <p className="text-sm -mt-4">
            All rights reserved {" "}
            <Link className="hover:text-white hover:underline decoration-[1px] cursor-pointer duration-300" 
            href="https://satyanayak.in" 
            target="_blank">
            @satyanayak.in
            </Link>
        </p>
    </div>
    );
};

export default Footer;