import { createContext, useContext, useState, useEffect } from "react";

const CustomizationContext = createContext({});

export const CustomizationProvider = (props) => {
  const [handle, setHandle] = useState("Закругленная");
  const [front, setFront] = useState("ПортоМуар");
  const [back, setBack] = useState("Бастион");
  useEffect(() => {}, [handle]);

  return (
    <CustomizationContext.Provider
      value={{
        handle,
        setHandle,
        front,
        setFront,
        back,
        setBack,
      }}
    >
      {props.children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  return context;
};
