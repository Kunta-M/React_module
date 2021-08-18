import {deleteCars} from "../services/cars.service";

export default function Car({item }) {

  return (
    <div>
        <p>
            {item.id}. Model - {item.model} Price - {item.price} Year - {item.year}
            <button onClick={()=>{deleteCars(item.id)}}>Delete</button>
            <button>Edit</button>
        </p>

    </div>
  );
}