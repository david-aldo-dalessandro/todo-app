/* ItemsExcerpt.js
 * David D'Alessandro
 * March 26, 2024
 * Component for listing a single item and its fields
 */

import React from "react";
import { selectItemById } from "./itemsSlice";
import { useSelector, useDispatch } from "react-redux";
import ItemsStar from "./ItemsStar";
import { deleteItem } from "./itemsSlice";
import ItemsExpandSubtasks from "./ItemsExpandSubtasks";

const ItemsExcerpt = ({ itemId }) => {
  const dispatch = useDispatch();
  const item = useSelector((state) => selectItemById(state, itemId));

  const deleteIt = (e) => {
    e.preventDefault();
    dispatch(deleteItem(itemId));
  };

  return (
    <li onDoubleClick={(e) => deleteIt(e)}>
      <ItemsStar item={item} />
      {item.title.substring(0, 20)}
      {item.title.length > 20 ? <>...</> : <></>}
      <ItemsExpandSubtasks itemId={itemId} />
      {item.subtasks.length !== 0 && (
        <ul>
          <li>
            {item.subtasks.length} {""}
            {item.subtasks.length === 0 ? <> subtask </> : <>subtasks</>}
          </li>
        </ul>
      )}
    </li>
  );
};

export default ItemsExcerpt;
