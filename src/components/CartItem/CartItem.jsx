

const CartItem = ({p}) => {
    // console.log(p.id)
    const {image, gadget_name, about, price} = p;
    return (
        <div className="flex my-4 gap-4">
            <img className="w-60 h-35 rounded-xl" src={image} alt={gadget_name} />
            <div>
                <h2 className="text-2xl font-bold">{gadget_name}</h2>
                <p className="text-gray-600 my-2">{about}</p>
                <p className="font-semibold">Price: ${price}</p>
            </div>
        </div>
    );
};

export default CartItem;