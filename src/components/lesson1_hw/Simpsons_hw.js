import './Simpsons_hw.css';

export function Simpsons({name,surname,age,info,photo}){
    return (
        <div>
            <h2>{name} {surname}</h2>
            <h3>age - {age}</h3>
            <p>{info}</p>
            <img src={photo} alt=""/>
        </div>
    );
}