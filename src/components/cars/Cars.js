import {useEffect, useState} from "react";
import {getCars} from "../../services/cars.service";
import Car from "../car/Car";

export default function Cars() {

  let [cars, setCars] = useState([]);

  useEffect(() =>{
    getCars().then(value => setCars([...value]));
  }, []);

  return (
    <div>

      {
        cars.map(value => <Car item={value} key={value.id}/>)
      }

    </div>
  );
}