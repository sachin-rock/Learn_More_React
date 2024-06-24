import React from "react";
import useFetch from "../hooks/useFetch";
import { product_api } from "../constants/apiUrls";

const Product = () => {
  const { data, error } = useFetch(product_api);

  if (error) return <p>Error: {error}</p>;

  console.log(data);

  return (
    <div>
      {data.map((item) => {
        return <li> {item.title}</li>;
      })}
    </div>
  );
};

export default Product;
