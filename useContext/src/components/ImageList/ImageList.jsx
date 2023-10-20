import { places } from '../../data';
import Place from "./Place/Place"

function ImageList() {
  const listItems = places.map((place) => (
    <li key={place.id}>
      <Place place={place}  />
    </li>
  ));
  return <ul>{listItems}</ul>;
}

export default ImageList;