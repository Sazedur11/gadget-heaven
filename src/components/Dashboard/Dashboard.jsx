import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredItemList, getStoredWishlist } from "../../utility/AddToDB";
import CartItem from "../CartItem/CartItem";
import { RxCross2 } from "react-icons/rx";
import WishlistItem from "../../utility/WishlistItem/WishlistItem";

const Dashboard = () => {

    const allProduct = useLoaderData();
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    // add to cart handle effect
    useEffect(()=>{
        const storeItemList = getStoredItemList();

        
        const storeItemListInt = storeItemList.map(id => parseInt(id));

        const itemList = allProduct.filter(item => storeItemListInt.includes(item.id))
        setCart(itemList)
    },[])

    useEffect(() => {
        const storeWishlist = getStoredWishlist();

        const wishlistInt = storeWishlist.map(id => parseInt(id));

        const wishlistItem = allProduct.filter(item => wishlistInt.includes(item.id));
        setWishlist(wishlistItem)
    },[])

    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

    // handle for delete item 
    const handleRemove = (id) => {
  const updatedCart = cart.filter(item => item.id !== id);
  setCart(updatedCart);
};
    const handleRemoveWishlist = (id) => {
  const updatedCart = wishlist.filter(item => item.id !== id);
  setWishlist(updatedCart);
};


  return (
    <div>
      <div className="bg-themecolor p-10">
        <h2 className="text-white text-3xl font-bold text-center">Dashboard</h2>
      <p className="text-white text-center my-4">
        Explore the latest gadgets that will take your experience to the next
        level. From smart devices to <br /> the coolest accessories, we have it
        all!
      </p>
      </div>
        {/* name of each tab group should be unique */}
        <div className="tabs w-4/6 mx-auto -mt-10">
          <input
            type="radio"
            name="my_tabs_2"
            className="tab border-1 border-white rounded-full py-1 px-6"
            aria-label="Cart"
            defaultChecked
          />
          <div className="tab-content border-base-300 bg-base-100 p-10">
            <div className="flex justify-between">
                <h4 className="font-semibold">Cart</h4>
                <p className="font-semibold">Total cost: ${totalPrice}</p>
            </div>
            
            <div>
                {
                    cart.map(p => (
                        <div className="flex justify-between items-center">
                            <CartItem key={p.pId} p={p}></CartItem>
                            <button className="text-3xl text-red-600 font-bold" onClick={()=>handleRemove(p.id)}> <RxCross2></RxCross2> </button>
                        </div>
                    ))
                }
            </div>
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            className="tab mx-2 border-1 border-white rounded-full py-1 px-6"
            aria-label="Wishlist"
          />
          <div className="tab-content border-base-300 bg-base-100 p-10">
           <div >
                <h4 className="font-semibold">Wishlist</h4>
            </div>
            
            <div>
                {
                    wishlist.map(p => (
                        <div className="flex justify-between items-center">
                            <WishlistItem key={p.pId} p={p}></WishlistItem>
                            <button className="text-3xl text-red-600 font-bold" onClick={()=>handleRemoveWishlist(p.id)}> <RxCross2></RxCross2> </button>
                        </div>
                    ))
                }
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default Dashboard;
