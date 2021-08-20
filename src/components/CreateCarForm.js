import {createCars} from "../services/car.api.service";

export default function CreateCarForm() {

    const onSubmitCarSave = (e) => {
        e.preventDefault();
        let carToSave = {model: e.target.model.value,
            price: e.target.price.value,
            year: e.target.year.value}
        createCars(carToSave)
    }

  return (
    <div>
        <form onSubmit={onSubmitCarSave}>
            <div className={'form-box'}>
            <input type="text" name={'model'} placeholder={'model'} />
            <input type="text" name={'price'} placeholder={'price'} />
            <input type="number" name={'year'} placeholder={'year'} />

            <input type="submit" value={'Save'} />
            </div>
        </form>
    </div>
  );
}