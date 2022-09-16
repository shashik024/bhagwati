import React from "react";
import data from "../data";

export const HomeScreen = () => {
  return (
    <div>
      <h1> Featured Products</h1>
      <div className="products">
        {data.products.map((product) => (
          <div key={product.slug} className="product">
            <a href={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </a>
            <div className="product-info">
              <a href={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </a>
              <p>
                <strong>₹ {product.price}</strong>
              </p>
              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
