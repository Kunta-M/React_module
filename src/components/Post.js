export default function Post({item}) {
  return (
    <div className={'posts-box'}>
        <h5>{item.id}. {item.title}</h5>
        <p>{item.body}</p>

    </div>
  );
}