/* ItemList.js
 * David D'Alessandro
 * March 26, 2024
 * Component for listing all of the items of the todo list
 */

import React from "react";
import { selectItemIds } from "./itemsSlice";
import { useSelector } from "react-redux";
import TabGenerator from "../Tabs/TabGenerator";

const ItemsList = () => {
  const itemIds = useSelector(selectItemIds);

  return (
    <section>
      <h3>To Do </h3>

      <TabGenerator itemIds={itemIds} />
    </section>
  );
};

export default ItemsList;
