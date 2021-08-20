export default function Car({item}) {
  return (
    <div>
      <h4>
        {item.id}. Model - {item.model} Price - {item.price} Year - {item.year}
      </h4>
    </div>
  );
}