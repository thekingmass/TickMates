import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function handleAddClick() {
    if (inputText) {
      props.onAddClicked(inputText);
      setInputText("");
    }
  }

  return (
    <div className="form">
      <input
        onChange={handleChange}
        // onKeyPress={(e) => e.key === "Enter" && handleAddClick}
        type="text"
        value={inputText}
      />
      <button onClick={handleAddClick}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
