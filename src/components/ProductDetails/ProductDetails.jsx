import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredItemList, addToStoredWishlist } from "../../utility/AddToDB";




const ProductDetails = () => {
   const {pId} = useParams()
   const id = parseInt(pId);

   

   const data = useLoaderData()

   const product = data.find(product => product.id === id)

   const {gadget_name, price, about, specification, rating, availability, image} = product;

   const {ram, rom, touchscreen, processor} = specification;

   const handleAddToCart = () => {
    addToStoredItemList(id)
   }
   const handleAddToWishlist = () => {
    addToStoredWishlist(id)
   }
   

    return (
        <div>
            <div className="bg-themecolor pt-12 pb-40">
                <h2 className="text-white text-2xl font-bold text-center">Product Details</h2>
                <p className="text-white text-center my-4">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            </div>
            <div className="md:flex gap-4 justify-center lg:w-3/6 md:w-5/6 mx-auto p-4 rounded-xl bg-base-300 -mt-30">
                <img className="w-90 h-60 rounded-xl" src={image} alt={gadget_name} />
                <div>
                    <h2 className="text-2xl font-bold">{gadget_name}</h2>
                    <p className="font-semibold my-2">Price: ${price}</p>
                    <p className="border-1 border-green-400 w-30 h-8 flex items-center justify-center text-green-500 bg-green-400/5 p-2 rounded-full">{availability}</p>
                    <p className="my-2">{about}</p>
                    <p className="font-semibold mb-2">Specification:</p>
                    <p>1. {processor}</p>
                    <p>2. {ram}</p>
                    <p>3. {rom}</p>
                    <p>4. Touchscreen: {touchscreen}</p>
                    <div className="flex gap-4 items-center mt-4">
                        
                    <p className="my-2"> Rating: {rating}</p>
                        <button onClick={() => handleAddToCart(pId)} className="flex items-center gap-2 bg-themecolor py-2 px-3 rounded-full text-white">Add To Card <FiShoppingCart></FiShoppingCart></button>
                        <button onClick={()=> handleAddToWishlist(pId)} className="bg-white text-black text-2xl rounded-full p-2"> <FiHeart></FiHeart> </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductDetails;