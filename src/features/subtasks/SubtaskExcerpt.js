/* TabItemList.js
 * David D'Alessandro
 * March 31, 2024
 * Component to display all the tasks in a category
 */

import { useState } from "react";

const SubtaskExcerpt = ({ subtask, deleteSubtask }) => {
  const [subtaskTitle, setSubtaskTitle] = useState(
    subtask.title.substring(0, 20)
  );

  const shortenText = () => {
    setSubtaskTitle(subtask.title.substring(0, 20));
  };

  const looongText = () => {
    setSubtaskTitle(subtask.title);
  };

  return (
    <section>
      <li
        key={subtask.id}
        value={subtask.id}
        onDoubleClick={(e) => deleteSubtask(e)}
        onMouseEnter={looongText}
        onMouseLeave={shortenText}
      >
        {subtaskTitle}
        {subtaskTitle.length === 20 ? <>... </> : <></>}
      </li>
    </section>
  );
};

export default SubtaskExcerpt;
