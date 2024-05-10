import { Link } from "react-router-dom";

const BannerImg = () => {
  return (
    <div className="py-16 rounded-md px-4">
      <div className="hero h-[600px] " style={{ backgroundImage: 'url(https://i.ibb.co/HPb6xfL/banerImg.jpg)' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold"> Book Readers</h1>
            <p className="mb-5">Today, I stand before you not just as a speaker, but as a passionate advocate for the transformative power of reading. In a world filled with distractions and noise, where time is a precious commodity.</p>
            <Link to={'/quries'}>
              <button className="btn btn-primary">Go to Quries</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerImg;