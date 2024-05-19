// CheckboxOption.js
import React, { useState } from "react";
import "./Summary.css";
const CheckboxOption = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="option__item-check">
      <label>
        <input
          type="checkbox"
          className="custom-checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        {label}

        <span className="custom-checkbox-icon"></span>
      </label>
    </div>
  );
};

export default CheckboxOption;
