import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Banner.css'
import { Pagination, Navigation } from 'swiper/modules';
import banner1 from '../../assets/photos/banner/bannerOne.jpg'
import banner2 from '../../assets/photos/banner/banner4.jpg'
import banner3 from '../../assets/photos/banner/banner3.jpg'
import banner0 from '../../assets/photos/banner/bannerFirst.jpg'

const Banner = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='h-[700px]' src={banner3} alt="" />
          <div className="absolute font-light bottom-12 left-16 text-white p-4">
            <p className=' text-2xl uppercase '>Books are like keys to uncharted realms, portals to distant lands, and windows into the souls of both authors and readers. In their pages, you will find not just words, but entire universes waiting to be explored.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img className='h-[700px]' src={banner1} alt="" />
          <div className="absolute font-light bottom-12 left-16 text-white p-4">
            <p className=' text-2xl uppercase'>Books are like keys to uncharted realms, portals to distant lands, and windows into the souls of both authors and readers. In their pages, you will find not just words, but entire universes waiting to be explored.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img className='h-[650px]' src={banner2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-[700px]' src={banner0} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;