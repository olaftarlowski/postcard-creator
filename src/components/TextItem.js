import React, { useState, useEffect, useRef } from "react";
import { Text as KonvaText, Group, Transformer } from "react-konva";
import { useHoverDirty, useLongPress } from "react-use";
import { CloseButton } from "./";

const TextItem = ({ text, onDelete, isSelected, onChange, onSelect }) => {
  const textRef = useRef(null);
  const transformRef = useRef();

  const [isDragging, setIsDragging] = useState(false);
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  const isHovered = useHoverDirty(textRef);

  const onLongPress = () => {
    setShowDeleteButton(true);
  };

  const longPressEvent = useLongPress(onLongPress, { delay: 200 });

  useEffect(() => {
    if (isHovered) {
      setShowDeleteButton(true);
    } else {
      setTimeout(() => {
        setShowDeleteButton(false);
      }, 2000);
    }

    if (isSelected) {
      transformRef.current.nodes([textRef.current]);
      transformRef.current.getLayer().batchDraw();
    }
  }, [isHovered, isSelected]);

  return (
    <>
      <Group
        draggable
        onDragStart={() => {
          setIsDragging(true);
        }}
        onDragEnd={(e) => {
          text.x = e.target.x();
          text.y = e.target.y();
          setIsDragging(false);
        }}
        {...longPressEvent}
        onClick={onSelect}
        onTap={onSelect}
        onTransformEnd={(e) => {
          const node = textRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...text,
            x: node.x(),
            y: node.y(),
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY),
          });
        }}
      >
        <KonvaText
          draggable
          ref={textRef}
          text={text.insertedText}
          fontFamily={text.font}
          fontSize={25}
          x={text.x}
          y={text.y}
          width={text.width}
          height={text.height}
          fill={text.colors}
          shadowBlur={isDragging ? 50 : 0}
          onDragStart={() => {
            setIsDragging(true);
          }}
          onDragEnd={(e) => {
            text.x = e.target.x();
            text.y = e.target.y();
            setIsDragging(false);
          }}
        />
        {showDeleteButton && !isDragging && (
          <CloseButton onDelete={onDelete} offsetX={text.x} offsetY={text.y} />
        )}
      </Group>
      {isSelected && (
        <Transformer
          ref={transformRef}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
};

export default TextItem;
