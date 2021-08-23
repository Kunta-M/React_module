export default function Car({item, deleteCars, onEditCar}) {

    const onClickDelete = (e) =>{
       e.preventDefault();
       deleteCars(item.id)}

    const onClickEdit = (e) =>{
        e.preventDefault();
        onEditCar(item.id)
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