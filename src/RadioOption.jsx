import React, { useState } from "react";

const RadioOption = ({ id, label }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleRadioChange = () => {
    setIsChecked(true);
  };

  return (
    <label htmlFor={id} className="option__item">
      <input
        type="radio"
        name="option"
        id={id}
        checked={isChecked}
        onChange={handleRadioChange}
      />
      <span id="text">{label}</span>
    </label>
  );
};

export default RadioOption;
