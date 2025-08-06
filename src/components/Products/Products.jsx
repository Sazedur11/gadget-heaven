import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
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
        <div className="w-1/6">
          <h3>Name of all products:</h3>
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
