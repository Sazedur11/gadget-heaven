import banner from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className="w-4/5 mx-auto">
            <h2 className="text-2xl md:text-5xl font-bold text-center">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h2>
            <p className="text-center my-6">Explore the latest gadgets that will take your experience to the next level. <br /> From smart devices to the coolest accessories, we have it all!</p>
            <button className="btn bg-white block mx-auto my-8 px-6 text-violet-600 font-bold rounded-full border-0">Shop Now</button>
            <div className='border-12 border-violet-400 rounded-4xl w-2xs md:w-2xl lg:w-2xl mx-auto lg:-mb-120'>
                <img className='w-2xs h-60 lg:w-2xl md:w-2xl md:h-80 lg:h-100 mx-auto rounded-3xl' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;