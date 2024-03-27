/* ItemsHome.js
 * David D'Alessandro
 * March 27, 2024
 * Component to hold item components for display through routes
 */

import ItemsList from "./ItemsList";
import ItemsAddition from "./ItemsAddition";

const ItemsHome = () => {
  return (
    <div className="App">
      <ItemsAddition />
      <ItemsList />
    </div>
  );
};

export default ItemsHome;
