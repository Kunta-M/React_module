export default function Comment({item, commentsDetails}) {
  return (
    <div>
      {item.id}. {item.name}
        <button onClick={()=> commentsDetails(item.id)}>Info</button>
    </div>
  );
}