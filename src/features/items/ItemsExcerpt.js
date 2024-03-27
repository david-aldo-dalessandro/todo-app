/* ItemsExcerpt.js
 * David D'Alessandro
 * March 26, 2024
 * Component for listing a single item and its fields
 */

import React from "react";
import { selectItemById } from "./itemsSlice";
import { useSelector } from "react-redux";
import ItemsDelete from "./ItemsDelete";
import ItemsStar from "./ItemsStar";
import { Link } from "react-router-dom";

const ItemsExcerpt = ({ itemId }) => {
  const item = useSelector((state) => selectItemById(state, itemId));

  return (
    <li>
      <ItemsStar item={item} />
      <Link to={`/item/${itemId}`}>{item.title}</Link>
      <ItemsDelete itemId={itemId} />
    </li>
  );
};

export default ItemsExcerpt;
