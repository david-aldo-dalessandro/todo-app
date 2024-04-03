/* ItemList.js
 * David D'Alessandro
 * March 26, 2024
 * Component for listing all of the items of the todo list
 */

import { useEffect, useState } from "react";
import { selectItemIds, selectItemCategories } from "./itemsSlice";
import { useSelector } from "react-redux";
import TabGenerator from "../Tabs/TabGenerator";

const ItemsList = () => {
  const Ids = useSelector(selectItemIds);
  const itemCats = useSelector(selectItemCategories);
  const [itemIds, setItemIds] = useState(Ids);

  const [dummyState, setDummyState] = useState(false); // Dummy state variable

  // Function to trigger a re-render
  const forceRerender = () => {
    setDummyState((prevState) => !prevState);
  };

  useEffect(() => {
    console.log(dummyState);
    setItemIds(Ids);
  }, [dummyState, Ids]);

  return (
    <section>
      <h3>To Do </h3>
      <TabGenerator
        itemIds={itemIds}
        itemCats={itemCats}
        forceRerender={forceRerender}
      />
    </section>
  );
};

export default ItemsList;
