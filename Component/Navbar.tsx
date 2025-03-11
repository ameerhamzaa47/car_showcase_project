import Link from "next/link"
import Image from "next/image"
import CustomButton from "./CustomButton"

const Navbar = () => {
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
                className="object-contain"
                />
            </Link>

            <div className="flex space-x-16">
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

            <Link className="relative transition-all ease-in-out duration-300 font-semibold group" href={'/SignIn'}>
            <CustomButton
            title="Sign In"
            btnType="button"
            containerStyle="text-blue-600 hover:text-blue-800 rounded-full bg-white cursor-pointer min-w-[130px]"
            />
            </Link>
        </nav>
    </header> 
    </>
  )
}

export default Navbar
