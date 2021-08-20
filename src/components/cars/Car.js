import {editCar} from "../../services/cars.service";

export default function Car({item, deleteCars, addCar}) {

    const onClickDelete = (e) =>{
       e.preventDefault();
       deleteCars(item.id)}

    const onClickEdit = (e) =>{
        e.preventDefault();
        addCar(item.id)
    }
  return (
    <div>
            <p>
                {item.id}. Model - {item.model} Price - {item.price} Year - {item.year}
                <button onClick={onClickDelete}>Delete</button>
                <button onClick={onClickEdit}>Edit</button>
            </p>
    </div>
  );
}