/* ItemsAddition.js
 * David D'Alessandro
 * March 26, 2024
 * Component for adding items to the state
 */

import { useState } from "react";
import { addNewItem, selectItemCount } from "./itemsSlice";
import { useDispatch, useSelector } from "react-redux";

const ItemsAddition = () => {
  const dispatch = useDispatch();

  const id = useSelector(selectItemCount);
  const [item, setItem] = useState("");

  const addItemToState = () => {
    if (item) {
      dispatch(addNewItem({ id: id + 1, title: item.substring(0, 20) }));
      setItem("");
    }
  };

  const enterPressed = (e) => {
    console.log("hi");
    if (e.key === "Enter") {
      e.preventDefault();
      addItemToState();
    }
  };

  const enterItem = (e) => setItem(e.target.value);

  return (
    <>
      <input
        type="text"
        placeholder="Enter Item To Do"
        value={item}
        onChange={(e) => enterItem(e)}
        onKeyDown={(e) => enterPressed(e)}
      ></input>
    </>
  );
};

export default ItemsAddition;
