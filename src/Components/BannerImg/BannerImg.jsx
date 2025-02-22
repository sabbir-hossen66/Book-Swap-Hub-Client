import { Link } from "react-router-dom";
import './BannerImg.css'
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';


const BannerImg = () => {
  /* use animation */
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className="py-16  px-4" data-aos="zoom-out-up">
      <div className="hero h-[600px] " style={{ backgroundImage: 'url(https://i.ibb.co/HPb6xfL/banerImg.jpg)' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold"> Book Readers</h1>
            <p className="mb-5 text-md">Today, I stand before you not just as a speaker, but as a passionate advocate for the transformative power of reading. In a world filled with distractions and noise, where time is a precious commodity.</p>
            <Link to={'/my-queries'}>
              <button data-aos="fade-up" type="button" className="Banner-Button bg-[#002c42] rounded relative px-16 py-4 ml-4 overflow-hidden font-semibold ">Go to quries</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerImg;