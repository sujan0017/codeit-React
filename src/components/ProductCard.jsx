import { Link } from "react-router-dom";
import productImg from "../images/product.jpg";
import { BiCartAdd, BiPencil, BiTrash } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductById } from "../redux/product/productActions";
import { useState } from "react";
import Modal from "./Modal";
import Spinner from "./Spinner";
import { addProductToCart } from "../redux/cart/cartSlice";
import { EDIT_ROUTE, PRODUCTS_ROUTE } from "../constants/routes";

// eslint-disable-next-line react/prop-types
const ProductCard = ({ id, name, category, brand, price }) => {
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const { user } = useSelector((state) => state.auth);
  console.log(user);

  const adminUser = user.roles.includes("ADMIN");

  const {
    delete: { loading },
  } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  function deleteProduct() {
    setShowDeletePopup(true);
  }

  function confirmDeleteProduct() {
    dispatch(deleteProductById(id));
  }

  function addToCart() {
    dispatch(addProductToCart({ id, name, category, brand, price }));
  }
  return (
    <div className="bg-slate-200 m-5 p-5 rounded-xl text-center flex flex-col items-center">
      <div className="w-[200px]">
        <img src={productImg} alt="product image" className="w-full" />
      </div>
      <h2 className="text-2xl font-semibold mb-3">{name}</h2>
      <p>{category}</p>
      <p>{brand}</p>
      <p className="text-yellow-600 my-3">${price}</p>
      <div className="w-full flex justify-between">
        <Link
          to={`${id}`}
          className="py-2 px-4 bg-orange-500 rounded-md text-white"
        >
          Shop Now
        </Link>
        <div className="flex gap-2">
          <button
            onClick={addToCart}
            className="text-white bg-green-700 py-2 px-3 rounded-md flex items-center"
          >
            <BiCartAdd className="text-xl" />
          </button>

          <Link
            to={`/${PRODUCTS_ROUTE}/${EDIT_ROUTE}/${id}`}
            className="text-white bg-blue-500 py-2 px-3 rounded-md flex items-center"
          >
            <BiPencil />
          </Link>
          {adminUser ? (
            <button
              onClick={deleteProduct}
              className="text-white bg-red-500 py-2 px-3 rounded-md"
            >
              <BiTrash />
            </button>
          ) : null}
        </div>
      </div>
      <Modal
        isOpen={showDeletePopup}
        setIsOpen={setShowDeletePopup}
        title="Delete product"
        content={
          <div className="flex justify-start">
            Are you sure you want to delete this product?
          </div>
        }
        actions={
          <button
            onClick={confirmDeleteProduct}
            className="bg-red-500 text-white py-2 px-4 rounded flex items-center hover:bg-red-700"
          >
            <span className="mr-2">Delete</span>{" "}
            {loading ? <Spinner className="text-xl" /> : <BiTrash />}
          </button>
        }
      />
    </div>
  );
};

export default ProductCard;
