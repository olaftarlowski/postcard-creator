import React, { useState } from "react";
import { Text } from "react-konva";

const TextItem = ({ text }) => {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <Text
      text="Draggable Text xD"
      x={text.x}
      y={text.y}
      draggable
      fill={isDragging ? "green" : "black"}
      onDragStart={() => {
        setIsDragging(true);
      }}
      onDragEnd={(e) => {
        text.x = e.target.x();
        text.y = e.target.y();
        setIsDragging(false);
      }}
    />
  );
};

export default TextItem;
