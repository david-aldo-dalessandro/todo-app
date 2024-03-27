/* ItemsTasks.js
 * David D'Alessandro
 * March 27, 2024
 * Component to render all subtasks of an item
 */

import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectItemById } from "./itemsSlice";

const ItemsTasks = () => {
  const { itemId } = useParams();
  const item = useSelector((state) => selectItemById(state, itemId));

  if (item) {
    return (
      <div className="App">
        <Link to={"/"}> Back</Link>
        <br />
        <h2>{item.title}</h2>

        <h3> Subtasks </h3>
        <section>
          <ul>
            {item.subtasks?.map((task) => (
              <li key={task.id}> {task.title}</li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
};

export default ItemsTasks;
