/* TabGenerate.js
 * David D'Alessandro
 * March 30, 2024
 * Component to hold the logic to create tabs
 */

import ItemsExcerpt from "../items/ItemsExcerpt";
import { deleteItem } from "../items/itemsSlice";
import TabItem from "./TabItem";
import { useDispatch } from "react-redux";
import { useState } from "react";

const TabGenerator = ({ itemIds, itemCats }) => {
  const dispatch = useDispatch();
  //const [itemTabs, setItemTabs] = useState([...itemCats])

  let itemTabs = [...itemCats];
  let tabs;

  if (itemTabs.length > 0) {
    tabs = itemTabs.map((itemTab) => (
      <TabItem key={itemTab} itemTab={itemTab} />
    ));
  }

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
      {tabs}
      <br />
      {content}
    </>
  );
};

export default TabGenerator;
