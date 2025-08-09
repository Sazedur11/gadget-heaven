import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredItemList } from "../../utility/AddToDB";
import CartItem from "../CartItem/CartItem";

const Dashboard = () => {

    const allProduct = useLoaderData();
    const [cart, setCart] = useState([]);


    useEffect(()=>{
        const storeItemList = getStoredItemList();

        
        const storeItemListInt = storeItemList.map(id => parseInt(id));

        const itemList = allProduct.filter(item => storeItemListInt.includes(item.id))
        setCart(itemList)
    },[])

    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

    // console.log(itemList.price)


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
        <div className="tabs tabs-border w-4/6 mx-auto">
          <input
            type="radio"
            name="my_tabs_2"
            className="tab"
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
                    cart.map(p => <CartItem key={p.pId} p={p}></CartItem>)
                }
            </div>
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            className="tab"
            aria-label="Wishlist"
          />
          <div className="tab-content border-base-300 bg-base-100 p-10">
            Tab content:
          </div>
        </div>
      
    </div>
  );
};

export default Dashboard;
