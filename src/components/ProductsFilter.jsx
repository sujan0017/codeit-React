import { useDispatch, useSelector } from "react-redux";
import { setFilters, setLimit, setSort } from "../redux/product/productSlice";

function ProductsFilter() {
  const { query, categories } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const setProductsLimit = (limit) => {
    dispatch(setLimit(parseInt(limit)));
  };

  function sortProducts(sort) {
    dispatch(setSort(JSON.parse(sort)));
  }

  function filterProductByName(value) {
    dispatch(setFilters(value ? { name: value } : {}));
  }

  function filterProductByCategory(value) {
    dispatch(setFilters(value ? { category: value } : {}));
  }

  return (
    <div className="border rounded py-2 px-5 flex justify-between items-center">
      <div>
        <label htmlFor="name">Name:</label>
        <input
          className="bg-slate-100 rounded"
          type="text"
          id="name"
          value={query?.filters?.name}
          onChange={(e) => filterProductByName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="sort">Category:</label>
        <select
          name="sort"
          id="sort"
          value={JSON.stringify(query?.category)}
          onChange={(e) => filterProductByCategory(e.target.value)}
        >
          <option value="">Select Categories</option>
          {categories.map((category) => (
            <option className="capitalize" key={category}>{category}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="sort">Sort by:</label>
        <select
          name="sort"
          id="sort"
          value={JSON.stringify(query?.sort)}
          onChange={(e) => sortProducts(e.target.value)}
        >
          <option value={JSON.stringify({ createdAt: -1 })}>Latest</option>
          <option value={JSON.stringify({ price: 1 })}>
            Pride: Low to high
          </option>
          <option value={JSON.stringify({ price: -1 })}>
            Price: High to low
          </option>
        </select>
      </div>

      <div>
        <label htmlFor="limit">Limit</label>
        <select
          name="limit"
          id="limit"
          value={query?.limit ?? 10}
          onChange={(e) => setProductsLimit(e.target.value)}
        >
          <option defaultValue="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
    </div>
  );
}

export default ProductsFilter;
