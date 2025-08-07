import { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className=" w-4/5 mx-auto">
      <h2 className="text-4xl text-center font-bold mt-18 mb-12">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="flex gap-4">
        <div className="w-1/6 h-fit bg-base-300 p-4 rounded-xl">
          <h3 className="bg-themecolor text-base-300 font-semibold rounded-full px-4 py-2">All product</h3>
          <p className="bg-base-100 rounded-full mt-4 px-4 py-2">Labtops</p>
          <p className="bg-base-100 rounded-full mt-4 px-4 py-2">Phones</p>
          <p className="bg-base-100 rounded-full mt-4 px-4 py-2">Accessories</p>
          <p className="bg-base-100 rounded-full mt-4 px-4 py-2">Smart Watches</p>
          <p className="bg-base-100 rounded-full mt-4 px-4 py-2">MacBook</p>
          <p className="bg-base-100 rounded-full mt-4 px-4 py-2">Iphone</p>
        </div>
        <div className="grid md:grid-cols-3 gap-4 w-5/6">
          {products.map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
