export default function User({item}) {
  return (
    <div>
        <h4>{item.id}. {item.name}</h4>
        <button>Posts</button>

    </div>
  );
}