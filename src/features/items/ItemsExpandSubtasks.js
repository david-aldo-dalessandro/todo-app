/* ItemsExpandSubtasks.js
 * Formally ItemsDelete.js
 * David D'Alessandro
 * March 26, 2024
 * Component for deleting an item
 */

import { useNavigate } from "react-router-dom";

const ItemsDelete = ({ itemId }) => {
  const navigate = useNavigate();

  const goToSubtasks = () => {
    navigate(`/item/${itemId}`);
  };

  return (
    <button className="expandButton" onClick={goToSubtasks}>
      ...
    </button>
  );
};

export default ItemsDelete;
