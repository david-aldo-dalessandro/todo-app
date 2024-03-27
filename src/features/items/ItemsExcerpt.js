/* ItemsExcerpt.js
 * David D'Alessandro
 * March 26, 2024
 * Component for listing a single item and its fields
 */

import React from "react";
import { selectItemById } from "./itemsSlice";
import { UseSelector, useSelector } from "react-redux";
import ItemsDelete from "./ItemsDelete";
import ItemsStar from "./ItemsStar";

const ItemsExcerpt = ({ itemId }) => {
  const item = useSelector((state) => selectItemById(state, itemId));

  return (
    <li>
      <ItemsStar item={item} />
      {item.title} <ItemsDelete itemId={itemId} />
    </li>
  );
};

export default ItemsExcerpt;
