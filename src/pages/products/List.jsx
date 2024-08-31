import ProductCard from "../../components/ProductCard";
import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner";
import ProductsFilter from "../../components/ProductsFilter";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductCategories,
  getProductList,
} from "../../redux/product/productActions";
import Modal from "../../components/Modal";
import AddProductForm from "../../components/AddProductForm";
import { toast, ToastContainer } from "react-toastify";

function ProductList() {
  const [openAddModal, setOpenAddModal] = useState(false);
  const dispatch = useDispatch();

  const {
    products,
    loading,
    query,
    error,
    add: { success },
  } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProductList(query));
    dispatch(getProductCategories());
  }, [dispatch, query, success]);

  useEffect(() => {
    if (success) {
      setOpenAddModal(false);
      toast.success("Product added successfully");
    }
    if (error) toast.error(error);
  }, [error, success]);

  return (
    <div className="px-10 ">
      <div className="flex justify-between py-4">
        <h1 className="text-center text-2xl "> Product list</h1>
        <button
          onClick={() => setOpenAddModal(true)}
          className="px-3 py-1 rounded-md shadow-md bg-green-200 hover:bg-green-300"
        >
          Add Product +
        </button>
      </div>
      <ProductsFilter />
      {loading ? (
        <>
          <div className="flex items-center justify-center w-full h-[80vh]">
            <Spinner size={50} />
          </div>
        </>
      ) : (
        <>
          <div className="w-full grid grid-cols-4">
            {products.map((value) => {
              return <ProductCard key={value.id} {...value} />;
            })}
          </div>
        </>
      )}
      <Modal
        isOpen={openAddModal}
        setIsOpen={setOpenAddModal}
        title="Add products"
        content={<AddProductForm />}
      />
      <ToastContainer />
    </div>
  );
}

export default ProductList;
