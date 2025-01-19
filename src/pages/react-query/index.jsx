import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { addNewProduct, fetchListOfProducts } from "./api";

const ReactQueryDemo = () => {
  const [productTitle, setProductTitle] = useState("");

  const getQueryClient = useQueryClient();

  const { data: productList, isLoading } = useQuery({
    queryKey: ["productList"],
    queryFn: () => fetchListOfProducts(),
  });
  const { mutateAsync: handleAddNewProductMutation } = useMutation({
    mutationFn: addNewProduct,
    onSuccess: () => {
      getQueryClient.invalidateQueries([productList]);
    },
  });
  async function handleAddNewProduct() {
    await handleAddNewProductMutation(productTitle);
    setProductTitle("");
  }

  return (
    <div>
      <h1>ReactQueryDemo</h1>
      {isLoading ? <h1>loading products</h1> : null}
      <div>
        <input
          type="text"
          name="name"
          placeholder="Enter product title"
          value={productTitle}
          onChange={(event) => setProductTitle(event.target.value)}
        />
        <button
          disabled={productTitle.trim("") === ""}
          type="button"
          onClick={handleAddNewProduct}
        >
          Add new product
        </button>
      </div>
      <ul>
        {productList?.length ? (
          productList.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))
        ) : (
          <h3>No product found</h3>
        )}
      </ul>
    </div>
  );
};

export default ReactQueryDemo;
