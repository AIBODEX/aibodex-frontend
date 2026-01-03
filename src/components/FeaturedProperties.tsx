import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import img3 from '../assets/img3.png';
import swipeImg from '../assets/swipeIMG.svg';

export const FeaturedProperties = () => {
  return (
    <section className="relative w-full py-20 bg-white px-4 md:px-8 overflow-hidden">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#111827] leading-tight max-w-sm">
          Discover homes <br /> designed to inspire
        </h2>
        
        <div className="flex-shrink-0">
            <img src={img3} alt="Decoration" className="w-24 h-12 object-cover rounded-full" />
        </div>

        <p className="text-gray-500 text-lg max-w-xs">
          Handpicked residences where luxury meets comfort.
        </p>
      </div>

      {/* Swiper Section */}
      <div className="max-w-7xl mx-auto relative group px-4">
        <Swiper
          modules={[Navigation]}
          grabCursor={true}
          centeredSlides={false}
          loop={false}
          initialSlide={0}
          slidesPerView={'auto'}
          spaceBetween={40}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          // Removed manual breakpoints for slidesPerView to let 'auto' handle it with width
          className="!pb-12 !overflow-visible"
        >
          {/* Slide 1 */}
          <SwiperSlide className="w-full max-w-[280px] md:max-w-[400px]">
            <PropertyCard />
          </SwiperSlide>
          {/* Slide 2 */}
          <SwiperSlide className="w-full max-w-[280px] md:max-w-[400px]">
            <PropertyCard />
          </SwiperSlide>
          {/* Slide 3 */}
          <SwiperSlide className="w-full max-w-[280px] md:max-w-[400px]">
             <PropertyCard />
          </SwiperSlide>
          {/* Slide 4 (Duplicate for better loop perception) */}
          <SwiperSlide className="w-full max-w-[280px] md:max-w-[400px]">
             <PropertyCard />
          </SwiperSlide>

          <SwiperSlide className="w-full max-w-[280px] md:max-w-[400px]">
             <PropertyCard />
          </SwiperSlide>
        </Swiper>
        
        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev-custom absolute top-1/2 left-4 md:left-32 z-10 w-12 h-12 bg-[#111827] rounded-full flex items-center justify-center cursor-pointer text-white -translate-y-1/2 transition-opacity hover:bg-black">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
        </div>
        <div className="swiper-button-next-custom absolute top-1/2 right-4 md:right-32 z-10 w-12 h-12 bg-[#111827] rounded-full flex items-center justify-center cursor-pointer text-white -translate-y-1/2 transition-opacity hover:bg-black">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
        </div>

      </div>
    </section>
  );
};

const PropertyCard = () => {
    return (
        <div className="flex flex-col gap-6 transition-all duration-300 transform scale-95 hover:scale-100">
            <div className="w-full h-[320px] md:h-[400px] rounded-[32px] overflow-hidden shadow-xl">
                 <img src={swipeImg} alt="Property" className="w-full h-full object-cover" />
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end px-4">
                <div className="max-w-md">
                     <h3 className="text-3xl font-semibold text-[#111827] mb-2">Sunset Haven</h3>
                     <p className="text-gray-500 mb-4 leading-relaxed">
                        A modern masterpiece featuring panoramic views and open, light-filled spaces designed for tranquility.
                     </p>
                </div>
                <div className="text-right flex flex-col items-end">
                     <span className="text-4xl font-bold text-[#111827] mb-2">$33,500</span>
                     <div className="flex flex-col text-gray-500 text-sm font-medium gap-1">
                        <span>6 Bedrooms</span>
                        <span>8 Bathroom</span>
                     </div>
                </div>
            </div>
        </div>
    )
}
