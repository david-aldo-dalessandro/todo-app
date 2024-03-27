/* SubtaskAddition.js
 * David D'Alessandro
 * March 27, 2024
 * Component to hold the form for adding new subtasks
 */

import { useState } from "react";

const SubtaskAddition = () => {
  const [subtaskTitle, setSubtaskTitle] = useState("");

  const saveSubtask = () => {
    console.log("subtask saved: " + subtaskTitle);
  };

  return (
    <>
      <form>
        <input
          type="text"
          id="taskTitle"
          name="taskTitle"
          placeholder="Enter Task"
          value={subtaskTitle}
          onChange={(e) => setSubtaskTitle(e.target.value)}
        />
        <br />
        <button type="button" onClick={saveSubtask}>
          Save Subtask
        </button>
      </form>
    </>
  );
};

export default SubtaskAddition;
