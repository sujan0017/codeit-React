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
    add: { success: addSuccess },
    delete: { success: deleteSuccess },
  } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProductList(query));
    dispatch(getProductCategories());
  }, [dispatch, query, addSuccess, deleteSuccess]);

  useEffect(() => {
    if (addSuccess) {
      setOpenAddModal(false);

      toast.success("Product added successfully.");
    }

    if (deleteSuccess) {
      toast.success("Product deleted successfully.");
    }
    
    if (error) toast.error(error);
  }, [error, addSuccess, deleteSuccess]);

  return (
    <div className="px-10 ">
      <div className="flex justify-between py-4">
        <h1 className="text-center text-2xl font-semibold "> Product list</h1>
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
          <div className="flex items-center justify-center w-100 h-[70vh]">
            <Spinner width="12" height="12"/>
          </div>
        </>
      ) : (
        <>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 py-5">
            {products.map((product) => {
              return <ProductCard key={product.id} {...product} />;
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
