export default function Post({item}) {
  return (
    <div>
        <h5>{item.userId}. {item.title}</h5>
        <p>{item.body}</p>
    </div>
  );
}