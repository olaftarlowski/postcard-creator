import { Image as KonvaImage } from "react-konva";
import useImage from "use-image";

import { cancel } from "../../assets";
import { cancelImgSize } from "../stickers.data";

const CloseButton = ({ offsetX, offsetY, onDelete }) => {
  const [deleteImage] = useImage(cancel);

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
