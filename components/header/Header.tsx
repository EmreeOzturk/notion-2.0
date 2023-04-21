import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header
            className="flex justify-between items-center p-5"
        >
            <div
            className="flex items-center space-x-5"
            >
                <Link href="/">
                    <Image
                    className="w-44 object-contain cursor-pointer"
                        src="https://miro.medium.com/v2/resize:fit:8978/1*s986xIGqhfsN8U--09_AdA.png"
                        width={200}
                        height={200}
                        alt="medium logo"
                    />
                </Link>
                <div
                className="hidden md:flex space-x-4 items-center"
                >
                    <h3>About</h3>
                    <h3>Contact</h3>
                    <h3
                    className="bg-green-600 px-4 py-1 rounded-full text-white  cursor-pointer"
                    >Follow</h3>
                </div>
            </div>
            <div
            className="flex space-x-4 items-center text-green-600"
            >
                <h3 
                className="font-bold cursor-pointer"
                >Sign In</h3>
                <h3
                className="border-2 border-gray-300 px-4 py-1 rounded-full  font-bold cursor-pointer"  
                >Get Started</h3>
            </div>
        </header>
    );
};

export default Header;
