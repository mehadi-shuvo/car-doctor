import { Link } from 'react-router-dom'
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'

const Banner = () => {
    return (
        <div className="carousel w-4/5 mx-auto mb-16 md:h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full h-full rounded-xl" />
                <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
                    <div className='text-white space-y-4 md:w-1/2 pl-10'>
                        <h4 className='font-bold text-6xl'>Affordable Price For Car Servicing</h4>
                        <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                        <div className='pt-5'>
                            <Link to='/' className="font-semibold text-lg text-white py-4 px-7 border border-white hover:bg-[#FF3811] hover:border-none mr-5 rounded-md">Discover More</Link>
                            <Link to='/' className="font-semibold text-lg text-white py-4 px-7 border border-white hover:bg-[#FF3811] hover:border-none rounded-md">Latest Projects</Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle bg-black bg-opacity-40 
                    border-none text-white hover:bg-[#FF3811] transition-all mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-black bg-opacity-40 
                    border-none text-white hover:bg-[#FF3811] transition-all">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
            <img src={img2} className="w-full h-full rounded-xl" />
            <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
                    <div className='text-white space-y-4 md:w-1/2 pl-10'>
                        <h4 className='font-bold text-6xl'>Affordable Price For Car Servicing</h4>
                        <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                        <div className='pt-5'>
                            <Link to='/' className="font-semibold text-lg text-white py-4 px-7 border border-white hover:bg-[#FF3811] hover:border-none mr-5 rounded-md">Discover More</Link>
                            <Link to='/' className="font-semibold text-lg text-white py-4 px-7 border border-white hover:bg-[#FF3811] hover:border-none rounded-md">Latest Projects</Link>
                        </div>
                    </div>
                </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle bg-black bg-opacity-40 
                    border-none text-white hover:bg-[#FF3811] transition-all mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-black bg-opacity-40 
                    border-none text-white hover:bg-[#FF3811] transition-all">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
            <img src={img3} className="w-full h-full rounded-xl" />
            <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
                    <div className='text-white space-y-4 md:w-1/2 pl-10'>
                        <h4 className='font-bold text-6xl'>Affordable Price For Car Servicing</h4>
                        <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                        <div className='pt-5'>
                            <Link to='/' className="font-semibold text-lg text-white py-4 px-7 border border-white hover:bg-[#FF3811] hover:border-none mr-5 rounded-md">Discover More</Link>
                            <Link to='/' className="font-semibold text-lg text-white py-4 px-7 border border-white hover:bg-[#FF3811] hover:border-none rounded-md">Latest Projects</Link>
                        </div>
                    </div>
                </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle bg-black bg-opacity-40 
                    border-none text-white hover:bg-[#FF3811] transition-all mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-black bg-opacity-40 
                    border-none text-white hover:bg-[#FF3811] transition-all">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
            <img src={img4} className="w-full h-full rounded-xl" />
            <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
                    <div className='text-white space-y-4 md:w-1/2 pl-10'>
                        <h4 className='font-bold text-6xl'>Affordable Price For Car Servicing</h4>
                        <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                        <div className='pt-5'>
                            <Link to='/' className="font-semibold text-lg text-white py-4 px-7 border border-white hover:bg-[#FF3811] hover:border-none mr-5 rounded-md">Discover More</Link>
                            <Link to='/' className="font-semibold text-lg text-white py-4 px-7 border border-white hover:bg-[#FF3811] hover:border-none rounded-md">Latest Projects</Link>
                        </div>
                    </div>
                </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle bg-black bg-opacity-40 
                    border-none text-white hover:bg-[#FF3811] transition-all mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-black bg-opacity-40 
                    border-none text-white hover:bg-[#FF3811] transition-all">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;