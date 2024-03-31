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
  const [itemCategory, setItemCategory] = useState("all");

  let itemTabs = [...itemCats].sort().filter((itemTab) => itemTab !== "all");
  let tabs;

  const changeTab = (itemCategory) => {
    setItemCategory(itemCategory);
  };

  if (itemTabs.length > 0) {
    tabs = itemTabs.map((itemTab) => (
      <TabItem key={itemTab} itemTab={itemTab} onTabClick={changeTab} />
    ));
  }

  let content;
  if (itemIds.length > 0) {
    content = itemIds.map((itemId) => (
      <ItemsExcerpt
        key={itemId}
        itemId={itemId}
        itemCategory={itemCategory}
        onDelete={changeTab}
      />
    ));
  } else {
    content = <div> No current items to do</div>;
  }

  const clearAll = () => {
    itemIds.map((itemId) => dispatch(deleteItem(itemId)));
    setItemCategory("all");
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
      <div className="tab-container">
        {itemIds.length > 0 && (
          <TabItem key={0} itemTab="all" onTabClick={changeTab} />
        )}
        {tabs}
      </div>
      <br />
      {content}
    </>
  );
};

export default TabGenerator;
