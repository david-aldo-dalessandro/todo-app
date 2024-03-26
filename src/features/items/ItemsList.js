/* ItemList.js
 * David D'Alessandro
 * March 26, 2024
 * Component for listing all of the items of the todo list
 */

import React from "react";
import { selectItemIds } from "./itemsSlice";
import { useSelector } from "react-redux";
import ItemsExcerpt from "./ItemsExcerpt";

const ItemsList = () => {
  const itemIds = useSelector(selectItemIds);
  let content;
  if (itemIds.length > 0) {
    content = itemIds.map((itemId) => (
      <ItemsExcerpt key={itemId} itemId={itemId} />
    ));
  } else {
    content = <div> No current items to do</div>;
  }

  return (
    <section>
      <h3>ItemsList </h3>
      {content}
    </section>
  );
};

export default ItemsList;
