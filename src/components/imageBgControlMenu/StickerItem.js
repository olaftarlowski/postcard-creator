import React, { useState, useEffect, useRef } from "react";
import { Image as KonvaImage, Group, Transformer } from "react-konva";
import useImage from "use-image";
import { CloseButton } from "../";

const StickerItem = ({ image, onDelete, isSelected, onChange, onSelect }) => {
  const imageRef = useRef(null);
  const transformRef = useRef();

  const [stickerImage] = useImage(image.src);
  // const [deleteImage] = useImage(cancel);

  const [showDeleteButton, setShowDeleteButton] = useState(false);

  image.resetButtonRef.current = () => {
    setShowDeleteButton(false);
  };

  const [isDragging, setIsDragging] = useState(false);

  const stickerHeight = stickerImage
    ? (image.width * stickerImage.height) / stickerImage.width
    : 0;

  useEffect(() => {
    if (isSelected) {
      setShowDeleteButton(true);
      transformRef.current.nodes([imageRef.current]);
      transformRef.current.getLayer().batchDraw();
    } else {
      setShowDeleteButton(false);
    }
  }, [isSelected]);

  console.log(image);

  return (
    <>
      <Group
        draggable
        //   x={image.x}
        //   y={image.y}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={(event) => {
          image.x = event.target.x();
          image.y = event.target.y();
          setIsDragging(false);
        }}
        onClick={onSelect}
        onTap={onSelect}
        onTransformEnd={(e) => {
          const node = imageRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();
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
      >
        <KonvaImage
          draggable
          ref={imageRef}
          width={image.width}
          height={stickerHeight}
          image={stickerImage}
          x={image.x}
          y={image.y}
          // width={text.width}
          // height={text.height}
          onDragStart={() => {
            setIsDragging(true);
          }}
          onDragEnd={(e) => {
            image.x = e.target.x();
            image.y = e.target.y();
            setIsDragging(false);
          }}
        />
        {showDeleteButton && !isDragging && (
          <CloseButton
            onDelete={onDelete}
            offsetX={image.x}
            offsetY={image.y}
          />
        )}
      </Group>
      {isSelected && (
        <Transformer
          ref={transformRef}
          enabledAnchors={[
            "top-left",
            "top-right",
            "bottom-left",
            "bottom-right",
          ]}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 10 || newBox.height < 10) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
};

export default StickerItem;
