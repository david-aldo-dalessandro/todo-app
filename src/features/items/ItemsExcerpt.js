/* ItemsExcerpt.js
 * David D'Alessandro
 * March 26, 2024
 * Component for listing a single item and its fields
 */

import React from "react";
import { selectItemById } from "./itemsSlice";
import { UseSelector, useSelector } from "react-redux";
import ItemsDelete from "./ItemsDelete";

const ItemsExcerpt = ({ itemId }) => {
  const item = useSelector((state) => selectItemById(state, itemId));

  return (
    <li>
      {item.title} <ItemsDelete itemId={itemId} />
    </li>
  );
};

export default ItemsExcerpt;
