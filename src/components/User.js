export default function User({item, history}) {

  let navigate = () =>{
    history.push('/users/' + item.id)
  }

  return (
    <div>

      {item.id}. {item.name} - <button onClick={navigate}>Details</button>

    </div>
  );
}