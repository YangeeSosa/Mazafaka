import React, { useState } from "react";
import "./Summary.css";
import { useCustomization } from "./contexts/Customization";

const YourComponent = ({ options }) => {
  const { setHandle } = useCustomization();
  const [selectedOption, setSelectedOption] = useState(options[0].value);

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    setHandle(selectedValue);
  };
  return (
    <div className="option option-3">
      <form>
        <p className="option-p">Опция 3</p>
        <label className="custom-select">
          <select
            name="names"
            value={selectedOption}
            onChange={handleSelectChange}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </form>
    </div>
  );
};

export default YourComponent;
