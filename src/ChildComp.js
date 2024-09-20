import React, { useState } from "react";

const ChildComp = ({ getColor }) => {
  const [color, setColor] = useState("");

  const handleChange = (e) => {
    setColor(e.target.value);
    getColor(e.target.value);
  };
  return (
    <div>
      <input
        className="child-component"
        type="text"
        value={color}
        onChange={handleChange}
        placeholder="Enter a color..."
      />
    </div>
  );
};

export default ChildComp;
