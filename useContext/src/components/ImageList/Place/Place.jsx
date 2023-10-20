import "./Place.css";
import PlaceImage from "./PlaceImage/PlaceImage";

function Place({ place  }) {
  return (
    <>
      <PlaceImage place={place}  />
      <p>
        <b>{place.name}</b>
        {": " + place.description}
      </p>
    </>
  );
}

export default Place;