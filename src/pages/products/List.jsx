
import ProductCard from "../../components/ProductCard";
import { useEffect } from "react";
import Spinner from "../../components/Spinner";
import ProductsFilter from "../../components/ProductsFilter";
import { useDispatch, useSelector } from "react-redux";
import {  getProductCategories, getProductList } from "../../redux/product/productActions";


function ProductList() {
  const dispatch = useDispatch();

  const { products, loading, query } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProductList(query));
    dispatch((getProductCategories()))
  }, [dispatch, query]);

  return (
    <div>
      <h1 className="text-center text-2xl "> Product list</h1>
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
    </div>
  );
}

export default ProductList;
