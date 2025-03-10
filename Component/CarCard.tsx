"use client"
import {useState} from 'react'
import Image from 'next/image'
import { CarProps } from '../types'
import CustomButton from './CustomButton'
import { calculateCarRent, generateCarImageUrl } from '../utils'
import CardDetails from './CardDetails'

interface CarCardProps {
    car: CarProps;
}

const CarCard = ({car}:CarCardProps) => {
    const {make_model_id,city_mpg,drive,transmission, year, make,make_model, model} = car;
    const carRent=calculateCarRent(make_model_id,year)
    console.log(year,'and',city_mpg,'and',drive);

    const [isOpen, setIsOpen] = useState(false)
    
  return (
    <>
      <div className='flex flex-col p-6  justify-center bg-blue-50 items-start text-black bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl group:'>
        <div className='w-full flex justify-between items-start gap-2'>
            <h2 className='text-[22px] leading-[26px] font-bold capitalize'>  {model? model : "Toyota corolla" } {make} </h2>
        </div>

        <p className='flex mt-6 text-[32px] font-semibold'>
            <span className='self-start text-[14px] font-semibold'>
              $
            </span>
                {carRent}
            <span className='self-end text-[14px] font-medium'>
                /day
            </span>
        </p>

        <div className='relative w-full h-40 my-3 object-contain'>
            <Image src={generateCarImageUrl(car)} alt='car model'fill priority className='object-contain' />
        </div>

        <div className='relative flex w-full mt-2'>
          <div className='flex group-hover:invisible w-full justify-between text-gray-100'>
            <div className='flex flex-col justify-center items-center gap-2'>
              <Image src="/steering-wheel.svg" alt='steering wheel' width={20} height={20} />
              <p className='text-[14px] text-black font-medium'>
                {transmission === 'a' ? 'Automatic' : 'Manual'}
              </p>
            </div>

            <div className='flex flex-col justify-center items-center gap-2'>
              <Image src="/tire.svg" alt='tire' width={20} height={20} />
              <p className='text-[14px] text-black font-medium'>
                FWD
              </p>
            </div>

            <div className='flex flex-col justify-center items-center gap-2'>
              <Image src="/gas.svg" alt='gas' width={20} height={20} />
              <p className='text-[14px] text-black font-medium'>
                {make_model_id} MPG
              </p>
            </div>

          </div>

        <div className='absolute bottom-0 w-full z-10 opacity-0 hover:opacity-100  transition-all duration-300'>
          <CustomButton
           title='View More' containerStyle='w-full py-[14px] rounded-full cursor-pointer bg-blue-500' 
           textStyles='text-white font-semibold text-[14px]'
           rightIcon="/right-arrow.svg"
           handleClick={()=>setIsOpen(true)}
           />
        </div>

        </div>
        <CardDetails isOpen={isOpen} closeModal={()=>setIsOpen(false)} car={car}/>
      </div>
    </>
  )
}

export default CarCard
