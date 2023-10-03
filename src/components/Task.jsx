import { useState } from "react";
import Checkbox from "./Checkbox";

function Task(props) {
  const [editMode, setEditMode] = useState(false);
  return (
    <div className={"task " + (props.done ? "done" : "not-done")}>
      <Checkbox
        checked={props.done}
        onClick={() => props.onToggle(!props.done)}
      />

      {!editMode && (
        <div className="task-name" onClick={() => setEditMode((prev) => !prev)}>
          <span>{props.name}</span>
        </div>
      )}
      {editMode && (
        <form
          onSubmit={(ev) => {
            ev.preventDefault;
            setEditMode(false);
          }}
        >
          <input
            type="text"
            value={props.name}
            onChange={(ev) => props.onRename(ev.target.value)}
          />
        </form>
      )}

      <button className="trash" onClick={props.onTrash}>
        <i class="fa-solid fa-ban"></i>
      </button>
    </div>
  );
}

export default Task;
