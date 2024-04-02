/* ItemsExcerpt.js
 * David D'Alessandro
 * March 26, 2024
 * Component for listing a single item and its fields
 */

import { useState } from "react";
import { selectItemById } from "./itemsSlice";
import { useSelector, useDispatch } from "react-redux";
import ItemsStar from "./ItemsStar";
import { deleteItem } from "./itemsSlice";
import ItemsExpandSubtasks from "./ItemsExpandSubtasks";

const ItemsExcerpt = ({ itemId, itemCategory, onDelete }) => {
  const dispatch = useDispatch();
  const item = useSelector((state) => selectItemById(state, itemId));

  const [itemTitle, setItemTitle] = useState(
    item === undefined ? "" : item.title.substring(0, 20)
  );

  const deleteIt = (e) => {
    e.preventDefault();
    dispatch(deleteItem(itemId));
    onDelete("all");
  };

  const shortenText = () => {
    setItemTitle(item.title.substring(0, 20));
  };

  const looongText = () => {
    setItemTitle(item.title);
  };

  return (
    (itemCategory === item.category || itemCategory === "all") && (
      <li
        onDoubleClick={(e) => deleteIt(e)}
        onMouseLeave={shortenText}
        onMouseEnter={looongText}
      >
        <ItemsStar item={item} />
        <span className="liContents">
          {itemTitle}
          {itemTitle.length === 20 ? <>...</> : <></>}
        </span>
        <ItemsExpandSubtasks itemId={itemId} />
        {item.subtasks.length !== 0 && (
          <ul>
            <li className="liSubtask">
              {item.subtasks.length} {""}
              {item.subtasks.length === 0 ? <> subtask </> : <>subtasks</>}
            </li>
          </ul>
        )}
      </li>
    )
  );
};

export default ItemsExcerpt;
