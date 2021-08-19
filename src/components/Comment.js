export default function Comment({item}) {
  return (
    <div className={'comments-box'}>
        <h5>{item.id} {item.name}</h5>
        <p>{item.body}</p>
    </div>
  );
}