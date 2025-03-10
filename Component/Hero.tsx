"use client"
import Image from "next/image"
import CustomButton from "./CustomButton"

const Hero = () => {
  const handleScroll = () => {

  }
  return (
    <div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">
      <div className="flex-1 pt-36 px-5 xl:px-">
        <h1 className="2xl:text-2xl sm:text-4xl text-4xl">
            Find, book, or rent a car - quickly and easily!
        </h1>
        <p className="text-xl text-black-100 font-light mt-5">
          Streamline your car rental experience with our effortless booking process.
        </p>

        <CustomButton
        title="Explore Cars"
        containerStyle="bg-blue-500 text-white rounded-full mt-10"
        handleClick={handleScroll}
        />
      </div>

      <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
        <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0">
          <Image src="/hero.png" alt="hero" fill className="object-contain -mt-12 xl:mt-24" />
          </div>
        <div className="absolute xl:top-14 xl:right-2 right-2 bg-repeat-round -z-10 w-96 xl:h-screen h-[400px] overflow-hidden"
  style={{ backgroundImage: 'url(/hero-bg.png)' }}/>
          
        </div>

    </div>
  )
}

export default Hero