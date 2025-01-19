import React, { useMemo, useState } from "react";
import useFetch from "../../hooks/use-fetch";

const UseMemoExample = () => {
  const { data, loading } = useFetch("https://dummyjson.com/products");
  const [flag, setFlag] = useState(false);

  // Ensure hooks are always executed
  const memorizedVersion = useMemo(
    () => filterProductByPrice(data?.products || []),
    [data?.products]
  );

  function filterProductByPrice(getProducts) {
    return getProducts?.length > 0
      ? getProducts.filter((singleProductItem) => singleProductItem.price > 10)
      : [];
  }

  return (
    <div>
      {loading ? (
        <h1>Loading Data! Please wait...</h1>
      ) : !memorizedVersion.length ? (
        <h1>No products found!</h1>
      ) : (
        <>
          <h1 style={{ color: flag ? "red" : "black" }}>UseMemoExample</h1>
          <button onClick={() => setFlag(!flag)}>Toggle Flag</button>
          <ul>
            {memorizedVersion.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default UseMemoExample;
