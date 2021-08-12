import Address from "../address/Address";

export default function User({item, item: {address}}) {

    return (
      <div>
          <h4>{item.id} {item.name}</h4>
          <Address address={address}/>
      </div>
  );
}