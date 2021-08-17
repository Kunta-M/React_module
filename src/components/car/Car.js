export default function Car({item}) {
  return (
    <div>
      {item.id}. Model - {item.model} Price - {item.price} Year - {item.year}
    </div>
  );
}