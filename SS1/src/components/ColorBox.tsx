import React from "react";

type ColorBoxProps = {
  color: string;
};

function ColorBox({ color }: ColorBoxProps) {
  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: color,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        Box
      </div>
    </div>
  );
}

export default ColorBox;
