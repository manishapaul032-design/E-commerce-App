import React from "react";

export default function Cart({ cart }) {

  return (
    <div>

      <h1>Cart Page</h1>

      {
        cart.length === 0 ? (
          <h3>No Product Added</h3>
        ) : (
          cart.map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid gray",
                margin: "10px",
                padding: "10px"
              }}
            >
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
            </div>
          ))
        )
      }

    </div>
  );
}