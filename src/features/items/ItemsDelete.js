/* ItemsDelete.js
 * David D'Alessandro
 * March 26, 2024
 * Component for deleting an item
 */
import { useDispatch } from "react-redux";
import { deleteItem } from "./itemsSlice";

const ItemsDelete = ({ itemId }) => {
  const dispatch = useDispatch();

  const deleteIt = () => {
    dispatch(deleteItem(itemId));
  };

  return <button onClick={deleteIt}>x</button>;
};

export default ItemsDelete;
