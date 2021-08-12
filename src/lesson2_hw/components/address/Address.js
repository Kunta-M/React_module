import Geo from "../geo/Geo";

export default function Address
    ({address: {city, street, suite, geo}}) {
  return (
    <div>
        <p>{city}</p>
        <i>{street} {suite}</i>
        <Geo geo={geo}/>
    </div>
  );
}