import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addNewProduct, updateProduct } from "../redux/product/productActions";
import Spinner from "./Spinner";
import { useEffect } from "react";
import { GrAdd } from "react-icons/gr";
import { BiPencil } from "react-icons/bi";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { PRODUCTS_ROUTE } from "../constants/routes";

// eslint-disable-next-line react/prop-types
function AddProductForm({ product }) {
  const {
    add: { loading: addPending, success: addSuccess },
    edit: { loading: editPending, success: editSuccess },
  } = useSelector((state) => state.product);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: product ?? {}, disabled: editPending });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  function submitForm(data) {
    if (product) {
      dispatch(updateProduct(data));
    } else {
      dispatch(addNewProduct(data));
    }
  }

  useEffect(() => {
    if (addSuccess) reset();

    if (editSuccess) {
      reset();

      toast.success("Product updated successfully.", {
        autoClose: 1500,
        onClose: () => {
          navigate(`/${PRODUCTS_ROUTE}`);
        },
      });
    }
  }, [reset, addSuccess, editSuccess, navigate]);

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className=" bg-white border rounded-md w-full flex flex-col justify-center items-center p-5 gap-4 lg:col-span-2 "
    >
      <div className="w-full flex flex-col gap-2 ">
        <label htmlFor="name">Product Name</label>
        <p className="text-red-500 text-xs">{errors.name?.message}</p>
        <input
          className="p-1 border rounded"
          type="text"
          {...register("name", {
            required: "Product name is required.",
          })}
        />
      </div>

      <div className="w-full flex flex-col gap-2 ">
        <label htmlFor="category">Category</label>
        <p className="text-red-500 text-xs">{errors.category?.message}</p>
        <input
          className="p-1 border rounded"
          type="text"
          {...register("category", {
            required: "Category is required.",
          })}
        />
      </div>
      <div className="w-full flex flex-col gap-2 ">
        <label htmlFor="brand">Brand</label>
        <p className="text-red-500 text-xs">{errors.brand?.message}</p>
        <input
          className="p-1 border rounded"
          type="text"
          {...register("brand", {
            required: "Brand is required.",
          })}
        />
      </div>
      <div className="w-full flex flex-col gap-2 ">
        <label htmlFor="price">Price</label>
        <p className="text-red-500 text-xs">{errors.price?.message}</p>
        <input
          className="p-1 border rounded"
          type="number"
          {...register("price", {
            required: "Price is required.",
          })}
        />
      </div>
      <div className="w-full">
        <button
          type="submit"
          className={`${
            product
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-green-600 hover:bg-green-700"
          } text-white rounded py-2 cursor-pointer w-full flex justify-center items-center`}
        >
          <span>{product ? "Edit Product" : "Add Product"}</span>
          {addPending || editPending ? (
            <Spinner />
          ) : product ? (
            <BiPencil />
          ) : (
            <GrAdd />
          )}
        </button>
      </div>
      <ToastContainer />
    </form>
  );
}

export default AddProductForm;
