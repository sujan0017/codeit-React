import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import { useState } from "react";
import { getProductList } from "../../redux/product/productActions";

import Spinner from "../../components/Spinner";

function ProductList() {
  const dispatch = useDispatch();

  const { products, loading } = useSelector((state) => state.product);

  useState(() => {
    dispatch(getProductList());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-[80vh]">
        <Spinner size={50} />
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-center text-2xl "> Product list</h1>
      <div className="w-full grid grid-cols-4">
        {products.map((value) => {
          return <ProductCard key={value.id} {...value} />;
        })}
      </div>
    </div>
  );
}

export default ProductList;
