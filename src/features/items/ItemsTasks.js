/* ItemsTasks.js
 * David D'Alessandro
 * March 27, 2024
 * Component to render all subtasks of an item
 */

import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectItemById, updateItem } from "./itemsSlice";
import SubtaskAddition from "../subtasks/SubtaskAddition";

const ItemsTasks = () => {
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const item = useSelector((state) => selectItemById(state, itemId));

  const deleteSubtask = (e) => {
    const itemSubtaskArray = item.subtasks.slice();
    const updatedItemSubtaskArray = itemSubtaskArray.filter(
      (subtask) => subtask.id !== String(e.target.value)
    );
    const updatedItem = {
      id: item.id,
      title: item.title,
      completed: item.completed,
      important: item.important,
      category: item.category,
      subtasks: updatedItemSubtaskArray,
    };
    dispatch(updateItem(updatedItem));
  };

  if (item) {
    return (
      <div className="App">
        <Link to={"/"}> Back</Link>
        <br />
        <h2>{item.title}</h2>

        <h3> Subtasks </h3>
        <SubtaskAddition itemId={itemId} />
        <section>
          {item.subtasks.length > 0 && (
            <ul>
              {item.subtasks?.map((task) => (
                <li
                  key={task.id}
                  value={task.id}
                  onClick={(e) => deleteSubtask(e)}
                >
                  {task.title}
                </li>
              ))}
            </ul>
          )}
          {item.subtasks.length === 0 && <div> No Subtasks, add one above</div>}
        </section>
      </div>
    );
  }
};

export default ItemsTasks;
