export default function User({item}) {
  return (
    <div className={'user-box'}>
            <h4>{item.id}. {item.name}</h4>
            <p>Contacts:
                <br/>email: {item.email}
                <br/>phone: {item.phone}
                <br/>website: {item.website}
            </p>
    </div>
  );
}