import "./PlaceImage.css";
import { getImageUrl } from "../../../../utils";
import { useContext } from "react";
import { ImageContext } from "../../../../contexts/image-context";

function PlaceImage({ place }) {
  const imageSize = useContext(ImageContext);
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}

export default PlaceImage;
