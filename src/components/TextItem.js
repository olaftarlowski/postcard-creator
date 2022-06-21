import React, { useState } from "react";
import { Text } from "react-konva";

const TextItem = ({ text }) => {
  const [isDragging, setIsDragging] = useState(false);

  // console.log(text)

  return (
    <Text
      text={text.insertedText}
      fontFamily={text.font}
      fontSize={30}
      x={text.x}
      y={text.y}
      draggable
      fill={text.colors}
      // fill={isDragging ? "green" : "black"}
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
