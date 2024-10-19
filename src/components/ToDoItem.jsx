import React, { useState } from "react";
// import deleteIcon from "../../public/icons/bin_icon.png";

function ToDoItem(props) {
  const [isCompleted, setCompleted] = useState(false);

  function handleClick() {
    setCompleted((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "3fr 1fr 1fr",
        alignItems: "center",
      }}
    >
      <li
        onClick={handleClick}
        style={{ textDecoration: isCompleted ? "line-through" : "none" }}
      >
        {props.text}
      </li>
      <div
        onClick={() => {
          props.onEditClick(props.id);
        }}
        style={{ cursor: "pointer" }}
      >
        <img
          className="deleteIconClass"
          src="https://cdn-icons-png.flaticon.com/512/4226/4226577.png"
          alt="Edit Icon"
        />
      </div>
      <div
        onClick={() => {
          props.onChecked(props.id);
        }}
        style={{ cursor: "pointer" }}
      >
        <img
          className="deleteIconClass"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvQ8KY2jPdcbKF3O-3yLkr452rUd4TN8Uaxg&s"
          alt="delte icon"
        />
      </div>
    </div>
  );
}

export default ToDoItem;
