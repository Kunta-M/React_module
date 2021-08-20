import Cars from "./Cars";
import Car from "./Car";

export default function UpdateCarForm({car}) {

  return (
    <div>
        <form action="">
            <select name={'Choose car'} placeholder={'model'}>
                <div>

                </div>
            </select>
        </form>

        <form className={'update-form'}>
            <input type="text" name={'model'}/>
            <input type="text" name={'price'}/>
            <input type="number" name={'year'}/>

            <input type="submit" value={'Update'}/>
        </form>
    </div>
  );
}