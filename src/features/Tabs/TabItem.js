/* TabItem.js
 * David D'Alessandro
 * March 30, 2024
 * Component to display a single tab
 */

import { useState } from "react";

const TabItem = ({ itemTab, onTabClick }) => {
  const [tab, setTab] = useState(itemTab);

  const returnTabSelection = () => {
    onTabClick(tab);
  };

  return (
    <>
      <button onClick={returnTabSelection} className="tab">
        {tab}
      </button>{" "}
    </>
  );
};

export default TabItem;
