import React from "react";
import new_collections from "../Assets/new_collections";
import Item from "./Item";

const NewCollection = () => {
  return (
    <div>
      <h3>new collection</h3>
      <hr />
      <div>
        {new_collections.map((item, i) => {
          return (
            <Item
              key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollection;
