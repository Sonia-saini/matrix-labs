import { Box } from "@chakra-ui/react";
import "./App.css";
import SimpleSidebar from "./Component/sidebar";

function App() {
  return (
    <>
      <SimpleSidebar></SimpleSidebar>
      <div className="App" style={{ position: "relative" }}>
        <Box
          style={{
            width: "100%",
            height: "68px",
            flexShrink: 0,
            background: "#F30050",
            position: "fixed",
            bottom: 0,
          }}
        ></Box>
      </div>
    </>
  );
}

export default App;
