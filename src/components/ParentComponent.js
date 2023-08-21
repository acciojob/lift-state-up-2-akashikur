import React, { useState } from "react";

function ChildComponent({ inputValue, onInputChange }) {
  return (
    <div className="child">
      <input type="text" value={inputValue} onChange={onInputChange} />
    </div>
  );
}

function ParentComponent() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="parent">
      <ChildComponent
        inputValue={inputValue}
        onInputChange={handleInputChange}
      />
      <p>Input Value: {inputValue}</p>
    </div>
  );
}

export default ParentComponent;
