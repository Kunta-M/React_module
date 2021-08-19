import {editCar} from "../../services/cars.service";

export default function Car({item, deleteCars}) {

    const onClickDelete = (e) =>{
       e.preventDefault();
       deleteCars(item.id)}



  return (
    <div>
            <p>
                {item.id}. Model - {item.model} Price - {item.price} Year - {item.year}
                <button onClick={onClickDelete}>Delete</button>
                <button >Edit</button>
            </p>
    </div>
  );
}