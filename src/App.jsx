import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SummaryPage from "./SummaryPage";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import { CustomizationProvider } from "./contexts/Customization";
import Cart from "./cart";

function App() {
  return (
    <div className="options__wrapper">
      <Router>
        <CustomizationProvider>
          <div className="option-left">
            <div className="App">
              <Canvas shadows>
              <color args={[0, 0, 0]} attach="background" /> 
                <Experience />
              </Canvas>
            </div>
          </div>

          <Routes>
            <Route path="/" element={<SummaryPage />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CustomizationProvider>
      </Router>
    </div>
  );
}

export default App;
