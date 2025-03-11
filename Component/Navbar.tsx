"use client"
import Link from "next/link"
import Image from "next/image"
import CustomButton from "./CustomButton"
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = ():void => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
    <header className="w-full z-10">
        <nav className="max-w-[1440px mx-auto flex items-center justify-between sm:px-16 px-6 py-4">
            <Link href="/" className="flex justify-center items-center">
                <Image
                src={"/logo.svg"}
                alt="logo"
                width={118}
                height={18}
                className="object-contain"/>
            </Link>

            <div className="lg:flex space-x-16 hidden">
                <Link className="relative text-blue-600 hover:text-blue-800 transition-all ease-in-out duration-300 font-semibold group" href={'/Blog'}>
                Blog
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link className="relative text-blue-600 hover:text-blue-800 transition-all ease-in-out duration-300 font-semibold group" href={'/About'}>
                About
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link className="relative text-blue-600 hover:text-blue-800 transition-all ease-in-out duration-300 font-semibold group" href={'/Contact'}>
                Contact
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link className="relative text-blue-600 hover:text-blue-800 transition-all ease-in-out duration-300 font-semibold group" href={'/Pricing'}>
                Pricing
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
            </div>

            <Link className="lg:flex hidden relative transition-all ease-in-out duration-300 font-semibold group" href={'/SignIn'}>
            <CustomButton
            title="Sign In"
            btnType="button"
            containerStyle="text-blue-600 hover:text-blue-800 rounded-full bg-white cursor-pointer min-w-[130px]"/>
            </Link>


            {/* Hamburger Icon */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu}>
          <i className="fa-solid fa-bars text-2xl cursor-pointer"></i>
        </button>
      </div>

{/* Mobile Menu */}
<div
onClick={() => setIsMenuOpen(false)}
  className={`lg:hidden absolute top-14 left-0 w-full z-10 bg-gradient-to-r from-blue-600 to-blue-900 text-white p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform ${isMenuOpen ? 'block opacity-100' : 'hidden opacity-0'}`}>
  <div className="flex flex-col space-y-6">
    <Link href="/Blog" className="text-xl font-semibold hover:text-yellow-300 transition-colors duration-300">Blog</Link>
    <Link href="/About" className="text-xl font-semibold hover:text-yellow-300 transition-colors duration-300">About</Link>
    <Link href="/Contact" className="text-xl font-semibold hover:text-yellow-300 transition-colors duration-300">Contact</Link>
    <Link href="/Pricing" className="text-xl font-semibold hover:text-yellow-300 transition-colors duration-300">Pricing</Link>
  </div>
</div>

        </nav>
    </header> 
    </>
  )
}

export default Navbar