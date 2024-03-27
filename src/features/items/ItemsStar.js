/* ItemsStar.js
 * David D'Alessandro
 * March 26, 2024
 * Component for turning a task into an important task
 */

import { useState } from "react";
import { selectItemById, updateItem } from "./itemsSlice";
import { useDispatch, useSelector } from "react-redux";

const ItemsStar = ({ item }) => {
  const dispatch = useDispatch();

  const [important, setImportant] = useState(Boolean(item.important));

  const toggle = (e) => {
    dispatch(
      updateItem({
        id: item.id,
        title: item.title,
        completed: item.completed,
        important: item.important === 0 ? 1 : 0,
        category: item.category,
      })
    );
    setImportant(!important);
  };
  return (
    <input
      type="checkbox"
      className="starButton"
      checked={important}
      onChange={(e) => toggle(e)}
    />
  );
};

export default ItemsStar;
