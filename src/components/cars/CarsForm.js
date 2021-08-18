import {useState} from "react";
import {saveCars} from "../../services/cars.service";

export default function CarsForm() {

    let [carForm, setCarForm] = useState({model:'', price:'', year:''});

    const formChange = (e) =>{
      setCarForm({...carForm, [e.target.name]: e.target.value});
      console.log(carForm)
    }
    
    const onSubmitForm = (e) => {
      e.preventDefault();
      saveCars(carForm)
    }

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <input type="text" name={'model'} value={carForm.model} onInput={formChange}/>
        <input type="text" name={'price'} value={carForm.price} onInput={formChange}/>
        <input type="number" name={'year'} value={carForm.year} onInput={formChange}/>
        <input type="submit" value={'submit'}/>
      </form>
    </div>
  );
}