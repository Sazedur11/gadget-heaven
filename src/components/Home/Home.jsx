import Banner from "../Banner/Banner";
import BannerImg from "../BannerImg/BannerImg";
import Products from "../Products/Products";


const Home = () => {
    return (
        <div className="">
            <div className="pt-8 bg-[#9538E2]  rounded-b-2xl">
                <Banner></Banner>
            </div>
            <BannerImg></BannerImg>
            <Products></Products>
        </div>
    );
};

export default Home;