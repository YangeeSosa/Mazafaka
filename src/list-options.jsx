import React, { useState } from "react";
import "./Summary.css";
import { useCustomization } from "./contexts/Customization";

const YourComponent = ({ options }) => {
  let { handle, setHandle } = useCustomization();
  const [selectedOption, setSelectedOption] = useState(options[0].value);
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleSelectChange = (event) => {
    console.log(handle);
    const selectedValue = event.target.value;
    setHandle(selectedValue);
  };
  const submitChanges = (event) => {
    setHandle(event.target.value);
  };
  console.log(handle);
  return (
    <div className="option option-1">
      <form>
        <p className="option-p">Опция 1</p>
        <label className="custom-select">
          <select name="names" value={handle} onChange={submitChanges}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        {/* <button type="submit" onClick={() => {setHandle()}}>submit</button> */}
      </form>
    </div>
  );
};

export default YourComponent;
