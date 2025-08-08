import { Link } from "react-router-dom";


const Product = ({product}) => {
    const {gadget_name, price, image, id} = product;
    return (
        <div className="bg-base-300 p-4 rounded-xl">
            <img className="w-70 h-50 rounded-xl" src={image} alt={gadget_name} />
            <h2 className="text-2xl font-semibold mt-4">{gadget_name}</h2>
            <p className="text-gray-400 my-1">Price: {price}k</p>
            
            <Link  className="btn btn-outline border-1 border-[#9535E2] text-violet-500 rounded-full mt-2" to={`/productDetails/${id}`}>View Details</Link>
        </div>
    );
};

export default Product;