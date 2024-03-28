/* ItemList.js
 * David D'Alessandro
 * March 26, 2024
 * Component for listing all of the items of the todo list
 */

import React from "react";
import { selectItemIds, deleteItem } from "./itemsSlice";
import { useSelector, useDispatch } from "react-redux";
import ItemsExcerpt from "./ItemsExcerpt";

const ItemsList = () => {
  const dispatch = useDispatch();
  const itemIds = useSelector(selectItemIds);
  let content;
  if (itemIds.length > 0) {
    content = itemIds.map((itemId) => (
      <ItemsExcerpt key={itemId} itemId={itemId} />
    ));
  } else {
    content = <div> No current items to do</div>;
  }

  const clearAll = () => {
    itemIds.map((itemId) => dispatch(deleteItem(itemId)));
  };

  return (
    <section>
      <h3>To Do </h3>
      {itemIds.length > 0 && (
        <button className="clearButton" onClick={clearAll}>
          {" "}
          Clear all{" "}
        </button>
      )}
      {content}
    </section>
  );
};

export default ItemsList;
