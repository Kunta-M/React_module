import {useEffect, useState} from "react";
import {getCars} from "../services/car.api.service";
import Car from "./Car";

export default function Cars() {

    let [cars, setCars] = useState([]);

    useEffect(()=>{
        getCars().then(value => setCars([...value]))
    })
  return (
    <div>
        {
            cars.map(value => <Car key={value.id} item={value}/>)
        }
    </div>
  );
}