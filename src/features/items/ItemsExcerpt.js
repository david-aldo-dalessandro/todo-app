/* ItemsExcerpt.js
 * David D'Alessandro
 * March 26, 2024
 * Component for listing a single item and its fields
 */

import { useState, useRef } from "react";
import { selectItemById } from "./itemsSlice";
import { useSelector, useDispatch } from "react-redux";
import ItemsStar from "./ItemsStar";
import { deleteItem, updateItem, selectAllItems } from "./itemsSlice";
import ItemsExpandSubtasks from "./ItemsExpandSubtasks";

const ItemsExcerpt = ({ itemId, itemCategory, onDelete, forceRerender }) => {
  const dispatch = useDispatch();
  const items = useSelector(selectAllItems);
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

  const handleDragStart = (e) => {
    //console.log(JSON.parse(e.currentTarget.dataset.item));
    //draggedItem.current = JSON.parse(e.currentTarget.dataset.item);
    e.dataTransfer.setData("text/plain", e.currentTarget.dataset.item);
    //console.log("draggedItem: " + draggedItem.current.title);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    console.log(
      "event item is: " + JSON.parse(e.currentTarget.dataset.item).title
    );
    const droppedItem = JSON.parse(e.dataTransfer.getData("text/plain"));
    console.log("dragged item in the drop is " + droppedItem.title);

    const targetIndex = items.find((item) => item.id === droppedItem.id);
    console.log("target index: " + targetIndex.id);
    let updatedItems;
    if (targetIndex.id !== -1) {
      console.log("items before being set to newItems:");
      console.log(items);
      const newItems = items.slice();

      console.log("new items initially: ");
      console.log(newItems);

      let spliceItems = newItems.toSpliced(targetIndex.id - 1, 1);
      console.log("new items spliced once at index  " + (targetIndex.id - 1));
      console.log(spliceItems);

      const dropIndex = JSON.parse(e.currentTarget.dataset.item).id;
      let secondSplice = spliceItems.toSpliced(dropIndex, 0, droppedItem);
      console.log("new items spliced a second time: ");
      console.log(secondSplice);
      // Update item IDs based on new indices
      updatedItems = secondSplice.map((item, index) => {
        return { ...item, id: index + 1 }; // Assuming IDs start from 1
      });
      console.log("updated Items:");
      console.log(updatedItems);
    }

    updatedItems.map((updatedItem) => dispatch(updateItem(updatedItem)));
    setItemTitle(item.title.substring(0, 20));
  };

  return (
    (itemCategory === item.category || itemCategory === "all") && (
      <li
        onDoubleClick={(e) => deleteIt(e)}
        onMouseLeave={shortenText}
        onMouseEnter={looongText}
        draggable
        onDragStart={(e) => handleDragStart(e)}
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e)}
        data-id={item.id}
        data-item={JSON.stringify(item)}
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
