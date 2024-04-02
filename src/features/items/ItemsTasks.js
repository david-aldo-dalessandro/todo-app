/* ItemsTasks.js
 * David D'Alessandro
 * March 27, 2024
 * Component to render all subtasks of an item
 */

import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectItemById, updateItem } from "./itemsSlice";
import SubtaskAddition from "../subtasks/SubtaskAddition";
import SubtaskExcerpt from "../subtasks/SubtaskExcerpt";

const ItemsTasks = () => {
  const navigate = useNavigate();
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

  let subtasks;

  if (item.subtasks.length > 0) {
    subtasks = item.subtasks.map((subtask) => (
      <SubtaskExcerpt
        key={subtask.id}
        subtask={subtask}
        deleteSubtask={deleteSubtask}
      />
    ));
  } else {
    subtasks = <div> No subtasks currently, add on above</div>;
  }

  if (item) {
    return (
      <div className="App">
        <button onClick={() => navigate(-1)}>Back</button>
        <br />
        <h2>{item.title}</h2>

        <h3> Subtasks </h3>
        <SubtaskAddition itemId={itemId} />
        {subtasks}
      </div>
    );
  }
};

export default ItemsTasks;
