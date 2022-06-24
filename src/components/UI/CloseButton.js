import { useState } from "react";
import { Image as KonvaImage } from "react-konva";
import useImage from "use-image";

import { cancel } from "../../assets";

const CloseButton = ({ offsetX, offsetY, onDelete }) => {
  const [deleteImage] = useImage(cancel);
  const [cancelImgSize] = useState(24);

  console.log(offsetX, offsetY);

  return (
    <KonvaImage
      onTouchStart={onDelete}
      onClick={onDelete}
      image={deleteImage}
      width={cancelImgSize}
      height={cancelImgSize}
      offsetX={offsetX ? -offsetX + cancelImgSize : cancelImgSize}
      offsetY={offsetY ? -offsetY + cancelImgSize : cancelImgSize}
    />
  );
};

export default CloseButton;
