import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductByID } from "../../redux/product/productActions";
import Spinner from "../../components/Spinner";
import AddProductForm from "../../components/AddProductForm";

function EditProduct() {
  const params = useParams();

  const { loading, products } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductByID(params?.id));
  }, [dispatch, params]);


  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="w-1/2 mx-auto">
          <h1 className="font-semibold text-4xl mb-5">Edit Product</h1>
          {loading ? (
              <div className="flex items-center justify-center w-full h-[80vh]">
                <Spinner size={50} />
              </div>
          ) : (
            <AddProductForm product={products[0]} />
          )}
        </div>
      </div>
    </section>
  );
}

export default EditProduct;
