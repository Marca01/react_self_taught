import { useState } from "react";

function getRandomColor(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function useColorBox() {
  const [colorBox, setColorBox] = useState(() => {
    const keepColor = localStorage.getItem("color-box") || "rgb(183, 175, 177)";
    return keepColor;
  });
  function handleColorBox() {
    const colorRand = [
      getRandomColor(0, 255),
      getRandomColor(0, 255),
      getRandomColor(0, 255),
    ];
    const newColor = `rgb(${colorRand[0]}, ${colorRand[1]}, ${colorRand[2]})`;
    setColorBox(newColor);
    localStorage.setItem("color-box", newColor);
  }
  return { colorBox, handleColorBox };
}

export default useColorBox;
