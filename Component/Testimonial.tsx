"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { ReviewProps } from '../types';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"



const Review = ({ name = 'Jeanine Grant', date = 'January 23, 2025' }: ReviewProps) => {
  return (
    <>
      <section className='bg-white shadow-lg rounded-lg overflow-hidden w-96 transform transition duration-500 hover:scale-105'>
        <div className='px-5 pt-4 flex items-center space-x-4'>
          {/* <i className="fa-solid fa-user text-2xl text-blue-500"></i> */}
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span>
            <h4 className='font-semibold text-lg'>{name}</h4>
            <p className='text-sm text-gray-500'>{date}</p>
          </span>
        </div>
        <div className='py-4 px-8 text-justify text-gray-700'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore incidunt dicta sit illo molestiae, corrupti quo temporibus ducimus aliquid ullam, inventore earum officiis error laboriosam hic? Rem nisi provident incidunt?</p>
        </div>
        <div className='px-5 pb-5 text-end'>
          <i className="fa-solid fa-star text-yellow-400 text-xl ml-1"></i>
          <i className="fa-solid fa-star text-yellow-400 text-xl ml-1"></i>
          <i className="fa-solid fa-star text-yellow-400 text-xl ml-1"></i>
          <i className="fa-solid fa-star text-yellow-400 text-xl ml-1"></i>
          <i className="fa-solid fa-star text-yellow-400 text-xl ml-1"></i>
        </div>
      </section>
    </>
  )
}

const Testimonial = () => {
  return (
    <>
      <div className="px-8 py-12 lg:px-16">
        <h3 className="font-semibold text-xl text-gray-700 text-center sm:text-left">Thousands Of Trusted Clients</h3>
        <h1 className="font-bold text-3xl sm:text-4xl my-4 text-gray-900 text-center sm:text-left">Don't take our word for it, see what our clients say</h1>
        <p className="text-base text-gray-600 w-full sm:w-3/5 text-justify leading-relaxed mx-auto sm:mx-0">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur non illo eaque minus nam soluta facere,
          consequuntur corrupti eos repudiandae. Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>



      <div className='mx-10 my-5'>
        <Swiper
          slidesPerView={1}
          spaceBetween={50}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 100,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 200,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 50,
            }
          }}
        >
          <SwiperSlide><Review name={"Jeanine Grant"} date={"January 23, 2025"} /></SwiperSlide>
          <SwiperSlide><Review name='Derval Russell' date='July 22, 2024' /></SwiperSlide>
          <SwiperSlide><Review name='Sophie Dee' date='November 22, 2024' /></SwiperSlide>
          <SwiperSlide><Review name='James Liam' date='August 28, 2024' /></SwiperSlide>
          <SwiperSlide><Review name='Olivia Charlotte' date='October 8, 2023' /></SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default Testimonial
