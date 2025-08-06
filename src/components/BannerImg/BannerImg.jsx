import banner from '../../assets/banner.jpg'

const BannerImg = () => {
  return (
    <div className="border-12 border-violet-400 rounded-4xl w-2xs md:w-2xl lg:w-2xl mx-auto lg:-mt-50">
      <img
        className="w-2xs h-60 lg:w-2xl md:w-2xl md:h-80 lg:h-100 mx-auto rounded-3xl"
        src={banner}
        alt=""
      />
    </div>
  );
};

export default BannerImg;
