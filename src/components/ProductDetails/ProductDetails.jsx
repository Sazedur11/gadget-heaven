import { useLoaderData, useParams } from "react-router-dom";




const ProductDetails = () => {
   const {pId} = useParams()
   const id = parseInt(pId);

   const data = useLoaderData()

   const product = data.find(product => product.id === id)

   

    return (
        <div>
            <h2>Name: {product.price}</h2>
        </div>
    );
};

export default ProductDetails;