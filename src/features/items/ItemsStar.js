/* ItemsStar.js
 * David D'Alessandro
 * March 26, 2024
 * Component for turning a task into an important task
 */

import { useState } from "react";
import { updateItem } from "./itemsSlice";
import { useDispatch } from "react-redux";

const ItemsStar = ({ item }) => {
  const dispatch = useDispatch();

  const [important, setImportant] = useState(Boolean(item.important));

  const toggle = () => {
    setImportant(!important);
    dispatch(
      updateItem({
        id: item.id,
        title: item.title,
        completed: item.completed,
        important: Number(!important),
        category: item.category,
        subtasks: item.subtasks,
      })
    );
  };
  return (
    <div className="starButton-container">
      <input
        type="checkbox"
        className="starButton"
        checked={important}
        onChange={toggle}
      />
    </div>
  );
};

export default ItemsStar;
