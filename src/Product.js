import React from "react";
import ItemDescription from "./ItemDescription";

function Product({ name, description, price }) {
  return (
    <div>
      {/* <h2>{name}</h2>

      <h4>{description}</h4> */}
      <ItemDescription name={name} description={description} />
      <p>₹{price}</p>
    </div>
  );
}

export default Product;
