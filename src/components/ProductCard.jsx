import { Link } from "react-router-dom";
import productImg from "../images/product.jpg";


function ProductCard({ id, name, category, brand, price }) {


  
  return (
    <div className="bg-slate-200 m-5 p-5 rounded-xl text-center flex flex-col items-center">
      <div className="w-[200px]">
        <img src={productImg} alt="product image" className="w-full" />
      </div>
      <h2 className="text-2xl font-semibold mb-3">{name}</h2>
      <p>{category}</p>
      <p>{brand}</p>
      <p className="text-yellow-600 my-3">${price}</p>
      <Link
        to={`${id}`}
        className="py-2 px-4 bg-orange-500 rounded-md text-white"
      >
        Shop Now
      </Link>
    </div>
  );
}

export default ProductCard;
