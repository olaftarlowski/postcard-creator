import React, { useState, useEffect, useRef } from "react";
import { Image as KonvaImage, Group, Transformer } from "react-konva";
import useImage from "use-image";
import { useHoverDirty, useLongPress } from "react-use";

import { cancel } from "../assets";

const StickerItem = ({
  image,
  onDelete,
  onDragEnd,
  isSelected,
  onChange,
  onSelect,
}) => {
  const imageRef = useRef(null);
  const transformRef = useRef();

  const isHovered = useHoverDirty(imageRef);

  const [stickerImage] = useImage(image.src);
  const [deleteImage] = useImage(cancel);

  const [showDeleteButton, setShowDeleteButton] = useState(false);

  const onLongPress = () => {
    setShowDeleteButton(true);
  };

  image.resetButtonRef.current = () => {
    setShowDeleteButton(false);
  };
  const longPressEvent = useLongPress(onLongPress, { delay: 200 });
  const [isDragging, setIsDragging] = useState(false);

  const stickerWidth = image.width;
  const stickerHeight = stickerImage
    ? (image.width * stickerImage.height) / stickerImage.width
    : 0;

  useEffect(() => {
    if (isHovered) {
      setShowDeleteButton(true);
    } else {
      setTimeout(() => {
        setShowDeleteButton(false);
      }, 2000);
    }

    if (isSelected) {
      transformRef.current.nodes([imageRef.current]);
      transformRef.current.getLayer().batchDraw();
    }
  }, [isHovered, isSelected]);

  return (
    <Group
      draggable
      //   x={image.x}
      //   y={image.y}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={(event) => {
        setIsDragging(false);
        onDragEnd(event);
      }}
    >
      <KonvaImage
        ref={imageRef}
        width={image.width}
        height={stickerHeight}
        image={stickerImage}
        {...longPressEvent}
        onClick={onSelect}
        onTap={onSelect}
        onTransformEnd={(e) => {
          // transformer is changing scale of the node
          // and NOT its width or height
          // but in the store we have only width and height
          // to match the data better we will reset scale on transform end
          const node = imageRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...image,
            x: node.x(),
            y: node.y(),
            // set minimal value
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY),
          });
        }}
      />
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
      {showDeleteButton && !isDragging && (
        <KonvaImage
          onTouchStart={onDelete}
          onClick={onDelete}
          image={deleteImage}
          width={25}
          height={25}
          offsetX={-stickerWidth / 2 - 20}
        />
      )}
    </Group>
  );
};

export default StickerItem;
