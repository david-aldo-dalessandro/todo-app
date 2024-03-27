/* SubtaskAddition.js
 * David D'Alessandro
 * March 27, 2024
 * Component to hold the form for adding new subtasks
 */

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectItemById, updateItem } from "../items/itemsSlice";

const SubtaskAddition = ({ itemId }) => {
  const [subtaskTitle, setSubtaskTitle] = useState("");
  const dispatch = useDispatch();
  const item = useSelector((state) => selectItemById(state, itemId));

  const saveSubtask = ({ itemId }) => {
    const newSubtask = {
      id: String(item.subtasks?.length ? item.subtasks.length + 1 : 1),
      title: subtaskTitle,
      completed: false,
    };
    const updatedItem = {
      id: item.id,
      title: item.title,
      completed: item.completed,
      important: item.important,
      category: item.category,
      subtasks: [...item.subtasks, newSubtask],
    };
    setSubtaskTitle("");
    if (subtaskTitle) {
      dispatch(updateItem(updatedItem));
    }
  };

  return (
    <>
      <form>
        <input
          type="text"
          id="taskTitle"
          name="taskTitle"
          placeholder="Enter Task"
          value={subtaskTitle}
          onChange={(e) => setSubtaskTitle(e.target.value)}
        />
        <br />
        <button type="button" onClick={saveSubtask}>
          Save Subtask
        </button>
      </form>
    </>
  );
};

export default SubtaskAddition;
