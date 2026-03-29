import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import img3 from '../assets/img3.png';
import swipeImg from '../assets/swipeIMG.svg';

export const FeaturedProperties = () => {
  return (
    <section className="relative w-full py-16 md:py-20 bg-gray-50 border-t border-gray-100 px-0 md:px-8 overflow-hidden">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-0 mb-10 md:mb-12 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 text-center lg:text-left">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#111827] leading-[1.2] lg:max-w-md">
          Discover homes <br className="hidden md:block"/> designed to inspire
        </h2>
        
        <div className="flex-shrink-0">
            <img src={img3} alt="Decoration" className="w-20 h-10 md:w-24 md:h-12 object-cover rounded-full shadow-sm" />
        </div>

        <p className="text-gray-500 text-base md:text-lg max-w-xs md:max-w-sm">
          Handpicked residences where luxury meets comfort.
        </p>
      </div>

      {/* Swiper Section */}
      <div className="max-w-7xl mx-auto relative group px-0">
        <Swiper
          modules={[Navigation]}
          grabCursor={true}
          loop={false}
          breakpoints={{
            200: { slidesPerView: 1.15, spaceBetween: 16 },
            640: { slidesPerView: 2.15, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 32 },
          }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          className="!pb-16 !px-4 md:!px-0"
          style={{ overflow: 'visible' }}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <PropertyCard />
          </SwiperSlide>
          <SwiperSlide>
            <PropertyCard />
          </SwiperSlide>
          <SwiperSlide>
             <PropertyCard />
          </SwiperSlide>
          <SwiperSlide>
             <PropertyCard />
          </SwiperSlide>
          <SwiperSlide>
             <PropertyCard />
          </SwiperSlide>
        </Swiper>
        
        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev-custom hidden md:flex absolute top-[40%] left-0 lg:-left-12 z-10 w-12 h-12 bg-white border border-gray-200 rounded-full items-center justify-center cursor-pointer text-[#111827] -translate-y-1/2 transition-all hover:bg-gray-50 hover:scale-110 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
        </div>
        <div className="swiper-button-next-custom hidden md:flex absolute top-[40%] right-0 lg:-right-12 z-10 w-12 h-12 bg-white border border-gray-200 rounded-full items-center justify-center cursor-pointer text-[#111827] -translate-y-1/2 transition-all hover:bg-gray-50 hover:scale-110 shadow-lg">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
        </div>

      </div>
    </section>
  );
};

const PropertyCard = () => {
    return (
        <div className="flex flex-col gap-4 md:gap-6 transition-transform duration-300 md:scale-[0.98] hover:scale-100 w-full bg-white rounded-[1.5rem] md:rounded-[32px] p-2 md:p-3 shadow-sm border border-gray-100">
            <div className="w-full h-[260px] md:h-[360px] rounded-[1rem] md:rounded-[24px] overflow-hidden relative bg-gray-100">
                 <img src={swipeImg} alt="Property" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end px-2 md:px-3 pb-3 pt-1 gap-4 xl:gap-0">
                <div className="w-full text-left max-w-md">
                     <h3 className="text-[1.35rem] md:text-3xl font-semibold text-[#111827] mb-1 md:mb-2 line-clamp-1">Sunset Haven</h3>
                     <p className="text-gray-500 text-[15px] md:text-base leading-relaxed line-clamp-2">
                        A modern masterpiece featuring panoramic views and open, light-filled spaces designed for tranquility.
                     </p>
                </div>
                <div className="text-left xl:text-right flex flex-row xl:flex-col items-center xl:items-end justify-between w-full xl:w-auto mt-1 xl:mt-0">
                     <span className="text-[1.35rem] md:text-3xl font-bold text-[#111827] xl:mb-2 block">$33,500</span>
                     <div className="flex flex-row xl:flex-col text-gray-500 text-xs md:text-[14px] font-medium gap-3 xl:gap-1">
                        <span>6 Bedrooms</span>
                        <span className="xl:hidden">•</span>
                        <span>8 Bathroom</span>
                     </div>
                </div>
            </div>
        </div>
    )
}
