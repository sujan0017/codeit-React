import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addNewProduct } from "../redux/product/productActions";
import Spinner from "./Spinner";
import { useEffect } from "react";
import { GrAdd } from "react-icons/gr";

function AddProductForm() {
  const {
    add: { loading, success },
  } = useSelector((state) => state.product);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  
  function submitForm(data) {
    dispatch(addNewProduct(data));

  }

  useEffect(() => {
    if(success) reset()
  }, [success, reset]);

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
          className="w-full bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-700 flex justify-center items-center gap-3 "
          type="submit"
        >
          Add Product {loading ? <Spinner /> : <GrAdd />}
        </button>
      </div>
    </form>
  );
}

export default AddProductForm;
