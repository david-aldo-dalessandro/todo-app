/* TabGenerate.js
 * David D'Alessandro
 * March 30, 2024
 * Component to hold the logic to create tabs
 */

import ItemsExcerpt from "../items/ItemsExcerpt";
import { deleteItem } from "../items/itemsSlice";
import { useDispatch } from "react-redux";
const TabGenerator = ({ itemIds }) => {
  const dispatch = useDispatch();

  let content;
  if (itemIds.length > 0) {
    content = itemIds.map((itemId) => (
      <ItemsExcerpt key={itemId} itemId={itemId} />
    ));
  } else {
    content = <div> No current items to do</div>;
  }

  const clearAll = () => {
    itemIds.map((itemId) => dispatch(deleteItem(itemId)));
  };

  return (
    <>
      {itemIds.length > 0 && (
        <button className="clearButton" onClick={clearAll}>
          {" "}
          Clear all{" "}
        </button>
      )}
      <br />
      <input type="text" placeholder="Enter Tab Name"></input>
      <button className="newTabButton">+</button>
      {content}
    </>
  );
};

export default TabGenerator;
