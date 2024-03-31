/* TabItemList.js
 * David D'Alessandro
 * March 30, 2024
 * Component to display all the tasks in a category
 */

import { useParams } from "react-router";

const TabItemList = () => {
  const itemCat = useParams();

  return <div>{itemCat}</div>;
};

export default TabItemList;
